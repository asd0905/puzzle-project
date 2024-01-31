<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Hanman",
	props: {},
	data() {
		return {
			incorrectAttempts: 0,
			answer: "apple",
			alphabet: Array.from({ length: 26 }, (_, index) =>
				String.fromCharCode("A".charCodeAt(0) + index)
			),
		};
	},
	methods: {
		drawHangman() {
			const canvas = this.$refs.hangmanCanvas as any; // ref로부터 canvas 요소 가져오기
			if (!canvas) {
				return;
			}
			const ctx = canvas.getContext("2d"); // 옵셔널 체이닝 연산자 사용
			this.incorrectAttempts++;
			console.log(this.incorrectAttempts);
			if (this.incorrectAttempts >= 1) {
				// Head
				ctx.beginPath();
				ctx.arc(100, 40, 20, 0, 2 * Math.PI);
				ctx.stroke();
			}

			if (this.incorrectAttempts >= 2) {
				// Body
				ctx.moveTo(100, 60);
				ctx.lineTo(100, 120);
				ctx.stroke();
			}

			if (this.incorrectAttempts >= 3) {
				// Left Arm
				ctx.moveTo(100, 70);
				ctx.lineTo(60, 90);
				ctx.stroke();
			}

			if (this.incorrectAttempts >= 4) {
				// Right Arm
				ctx.moveTo(100, 70);
				ctx.lineTo(140, 90);
				ctx.stroke();
			}

			if (this.incorrectAttempts >= 5) {
				// Left Leg
				ctx.moveTo(100, 120);
				ctx.lineTo(70, 160);
				ctx.stroke();
			}

			if (this.incorrectAttempts >= 6) {
				// Right Leg
				ctx.moveTo(100, 120);
				ctx.lineTo(130, 160);
				ctx.stroke();
			}
		},
	},
});
</script>

<template>
	<div>
		<h1 class="mt-7 pt-6" v-on:click="drawHangman">행맨</h1>
		<canvas ref="hangmanCanvas" width="300" height="300"></canvas>
		<input type="text" v-model="answer" />
		<div class="letter-box">
			<button v-for="letter in alphabet" :key="letter">
				{{ letter }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.letter-box {
	display: flex;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(10%, auto));
	flex-wrap: wrap;
	button {
		margin: 1%;
		display: block;
		background-color: hsla(160, 100%, 37%, 0.4);
		color: #fff;
		padding: 14px 20px;
		border-radius: 10px;
		&:hover {
			background-color: hsla(160, 100%, 37%, 1);
		}
	}
}
</style>
