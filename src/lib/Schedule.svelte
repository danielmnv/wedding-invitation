<script>
    import Saos from 'saos';
    import Title from '$lib/components/Title.svelte';
    import { faCalendar } from '@fortawesome/free-solid-svg-icons'
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

    let items = [
        { time: '2:00 pm', title: 'Ceremonia', icon: '/icons/rings.png'},
        { time: '6:00 pm', title: 'Recepción', icon: '/icons/room.png' },
        { time: '7:00 pm', title: 'Civíl', icon: '/icons/civil.png' },
        { time: '9:00 pm', title: 'Cena', icon: '/icons/dinner.png' },
        { time: '10:00 pm', title: 'Baile', icon: '/icons/dance.png' },
        { time: '12:00 am', title: 'Fin', icon: '/icons/end.png' },
    ]
</script>

<section class="section">
    <Title text={'Itinerario'} icon={faCalendar} />

    <div class="pt-8">
        <Timeline position="right">
            {#each items as item}
            <TimelineItem>
                <TimelineOppositeContent slot="opposite-content">
                    <Saos
                        animation={'puff-in-tr 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'}
                        once={true}
                        top={100}
                    >
                        <div class="h-full flex justify-end md:py-3 md:px-3">
                            <img class="schedule-icon" src={item.icon} alt={item.title}>
                        </div>
                    </Saos>
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
</section>

<style>
</style>