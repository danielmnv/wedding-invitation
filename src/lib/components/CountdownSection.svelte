<script>
    export let number, unit;
</script>

<div class="flex flex-col items-center gap-y-1">
    <span class="handwriting font-extrabold text-3xl md:text-5xl md:font-semibold">{number}</span>
    <span class="uppercase tracking-widest font-extrabold text-xs md:text-sm md:font-semibold">{unit}</span>
</div>