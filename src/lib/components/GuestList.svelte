<script>
    import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
    import { onMount, getContext } from 'svelte';

    // Components
	import Select from 'svelte-select';
    import Fa from 'svelte-fa';
    import Saos from 'saos';

    // Services
    import { key } from '../../services';
    const { _guestService, _eventService } = getContext(key)
    
    export let guest, showList = true;

	let list = [], noOptionsMessage, noOptionsText, defaultOptionsText;

    // Select properties
	let groupBy;
    const getOptionLabel = (option) => option.name;
    const getSelectionLabel = (option) => option.name;
    const optionIdentifier = 'id';
    const iconProps = { icon: faPeopleGroup };

    // Set data of guest
    function setGuest(event) {
        gtag('event', 'view_search_results', { 'items': [event.detail] });

        showList = false;
        guest = event.detail;
        window.history.replaceState({}, '', `/?guest=${encodeURIComponent(guest.name)}`);
    }

    // Find results in the guest list
    async function searchGuest(filterText) {
        // At least three chars are required to filter
        if (filterText.length <= 2) {
            noOptionsMessage = defaultOptionsText
            return [];
        }

        // Convert filtert text
        filterText = filterText.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
        gtag('event', 'search', { 'search_term': filterText });

        // Filter items
        const items = list.filter(item => {
            const name = item.name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
            return name.includes(filterText)
        })

        if (!items.length) {
            noOptionsMessage = noOptionsText;
        }

        return items;
    } 

    onMount(() => {
        // Group guests
        _eventService
            .then(doc => {
                groupBy = (item) => doc.tickets.groupText.replace('__var__', item.group == 1 ? 'a' : 'o');

                // Texts
                noOptionsMessage = defaultOptionsText = doc.tickets.defaultOptionsText;
                noOptionsText = doc.tickets.noOptionsText;
            });
        // Get full list of guests
        _guestService
            .getAll()
            .then(docs => list = docs);
    });
</script>

<div>
    {#await _eventService then event}
    <Saos 
        animation={"fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
        once={true}
        top={100}
    >
        <div class="container py-8 px-5 md:px-20">
            <div class="guest-list text-secondary">
                <Select 
                    placeholder={event.tickets.placeholder}
                    loadOptions={searchGuest}
                    showChevron={true}
                    Icon={Fa}
                    {groupBy}
                    {iconProps}
                    {getOptionLabel}
                    {noOptionsMessage}
                    {getSelectionLabel}
                    {optionIdentifier}
                    on:select={setGuest}
                />
            </div>
        </div>
    </Saos>
    {/await}
</div>

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

        @apply transition-all duration-500 normal-case;
	}
</style>
