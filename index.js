<script>
    function insert(num) {
        document.form.textview.value = document.form.textview.value + num
    }
    function equal(){
        exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp)
    }
    }
</script>