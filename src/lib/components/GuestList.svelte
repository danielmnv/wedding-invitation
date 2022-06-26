<script>
    import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
	import Select from 'svelte-select';
    import Fa from 'svelte-fa';
    import Saos from 'saos';
    
    export let guest, showList = true;

	const list = [
		{ value: 'fam1', label: 'Fam. Molina de la Cruz', group: 1, ticket: Math.floor(Math.random() * 8) + 1 },
		{ value: 'fam2', label: 'Fam. Perez Lopez', group: 2, ticket: Math.floor(Math.random() * 8) + 1 },
		{ value: 'fam3', label: 'Fam. Gaytan Molina', group: 1, ticket: Math.floor(Math.random() * 8) + 1},
	];

	const groupBy = (item) => `Invitados Novi${item.group == 1 ? 'a' : 'o'}`;
    const iconProps = { icon: faPeopleGroup }

    function setGuest(event) {
        guest = event.detail;
        showList = false;
    }
</script>

<Saos 
    animation={"fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
    once={true}
    top={100}
>
    <div class="container py-8 px-5 md:px-20">
        <div class="guest-list text-secondary">
            <Select 
                placeholder="Invitados ..."
                hideEmptyState={true}
                items={list}
                groupBy={groupBy}
                Icon={Fa}
                iconProps={iconProps}
                showChevron={true}
                on:select={setGuest}
            />
        </div>
    </div>
</Saos>

<style>
	.guest-list {
        /* Input */
		--border: 1px solid theme('borderColor.secondary');
		--borderRadius: theme('borderRadius.md');
        --borderHoverColor: theme('borderColor.primary');
        --borderFocusColor: theme('borderColor.primary');

        /* List */
        --itemHoverColor: theme('colors.black');

        /* Icon and text */
		--selectedItemPadding: 0 10px 0 8px;
		--inputPadding: 0 10px 0 40px;

        @apply transition-all duration-500;
	}
</style>
