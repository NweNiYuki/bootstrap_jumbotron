function SwapHeader(){
    var header1 = document.getElementById('header1').innerHTML;
    var header2 = document.getElementById('header2').innerHTML;
    document.getElementById('header1').innerHTML = header2;
    document.getElementById('header2').innerHTML = header1;
}
<script>
            var para1 = document.querySelector('.para1').innerHTML;
            var para2 = document.querySelector('.para2').innerHTML;

            function changeParagraph(){
                document.querySelector('.para1').innerHTML = para2;
                document.querySelector('.para2').innerHTML = para1;
            }
        </script>