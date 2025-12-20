export default function VisualizerControls({
                                               onLoad,
                                               onPrev,
                                               onNext,
                                               onPlay,
                                               onPause,
                                               onReset,
                                               sorting,
                                               paused,
                                               stepIndex,
                                               stepsLength,
                                           }) {
    const stepsLoaded = stepsLength > 0;

    return (
        <div className="flex gap-3 mb-6">

            <button
                type="button"
                onClick={onLoad}
                disabled={sorting}
                className="border px-3 py-2 rounded disabled:opacity-50"
            >
                Load Steps
            </button>

            <button
                type="button"
                onClick={onPrev}
                disabled={!stepsLoaded || stepIndex === 0 || (sorting && !paused)}
                className="border px-3 py-2 rounded disabled:opacity-50"
            >
                ⏮ Prev
            </button>

            <button
                type="button"
                onClick={onNext}
                disabled={!stepsLoaded || stepIndex >= stepsLength - 1 || (sorting && !paused)}
                className="border px-3 py-2 rounded disabled:opacity-50"
            >
                Next ⏭
            </button>

            <button
                type="button"
                onClick={onPlay}
                disabled={!stepsLoaded || (sorting && !paused)}
                className="border px-3 py-2 rounded disabled:opacity-50"
            >
                ▶ Play
            </button>

            <button
                type="button"
                onClick={onPause}
                disabled={!sorting || paused}
                className="border px-3 py-2 rounded disabled:opacity-50"
            >
                ⏸ Pause
            </button>

            <button
                type="button"
                onClick={onReset}
                className="border px-3 py-2 rounded hover:bg-gray-100"
            >
                ⟳ Reset
            </button>

        </div>
    );
}
