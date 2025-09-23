<script>
	import Text from '$lib/components/atoms/Text.svelte';
	// import { enhance } from '$app/forms';
	// import * as z from 'zod';
	// import { cn } from '$lib/utils/cn.js';
	// import CheckCircle from '$lib/components/icons/CheckCircle.svelte';
	//
	// let { form } = $props();
	//
	// let isFormSubmitted = $state(false);
	// let errors = $state();
	//
	// const FormSchema = z.object({
	// 	firstName: z.string().min(1).max(50),
	// 	lastName: z.string().min(1).max(50),
	// 	email: z.email(),
	// 	message: z.string().min(1).max(8000)
	// });
	//
	// function handleSubmitEnhanced({ formElement, formData, action, cancel, submitter }) {
	// 	const data = Object.fromEntries(formData);
	//
	// 	// 'company' is a honeypot field
	// 	if (data?.company?.length > 0) {
	// 		// TODO: add logging
	// 		cancel();
	// 	}
	//
	// 	const validationResult = FormSchema.safeParse(data);
	// 	if (!validationResult.success) {
	// 		errors = z.flattenError(validationResult.error).fieldErrors;
	// 		cancel();
	// 	} else {
	// 		return async ({ update, result }) => {
	// 			if (result.type === 'success' && result.data?.success) {
	// 				isFormSubmitted = true;
	// 				setTimeout(() => {
	// 					isFormSubmitted = false;
	// 				}, 1500);
	// 			}
	// 			update();
	// 			errors = {};
	// 		};
	// 	}
	// }
	//
	// function hasError(fieldName) {
	// 	return errors?.[fieldName]?.length > 0;
	// }
	//
	// function cleanErrorOnInputChange(event) {
	// 	const { name } = event.target;
	// 	errors = { ...errors, [name]: undefined };
	// }
</script>

<section id="contact" class="section-scroll-margin overflow-x-hidden">
	<div
		class="mt-[100px] -ml-[170px] h-[55px] w-[calc(100%+200px)] bg-[url(/lets-talk-decoration.svg)] bg-size-[auto_55px] lg:h-20 lg:bg-size-[auto_80px]"
	></div>

	<div class="w-full px-4 2xl:px-0">
				<div class="mx-auto my-[100px] flex w-full max-w-[1216px] flex-col items-center px-4 py-20">
					<h2 class="text-center text-2xl font-semibold lg:text-4xl">
						Looking for a design consultation?
					</h2>
					<Text class="max-w-[574px] pt-5 text-center !text-[#535862] lg:!text-xl">Message me on Telegram or LinkedIn</Text>
				</div>
	</div>

<!--	<div class="w-full px-4 2xl:px-0">-->
<!--		<div-->
<!--			class="bg-brand-blue/5 mx-auto my-[100px] flex w-full max-w-[1216px] flex-col items-center rounded-2xl px-4 py-16"-->
<!--		>-->
<!--			<h2 class="text-center text-2xl font-semibold lg:text-4xl">-->
<!--				Looking for a design consultation?-->
<!--			</h2>-->
<!--			<Text class="max-w-[574px] pt-5 text-center !text-[#535862] lg:!text-xl"-->
<!--				>Leave your email, and I’ll reach out to you as soon as possible with design ideas to assist-->
<!--				you!</Text-->
<!--			>-->

<!--			&lt;!&ndash;	server action for this form is in root +page.server.js file&ndash;&gt;-->
<!--			<form-->
<!--				method="POST"-->
<!--				use:enhance={handleSubmitEnhanced}-->
<!--				novalidate-->
<!--				class="mt-8 grid w-full max-w-[480px] grid-cols-1 gap-6"-->
<!--			>-->
<!--				<div class="flex w-full flex-col gap-y-6 lg:flex-row lg:gap-x-8">-->
<!--					<div class="form-group w-full">-->
<!--						<label class="form-label" for="firstName">First name *</label>-->
<!--						<input-->
<!--							class={cn('input', hasError('firstName') && 'input-error')}-->
<!--							id="firstName"-->
<!--							name="firstName"-->
<!--							type="text"-->
<!--							placeholder="First name"-->
<!--							oninput={cleanErrorOnInputChange}-->
<!--						/>-->
<!--					</div>-->

<!--					<div class="form-group w-full">-->
<!--						<label class="form-label" for="lastName">Last name * </label>-->
<!--						<input-->
<!--							class={cn('input', hasError('lastName') && 'input-error')}-->
<!--							id="lastName"-->
<!--							name="lastName"-->
<!--							type="text"-->
<!--							placeholder="Last name"-->
<!--							oninput={cleanErrorOnInputChange}-->
<!--						/>-->
<!--					</div>-->
<!--				</div>-->

<!--				<div class="form-group">-->
<!--					<label class="form-label" for="email">Email *</label>-->
<!--					<input-->
<!--						class={cn('input', hasError('email') && 'input-error')}-->
<!--						id="email"-->
<!--						name="email"-->
<!--						type="email"-->
<!--						placeholder="you@company.com"-->
<!--						oninput={cleanErrorOnInputChange}-->
<!--					/>-->
<!--				</div>-->

<!--				&lt;!&ndash;			honeypot &ndash;&gt;-->
<!--				<div class="hidden">-->
<!--					<label for="company"></label>-->
<!--					<input-->
<!--						name="company"-->
<!--						type="text"-->
<!--						tabindex="-1"-->
<!--						autocomplete="off"-->
<!--						oninput={cleanErrorOnInputChange}-->
<!--					/>-->
<!--				</div>-->

<!--				<div class="form-group">-->
<!--					<label class="form-label" for="message">Message *</label>-->
<!--					<textarea-->
<!--						class={cn('input bg-none', hasError('message') && 'input-error')}-->
<!--						id="message"-->
<!--						name="message"-->
<!--						rows="4"-->
<!--						placeholder="Leave us a message..."-->
<!--						oninput={cleanErrorOnInputChange}-->
<!--					></textarea>-->
<!--				</div>-->

<!--				{#if isFormSubmitted}-->
<!--					<button-->
<!--						class="mt-2 flex w-full cursor-pointer items-center justify-center rounded-4xl bg-[#17B26A] py-3 font-semibold text-white"-->
<!--						type="submit"-->
<!--					>-->
<!--						<CheckCircle class="mr-2 inline-block" />-->
<!--						Sent-->
<!--					</button>-->
<!--				{:else}-->
<!--					<button-->
<!--						class="bg-brand-blue mt-2 w-full cursor-pointer rounded-4xl py-3 font-semibold text-white"-->
<!--						type="submit"-->
<!--					>-->
<!--						Send-->
<!--					</button>-->
<!--				{/if}-->
<!--			</form>-->
<!--		</div>-->
<!--	</div>-->
</section>
