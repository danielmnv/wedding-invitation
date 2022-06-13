<script>
    import { onMount } from 'svelte';

    let time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    onMount(async () => {
		const countdown = () => {
            const countDate = new Date("September 24, 2022 17:00:00");
            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            time.days = Math.floor(gap / day);
            time.hours = Math.floor((gap % day) / hour);
            time.minutes = Math.floor((gap % hour) / minute);
            time.seconds = Math.floor((gap % minute) / second);
        };

        setInterval(() => countdown(), 1000);
	});
</script>

<section>
    <p>{time.days} {time.hours} {time.minutes} {time.seconds}</p>
</section>