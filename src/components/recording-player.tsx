'use client';

import { Maximize, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';

const SPEEDS = [1, 1.5, 2, 0.5];

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${m}:${s}`;
}

const controlButton =
  'rounded-(--radii-small) p-1.5 text-(--snow) transition-colors hover:bg-(--red) focus-visible:bg-(--red) focus-visible:outline-none';

export function RecordingPlayer({
  src,
  poster,
  title,
  caption,
}: {
  src: string;
  poster?: string;
  title?: string;
  caption?: string;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIndex, setSpeedIndex] = useState(0);

  // metadata can load before hydration, so the onLoadedMetadata handler never fires
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 1) setDuration(video.duration);
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  const seek = (to: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(Math.max(to, 0), duration);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const cycleSpeed = () => {
    const next = (speedIndex + 1) % SPEEDS.length;
    if (videoRef.current) videoRef.current.playbackRate = SPEEDS[next];
    setSpeedIndex(next);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void frameRef.current?.requestFullscreen();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.key === ' ' || e.key === 'k') {
      e.preventDefault();
      toggle();
    } else if (e.key === 'ArrowRight') seek(time + 5);
    else if (e.key === 'ArrowLeft') seek(time - 5);
    else if (e.key === 'm') toggleMute();
    else if (e.key === 'f') toggleFullscreen();
  };

  return (
    <figure className="not-prose my-6">
      <div
        ref={frameRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="flex flex-col overflow-hidden rounded-(--radii-ultra) border-2 border-(--red/20) bg-(--dark) text-(--snow) shadow-(--shadow-elevated) focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-(--orange)/60 [&:fullscreen]:rounded-none [&:fullscreen]:border-0"
      >
        {title && (
          <div className="flex items-center gap-2 border-b border-(--darkless) px-4 py-2 text-sm font-bold">
            <span className="truncate">{title}</span>
          </div>
        )}

        <div className="relative min-h-0 flex-1">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            playsInline
            preload="metadata"
            onClick={toggle}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            className="block aspect-video h-full w-full cursor-pointer bg-black object-contain"
          />
          {!playing && (
            <button
              type="button"
              onClick={toggle}
              aria-label="Play"
              className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full bg-(--red) text-white shadow-(--shadow-card) transition-transform hover:scale-110"
            >
              <Play className="ml-1 size-7 fill-current" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 border-t border-(--darkless) px-3 py-2 text-sm sm:gap-3 sm:px-4">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? 'Pause' : 'Play'}
            className={controlButton}
          >
            {playing ? (
              <Pause className="size-4 fill-current" />
            ) : (
              <Play className="size-4 fill-current" />
            )}
          </button>
          <span className="shrink-0 tabular-nums text-(--muted)">
            {formatTime(time)} / {formatTime(duration)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={time}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label="Seek"
            className="h-1.5 min-w-0 flex-1 cursor-pointer accent-(--red)"
          />
          <button
            type="button"
            onClick={cycleSpeed}
            aria-label="Playback speed"
            className="shrink-0 rounded-(--radii-small) bg-(--darkless) px-2 py-0.5 font-bold tabular-nums transition-colors hover:bg-(--red)"
          >
            {SPEEDS[speedIndex]}×
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className={controlButton}
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Fullscreen"
            className={controlButton}
          >
            <Maximize className="size-4" />
          </button>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-fd-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
