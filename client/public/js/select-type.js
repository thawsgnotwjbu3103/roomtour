function openSelectAlignment() {
    var content_alignment = document.getElementById('content-alignment');
    var btn_alignment = document.getElementById('btn-alignment');
    if (content_alignment.style.display === 'block') {
        content_alignment.style.display = 'none';
        btn_alignment.style.border = '1px solid #ddd';
        btn_alignment.classList.add('icon-arrow-down');
        btn_alignment.classList.remove('icon-arrow-up');

    } else {
        content_alignment.style.display = 'block';
        btn_alignment.classList.add('icon-arrow-up');
        btn_alignment.classList.remove('icon-arrow-down');
        btn_alignment.style.border = '1px solid #D2955C'
    }
}
function openSelectFlatWater() {
    var content_flat = document.getElementById('content-flat-water');
    var btn_flat = document.getElementById('btn-flat-water');
    if (content_flat.style.display === 'block') {
        content_flat.style.display = 'none';
        btn_flat.style.border = '1px solid #ddd';
        btn_flat.classList.add('icon-arrow-down');
        btn_flat.classList.remove('icon-arrow-up');
    }
    else {
        content_flat.style.display = 'block';
        btn_flat.classList.add('icon-arrow-up');
        btn_flat.classList.remove('icon-arrow-down');
        btn_flat.style.border = '1px solid #D2955C'
    }
}
function openSelectBudget() {
    var content_budget = document.getElementById('content-budget');
   var btn_budget = document.getElementById('btn-budget');
    if (content_budget.style.display === 'block') {
        content_budget.style.display = 'none';
        btn_budget.style.border = '1px solid #ddd';
        btn_budget.classList.add('icon-arrow-down');
        btn_budget.classList.remove('icon-arrow-up');
   }
    else {
        content_budget.style.display = 'block';
        btn_budget.classList.add('icon-arrow-up');
        btn_budget.classList.remove('icon-arrow-down');
        btn_budget.style.border = '1px solid #D2955C';

    }
}

function openSelectResidential() {
    var content_residential = document.getElementById('content-residential');
    var btn_residential = document.getElementById('btn-residential');
    if (content_residential.style.display === 'block') {
        content_residential.style.display = 'none';
        btn_residential.style.border = '1px solid #ddd'
        btn_residential.classList.add('icon-arrow-down');
        btn_residential.classList.remove('icon-arrow-up');
    }
    else {
        content_residential.style.display = 'block';
        btn_residential.classList.add('icon-arrow-up');
        btn_residential.classList.remove('icon-arrow-down');
    btn_residential.style.border = '1px solid #D2955C';

    }
} function openSelectStyle() {
    var content_style = document.getElementById('content-style');
    var btn_style = document.getElementById('btn-style');
    if (content_style.style.display === 'block') {
        content_style.style.display = 'none';
        btn_style.style.border = '1px solid #ddd'
        btn_style.classList.add('icon-arrow-down');
        btn_style.classList.remove('icon-arrow-up');
    }
    else {
        content_style.style.display = 'block';
        btn_style.classList.add('icon-arrow-up');
        btn_style.classList.remove('icon-arrow-down');
        btn_style.style.border = '1px solid #D2955C';

    }
}

function openSelectColor() {
    var content_color = document.getElementById('content-color');
    var btn_color = document.getElementById('btn-color');
    if (content_color.style.display === 'block') {
        content_color.style.display = 'none';
        btn_color.style.border = '1px solid #ddd'
        btn_color.classList.add('icon-arrow-down');
        btn_color.classList.remove('icon-arrow-up');
    }
    else {
        content_color.style.display = 'block';
        btn_color.classList.add('icon-arrow-up');
        btn_color.classList.remove('icon-arrow-down');
       btn_color.style.border = '1px solid #D2955C';

    }
}

function openSelectDetail() {
    var content_detail = document.getElementById('content-construction-detail');
    var btn_detail = document.getElementById('btn-construction-detail');
    if (content_detail.style.display === 'block') {
        content_detail.style.display = 'none';
        btn_detail.style.border = '1px solid #ddd'
        btn_detail.classList.add('icon-arrow-down');
        btn_detail.classList.remove('icon-arrow-up');
    }
    else {
        content_detail.style.display = 'block';
        btn_detail.classList.add('icon-arrow-up');
        btn_detail.classList.remove('icon-arrow-down');
        btn_detail.style.border = '1px solid #D2955C';

    }
}
function openSelectFamily() {
    var content_family = document.getElementById('content-family');
    var btn_family = document.getElementById('btn-family');
    if (content_family.style.display === 'block') {
        content_family.style.display = 'none';
        btn_family.style.border = '1px solid #ddd'
        btn_family.classList.add('icon-arrow-down');
        btn_family.classList.remove('icon-arrow-up');
    }
    else {
        content_family.style.display = 'block';
        btn_family.classList.add('icon-arrow-up');
        btn_family.classList.remove('icon-arrow-down');
        btn_family.style.border = '1px solid #D2955C';

    }
}
function openSelectField() {
    var content_field = document.getElementById('content-field');
    var btn_field = document.getElementById('btn-field');
    if (content_field.style.display === 'block') {
        content_field.style.display = 'none';
        btn_field.style.border = '1px solid #ddd'
        btn_field.classList.add('icon-arrow-down');
        btn_field.classList.remove('icon-arrow-up');
    }
    else {
        content_field.style.display = 'block';
        btn_field.classList.add('icon-arrow-up');
        btn_field.classList.remove('icon-arrow-down');
        btn_field.style.border = '1px solid #D2955C';

    }
}
function openSelectWorker() {
    var content_worker = document.getElementById('content-worker');
    var btn_worker = document.getElementById('btn-worker');
    if (content_worker.style.display === 'block') {
        content_worker.style.display = 'none';
        btn_worker.style.border = '1px solid #ddd'
        btn_worker.classList.add('icon-arrow-down');
        btn_worker.classList.remove('icon-arrow-up');
    }
    else {
        content_worker.style.display = 'block';
        btn_worker.classList.add('icon-arrow-up');
        btn_worker.classList.remove('icon-arrow-down');
        btn_worker.style.border = '1px solid #D2955C';

    }
}

function fullColor(){
    var color_full = document.getElementById('color-full');
    var wall_color = document.getElementById('wall-color');
   
    if(color_full.style.display === 'block'){
        color_full.style.display = 'none';
       
        wall_color.classList.add('wall-color');
        wall_color.classList.remove('active-color');
    }
    else{
        color_full.style.display = 'block';
      
        wall_color.classList.add('active-color');
        wall_color.classList.remove('wall-color');
    }
}
 function wallColor() {
    var inWallColor = document.getElementById('color-wall');
    var wall_color = document.getElementById('wall-color');
    if(inWallColor.style.display === 'block'){
        inWallColor.style.display = 'none';
        
        
    }
    else {
        inWallColor.style.display = 'block';
       
        wall_color.classList.add('wall-color');
        wall_color.classList.remove('active-color');
      
    }

 }

$(document).ready(function(){
    $('.icon-close-mb').on('click',function(){
        $('.content-dropdown').hide();
        $('.btn-dropdown').removeClass('icon-arrow-up');
        $('.btn-dropdown').addClass('icon-arrow-down');
        $('.btn-dropdown').css('border','1px solid #ddd');
    });



    let min = 0;
            let max = 70;

            const calcLeftPosition = value => 100 / (70 - 0) * (value - 0);

            $('#rangeMin').on('input', function (e) {
                const newValue = parseInt(e.target.value);
                if (newValue > max) return;
                min = newValue;

                $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
                $('#min').html(newValue);
                $('#line').css({
                    'left': calcLeftPosition(newValue) + '%',
                    'right': (100 - calcLeftPosition(max))  + '%'
                });

                if (newValue > 9) {
                    
                    $('#btn-9d').addClass('btn-normal');
                    $('#btn-9d').removeClass('active-btn');
                
                }
                else 
                {
                    $('#btn-9d').removeClass('btn-normal');
                    $('#btn-9d').addClass('active-btn');
                }
                
                if( newValue >= 20){
                    $('#btn-10d').addClass('btn-normal');
                    $('#btn-10d').removeClass('active-btn');
                }
                else {
                    $('#btn-10d').removeClass('btn-normal');
                    $('#btn-10d').addClass('active-btn');
                }

                if( newValue >= 30) {
                    $('#btn-20d').addClass('btn-normal');
                    $('#btn-20d').removeClass('active-btn');
                }
                else {
                    $('#btn-20d').removeClass('btn-normal');
                    $('#btn-20d').addClass('active-btn');
                }
                
                if(newValue >= 40){
                    $('#btn-30d').addClass('btn-normal');
                    $('#btn-30d').removeClass('active-btn');
                }
                else {
                    $('#btn-30d').removeClass('btn-normal');
                    $('#btn-30d').addClass('active-btn');
                }
            
                if(newValue >= 50){
                    $('#btn-40d').addClass('btn-normal');
                    $('#btn-40d').removeClass('active-btn');
                }
                else {
                    $('#btn-40d').removeClass('btn-normal');
                    $('#btn-40d').addClass('active-btn');
                }
    
            });

           
            $('#rangeMax').on('input', function (e) {
                const newValue = parseInt(e.target.value);
                if (newValue < min) return;
                max = newValue;
                $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
                $('#max').html(newValue);
                $('#line').css({
                    'left': calcLeftPosition(min) + '%',
                    'right': (100 - calcLeftPosition(newValue))  + '%'
                });

                
                if(newValue >= 60){
                    $('#btn-60d').removeClass('btn-normal');
                    $('#btn-60d').addClass('active-btn');
                }
                else{
                    $('#btn-60d').addClass('btn-normal');
                    $('#btn-60d').removeClass('active-btn');
                }
                if(newValue >= 70){
                    $('#btn-70d').removeClass('btn-normal');
                    $('#btn-70d').addClass('active-btn');
                }
                else {
                    $('#btn-70d').addClass('btn-normal');
                    $('#btn-70d').removeClass('active-btn');
                }
               
                if(newValue < 50){
                    $('#btn-50d').addClass('btn-normal');
                    $('#btn-50d').removeClass('active-btn');
               }
               else {
                    $('#btn-50d').removeClass('btn-normal');
                    $('#btn-50d').addClass('active-btn');
               }
               if(newValue < 40){
                    $('#btn-40d').addClass('btn-normal');
                    $('#btn-40d').removeClass('active-btn');
               }
               else {
                    $('#btn-40d').removeClass('btn-normal');
                    $('#btn-40d').addClass('active-btn');
               }
               if(newValue < 30){
                    $('#btn-30d').addClass('btn-normal');
                    $('#btn-30d').removeClass('active-btn');
               }
               else {
                    $('#btn-30d').removeClass('btn-normal');
                    $('#btn-30d').addClass('active-btn');
               }
               if(newValue < 20){
                    $('#btn-20d').addClass('btn-normal');
                    $('#btn-20d').removeClass('active-btn');
               }
               else {
                    $('#btn-20d').removeClass('btn-normal');
                    $('#btn-20d').addClass('active-btn');
               }
               if(newValue < 10){
                    $('#btn-10d').addClass('btn-normal');
                    $('#btn-10d').removeClass('active-btn');
               }
               else {
                    $('#btn-10d').removeClass('btn-normal');
                    $('#btn-10d').addClass('active-btn');
               }
               if(  newValue == 9){
                    $('#btn-9d').addClass('btn-normal');
                    $('#btn-9d').removeClass('active-btn');
               }
               else {
                    $('#btn-9d').removeClass('btn-normal');
                    $('#btn-9d').addClass('active-btn');
               }
              
                

            });

            $('#btn-1').on('click',function(){
                if($('#btn-1').hasClass('active-btn')){
                    $('#btn-1').removeClass('active-btn');
                    $('#btn-1').addClass('btn-normal');
                }
                else {
                    $('#btn-1').addClass('active-btn');
                    $('#btn-1').removeClass('btn-normal');
                }
            });
            $('#btn-2').on('click',function(){
                if($('#btn-2').hasClass('active-btn')){
                    $('#btn-2').removeClass('active-btn');
                    $('#btn-2').addClass('btn-normal');
                }
                else {
                    $('#btn-2').addClass('active-btn');
                    $('#btn-2').removeClass('btn-normal');
                }
            });
            $('#btn-3').on('click',function(){
                if($('#btn-3').hasClass('active-btn')){
                    $('#btn-3').removeClass('active-btn');
                    $('#btn-3').addClass('btn-normal');
                }
                else {
                    $('#btn-3').addClass('active-btn');
                    $('#btn-3').removeClass('btn-normal');
                }
            });
            $('#btn-4').on('click',function(){
                if($('#btn-4').hasClass('active-btn')){
                    $('#btn-4').removeClass('active-btn');
                    $('#btn-4').addClass('btn-normal');
                }
                else {
                    $('#btn-4').addClass('active-btn');
                    $('#btn-4').removeClass('btn-normal');
                }
            });
            $('#btn-5').on('click',function(){
                if($('#btn-5').hasClass('active-btn')){
                    $('#btn-5').removeClass('active-btn');
                    $('#btn-5').addClass('btn-normal');
                }
                else {
                    $('#btn-5').addClass('active-btn');
                    $('#btn-5').removeClass('btn-normal');
                }
            });
            $('#btn-6').on('click',function(){
                if($('#btn-6').hasClass('active-btn')){
                    $('#btn-6').removeClass('active-btn');
                    $('#btn-6').addClass('btn-normal');
                }
                else {
                    $('#btn-6').addClass('active-btn');
                    $('#btn-6').removeClass('btn-normal');
                }
            });
            $('#btn-7').on('click',function(){
                if($('#btn-7').hasClass('active-btn')){
                    $('#btn-7').removeClass('active-btn');
                    $('#btn-7').addClass('btn-normal');
                }
                else {
                    $('#btn-7').addClass('active-btn');
                    $('#btn-7').removeClass('btn-normal');
                }
            });
            $('#btn-8').on('click',function(){
                if($('#btn-8').hasClass('active-btn')){
                    $('#btn-8').removeClass('active-btn');
                    $('#btn-8').addClass('btn-normal');
                }
                else {
                    $('#btn-8').addClass('active-btn');
                    $('#btn-8').removeClass('btn-normal');
                }
            });

            $('#btn-9').on('click',function(){
                if($('#btn-9').hasClass('active-btn')){
                    $('#btn-9').removeClass('active-btn');
                    $('#btn-9').addClass('btn-normal');
                }
                else {
                    $('#btn-9').addClass('active-btn');
                    $('#btn-9').removeClass('btn-normal');
                }
            });
            $('#btn-10').on('click',function(){
                if($('#btn-10').hasClass('active-btn')){
                    $('#btn-10').removeClass('active-btn');
                    $('#btn-10').addClass('btn-normal');
                }
                else {
                    $('#btn-10').addClass('active-btn');
                    $('#btn-10').removeClass('btn-normal');
                }
            });
})