<script>
function copyFunction() {
    var data = document.getElementById("myInput");

    data.select();

    navigator.clipboard.writeText(data.value);
    
    alert(data.value);
}
</script>
