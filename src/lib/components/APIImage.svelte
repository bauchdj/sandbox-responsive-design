<script>
	let photoUrl = "";
	const photoAlt = "Photo from Lorem Picsum";
	let loading = true;
	let error = false;

	const apiEndpoint = "https://picsum.photos/640/480";

	const fetchPhoto = async () => {
		try {
			const response = await fetch(apiEndpoint);

			if (response.ok) {
				photoUrl = response?.url || "";
				loading = false;
			} else {
				error = true;
				throw new Error("Error fetching photo");
			}
		} catch (err) {
			console.error(err);
			error = true;
			loading = false;
		}
	};

	fetchPhoto();
</script>

{#if loading}
	<p>Loading...</p>
{:else if error}
	<p>Error loading photo!</p>
{:else}
	<img src="{photoUrl}" alt="{photoAlt}" />
{/if}
