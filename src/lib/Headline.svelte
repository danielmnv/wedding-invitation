<script>
    import Saos from 'saos';
</script>
<section>
    <!-- Names -->
	<section class="section container flex flex-col gap-y-7">
		<div class="text-center uppercase">
            <Saos 
                animation={"fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"}
                once={true}
            >
                <p>¡Nos casamos!</p>
            </Saos>
		</div>
		<div class="text-center">
            <Saos 
                animation={"scale-in-hor-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}
                once={true}
            >
                <h1 class="handwriting text-8xl">Jhazzel</h1>
                <h3 class="handwriting text-5xl">&</h3>
                <h1 class="handwriting text-8xl">Edgar</h1>
            </Saos>
		</div>
	</section>

    <!-- Date -->
    <section class="section container py-10">
        <div class="grid grid-cols-3">
            <!-- Day -->
            <div class="h-48 pr-0">
                <div class="table w-full h-full">
                    <div class="table-cell align-middle">
                        <div class="before:table-cell after:table-cell">
                            <div class="py-2 border-y-2 border-primary">
                                <p class="text-center tracking-widest uppercase text-base md:text-lg">sábado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Number -->
            <div class="h-48 border-x-2 border-primary">
                <div class="h-48 pr-0">
                    <div class="w-full h-full">
                        <div class="h-full">
                            <div class="before:table-cell after:table-cell h-full">
                                <div class="h-full flex flex-col justify-around">
                                    <p class="text-center uppercase tracking-wider text-base md:text-lg">4:00 pm</p>
                                    <p class="text-center handwriting text-5xl md:text-6xl">24</p>
                                    <p class="text-center tracking-wider text-base md:text-lg">2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Month -->
            <div class="h-48 pl-0">
                <div class="table w-full h-full">
                    <div class="table-cell align-middle">
                        <div class="before:table-cell after:table-cell">
                            <div class="py-2 border-y-2 border-primary">
                                <p class="text-center tracking-widest uppercase text-base md:text-lg">septiembre</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>

<style>

</style>