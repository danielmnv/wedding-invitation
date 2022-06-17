<script>
    import Saos from 'saos';
    import CountdownSection from '$lib/CountdownSection.svelte';
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

            time.days = `${(Math.floor(gap / day))}`.padStart(2, '0');
            time.hours = `${(Math.floor((gap % day) / hour))}`.padStart(2, '0');
            time.minutes = `${(Math.floor((gap % hour) / minute))}`.padStart(2, '0');
            time.seconds = `${(Math.floor((gap % minute) / second))}`.padStart(2, '0');
        };

        setInterval(() => countdown(), 1000);
	});
</script>

<section>
    <p class="text-center uppercase p-9 tracking-widest">Sólo faltan:</p>

    <!-- Countdown -->
    <div class="container bg-primary bg-opacity-85 px-8 md:px-28 md:rounded-md">
        <Saos 
            animation={"fade-in 3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
            once={true}
        >
            <div class="flex flex-row">
                <div class="flex-1">
                    <CountdownSection number={time.days} unit="días" />
                </div>
                <div class="flex-1">
                    <CountdownSection number={time.hours} unit="hrs" />
                </div>
                <div class="flex-1">
                    <CountdownSection number={time.minutes} unit="min" />
                </div>
                <div class="flex-1">
                    <CountdownSection number={time.seconds} unit="seg" />
                </div>
            </div>
        </Saos>
    </div>
</section>