<template>
	<div v-show="visible" class="message-box">
		<div class="box">
			<h3 class="box-title">{{title}}</h3>
			<div class="box-content">{{content}}</div>
			<div class="box-btns">
				<button @click="clickCancel" class="btn-cancel">取消</button>
				<button @click="clickConfirm" class="btn-confirm">确定</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MessageBox',
		data() {
			return {
				visible:false,
				title: '提示',
				content: '内容',
				resolve: '',
				reject: '',
				promise: ''
			}
		},
		methods: {
			clickConfirm() {
				this.visible = false
				this.resolve('confirm')
			},
			clickCancel() {
				this.visible = false
				this.reject('cancel')
			},
			showMsgBox: function() {
				return new Promise((resolve, reject) => {
					this.resolve = resolve;
					this.reject = reject;
				});
			},
		}
	}
</script>


<style scoped>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.message-box {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 10;
	}

	.box {
		width: 400px;
		height: 200px;
		border-radius: 4px;
		background: #fff;
		margin: 20vh auto;
		padding: 20px;
		overflow: hidden;
	}

	.box-title {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.box-content {
		height: 90px;
		overflow-y: auto;
		padding: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box-btns {
		display: flex;
		flex-direction: row-reverse;
		margin-top: 10px;
	}

	.btn-confirm,
	.btn-cancel {
		width: 60px;
		height: 30px;
		border: none;
		outline: none;
		color: #FFF;
		background-color: #409EFF;
		border-color: #409EFF;
		margin-left: 10px;
		border-radius: 3px;
		cursor: pointer;
	}

	.btn-confirm {}

	.btn-cancel {
		color: #409EFF;
		border: 1px solid #409EFF;
		background-color: #fff;
	}
</style>
