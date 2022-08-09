<script>
    import { faCalendar } from '@fortawesome/free-solid-svg-icons'
    import { getContext } from 'svelte';

    // Components
    import Title from '$lib/components/Title.svelte';
    import Deco from '$lib/components/Deco.svelte';
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
    import Saos from 'saos';

    // Services
    import { key } from '../services';
    const { _eventService } = getContext(key);
</script>

<section class="section">
    {#await _eventService then event}
    <Deco
        class="-left-1 top-15  rotate-45"
        image="deco.png"
    />
    <Deco
        class="-left-1 top-40 rotate-45"
        image="deco.png"
    />

    <Title text={event.schedule.title} icon={faCalendar} />

    <div class="pt-8">
        <Timeline position="right">
            {#each event.schedule.phases as item}
            <TimelineItem>
                <TimelineOppositeContent slot="opposite-content">
                    <div class="h-full flex items-center justify-end">
                        <Saos
                            animation={'puff-in-tr 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'}
                            once={true}
                            top={100}
                        >
                            <img class="schedule-icon" src={item.icon} alt={item.title}>
                        </Saos>
                    </div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector style={'background-color: #cdaf57;'}/>
                    <TimelineDot style={'background-color: transparent; border-color: rgb(71 85 105);'} />
                    <TimelineConnector style={'background-color: #cdaf57;'} />
                </TimelineSeparator>
                <TimelineContent>
                    <Saos
                        animation={'puff-in-tl 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'}
                        once={true}
                        top={100}
                    >
                        <div class="h-full flex flex-col justify-center items-start md:px-5">
                            <p class="font-bold text-secondary">{item.time}</p>
                            <h4 class="handwriting text-4xl">{item.title}</h4>
                        </div>
                    </Saos>
                </TimelineContent>
            </TimelineItem>
            {/each}
        </Timeline>
    </div>

    <Deco
        class="-right-10 -rotate-90"
        image="leaves.png"
    />
    {/await}
</section>