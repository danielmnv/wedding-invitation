<script>
    // Components
    import Title from '$lib/components/Title.svelte';
    import Text from '$lib/components/Text.svelte';

    export let title, items, type = 1, variant = '', formatTitle = true;

    // Get the proper title
    function getTitle() {
        return formatTitle ?
            title.replace('__var__', `de${type == 1 ? ` la` : 'l'} ${variant}`)
            : title;
    }
</script>

<div class="{$$props.class}">
    <Title 
        text={getTitle()}
        icon={false}
    />

    <Text
        class="text-center"
        hasContainer={true}
    >
        <ul class="flex flex-col">
            {#each items as item}
            <li class="people-item">{item}</li>
            {/each}
        </ul>
    </Text>
</div>