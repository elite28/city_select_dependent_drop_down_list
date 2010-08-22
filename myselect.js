$(document).ready(function(){
            getProvinces();
        });
        
        function getProvinces(){
            var pro = "";
            for(var i = 0 ; i < provinces.length; i++){
                pro += "<option>" + provinces[i] + "</option>";
            }
			$('#province').empty().append("<option value = '' selected>请选择省</option>");
            $('#province').append(pro);
            
            getCities();
        }
        function getCities(){
            var proIndex = $('#province').attr('selectedIndex') - 1; 
            showCities(proIndex);
            getCounties();
			
        }
        function showCities(proIndex){
            var cit = "";
			

            if(cities[proIndex] == null){
                $('#city').empty().append("<option value = '' selected>请选择市</option>");
                return;
            }
            for(var i = 0 ;i < cities[proIndex].length ; i++){
                cit += "<option>" + cities[proIndex][i] + "</option>";
            }
			$('#city').empty().append("<option value = '' selected>请选择市</option>");
            $('#city').append(cit);
			
        }
        function getCounties(){
            var proIndex = $('#province').attr('selectedIndex') -1 ;
            var citIndex = $('#city').attr('selectedIndex') - 1;
            showCounties(proIndex,citIndex);
        }
        function showCounties(proIndex,citIndex){
            var cou = "";
            if( citIndex == -1){
                $('#county').empty().append("<option>请选择区/县</option>");
                return;
            }
            for(var i = 0 ;i < counties[proIndex][citIndex].length;i++){
                cou += "<option>" + counties[proIndex][citIndex][i] + "</option>";
            }
			$('#county').empty().append("<option>请选择区/县</option>");
            $('#county').append(cou);
			
        }