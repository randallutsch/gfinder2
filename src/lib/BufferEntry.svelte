<script lang="ts">
	export let bufferValue : number;
	export let nameValue : string;
	export let unitValue : string;

</script>



<div class="BufferEntry" data-testid="BufferEntry">
	<label for="buffer-value">Buffer (mi.):</label>
	<input type="number" id="buffer-value"
		bind:value={bufferValue}
		min="1"
		step=1
	/>
	<select bind:value={unitValue} >
		<option value="feet">Ft</option>
		<option value="miles" selected>Mi</option>
	</select>
	<label for="name-value">Name:</label>
	<input type="text" id="name-value"
		bind:value={nameValue}
	/>
</div>