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
			ctx: {} as any,
		};
	},
	mounted() {
		const canvas = this.$refs.hangmanCanvas as any; // ref로부터 canvas 요소 가져오기
		if (!canvas) {
			return;
		}
		this.ctx = canvas.getContext("2d"); // 옵셔널 체이닝 연산자 사용
		this.ctx.moveTo(20, 0);
		this.ctx.lineTo(20, 200);
		this.ctx.stroke();
	},
	methods: {
		drawHangman() {
			if (this.incorrectAttempts >= 1) {
				this.ctx.moveTo(20, 0);
				this.ctx.lineTo(150, 0);
				this.ctx.stroke();
			}
			if (this.incorrectAttempts >= 2) {
				this.ctx.moveTo(100, 0);
				this.ctx.lineTo(100, 20);
				this.ctx.stroke();
			}
			if (this.incorrectAttempts >= 3) {
				// Head
				this.ctx.beginPath();
				this.ctx.arc(100, 40, 20, 0, 2 * Math.PI);
				this.ctx.stroke();
				this.ctx.fillStyle = "black";
				this.ctx.fill();
			}

			if (this.incorrectAttempts >= 4) {
				// Body
				this.ctx.moveTo(100, 60);
				this.ctx.lineTo(100, 120);
				this.ctx.stroke();
			}

			if (this.incorrectAttempts >= 5) {
				// Left Arm
				this.ctx.moveTo(100, 70);
				this.ctx.lineTo(60, 90);
				this.ctx.stroke();
			}

			if (this.incorrectAttempts >= 6) {
				// Right Arm
				this.ctx.moveTo(100, 70);
				this.ctx.lineTo(140, 90);
				this.ctx.stroke();
			}

			if (this.incorrectAttempts >= 7) {
				// Left Leg
				this.ctx.moveTo(100, 120);
				this.ctx.lineTo(70, 160);
				this.ctx.stroke();
			}

			if (this.incorrectAttempts >= 8) {
				// Right Leg
				this.ctx.moveTo(100, 120);
				this.ctx.lineTo(130, 160);
				this.ctx.stroke();
			}
		},
		clickLetter(letter: string) {
			console.log(letter);
			this.incorrectAttempts++;
			this.drawHangman();
		},
	},
});
</script>

<template>
	<div>
		<h1 class="mt-7 pt-6">행맨</h1>
		<canvas
			class="mx-auto"
			ref="hangmanCanvas"
			width="150"
			height="200"
		></canvas>
		<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3">
			<line x1="0" y1="0" x2="100%" y2="0" stroke="black" stroke-width="3" />
		</svg>
		<div class="input-box mb-[50px]">
			<input
				type="text"
				class="answer-input"
				disabled
				v-for="(a, index) in answer"
				:key="index"
			/>
		</div>
		<div class="letter-box">
			<button
				v-for="letter in alphabet"
				:key="letter"
				v-on:click="clickLetter(letter)"
			>
				{{ letter }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.input-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.answer-input {
	margin: 0 10px;
	border-bottom: 1px solid black;
	max-width: 8%;
	text-align: center;
}
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
