<script>
    import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
    import { onMount, getContext } from 'svelte';

    // Components
	import Select from 'svelte-select';
    import Fa from 'svelte-fa';
    import Saos from 'saos';

    // Services
    import { key } from '../../services';
    const { _guestService } = getContext(key)
    
    export let guest, showList = true;

	let list = [];

    // Select properties
	const groupBy = (item) => `Invitados Novi${item.group == 1 ? 'a' : 'o'}`;
    const getOptionLabel = (option) => option.name;
    const getSelectionLabel = (option) => option.name;
    const optionIdentifier = 'id';
    const iconProps = { icon: faPeopleGroup };

    // Set data of guest
    function setGuest(event) {
        showList = false;
        guest = event.detail;
        window.history.replaceState({}, '', `/?guest=${encodeURIComponent(guest.name)}`);
    }

    onMount(() => {
        // Get full list of guests
        _guestService
            .getAll()
            .then(docs => list = docs);
    });
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
                showChevron={true}
                items={list}
                Icon={Fa}
                {groupBy}
                {iconProps}
                {getOptionLabel}
                {getSelectionLabel}
                {optionIdentifier}
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
