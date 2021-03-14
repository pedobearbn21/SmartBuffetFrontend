<template>
    <button :class="styleButton" @click="EventClick">{{textButton}}</button>
</template>

<script>
export default {
    props: ['title', 'text', 'icon', 'showConfirmButton', 'styleButton', 'textButton' ],
    methods: {
        EventClick(){
            this.$swal({
                title: this.title,
                text: this.text,
                icon: this.icon,
                showCloseButton: true,
                showConfirmButton: this.showConfirmButton,
            }).then((result)=>{
                if(result.isConfirmed){
                    this.$emit('onConfirm')
                }else{
                    this.$emit('OnClose')
                }
            })
        }
    }
}
</script>
