$(document).ready(function(){
        $("#result").text("");
        
        $(".Disptoggle_btn").on("click", function(){
          $("body").toggleClass("dark-theme");
        });
        
        $("#inv").on("click", function (){
          $(this).toggleClass("outlaw");
          
          if ($("#sin").html() == "sin"){
            $("#sin").html("sin<sup>-1</sup>");
          }
          else{
            $("#sin").html("sin");
          }
          if ($("#cos").html() == "cos"){
            $("#cos").html("cos<sup>-1</sup>");
          }
          else{
            $("#cos").html("cos");
          }
          if ($("#tan").html() == "tan"){
            $("#tan").html("tan<sup>-1</sup>");
          }
          else{
            $("#tan").html("tan");
          }
          if ($("#ln").html() == "ln"){
            $("#ln").html("e<sup>x</sup>");
          }
          else{
            $("#ln").html("ln");
          }
          if ($("#log").html() == "log"){
            $("#log").html("10<sup>x</sup>");
          }
          else{
            $("#log").html("log");
          }
          if ($("#root").html() == "√"){
            $("#root").html("x<sup>2</sup>");
          }
          else{
            $("#root").html("√");
          }
        });
        
        $("#deg").on("click", function(){
          if ($(this).html() == "DEG"){
            $(this).html("RAD");
            var input = $("#result").text();
            var x = $("#input-field").val();
            if (input != ""){
              if (x.includes("sin")||x.includes("cos")||x.includes("tan")){
                var rad_result = radTodeg(input);
                $("#result").html(rad_result);
              }
            }
          }
          else {
            $(this).html("DEG");
            var input = $("#result").text();
            var x = $("#input-field").val();
            if (input != ""){
              if (x.includes("sin")||x.includes("cos")||x.includes("tan")){
                var deg_result = degTorad(input);
                $("#result").html(deg_result);
              }
            }
          }
        });

        $(".num").on("click", function (){
          $("#result").attr("class","result");
          document.getElementById("input-field").value += $(this).text();
          document.getElementById("input-field2").value += $(this).text();
          var a = $("#input-field2").val();
          if (a.match(/\d+[\-+*/]*\d+/gi)){
            var s = eval(a);
            var b = Math.round(s * 100000000)/100000000;
            $("#result").html(b);
          }
          else{
            $("#result").text("");
          }
        });
        
        $(".param").on("click", function (){
          $("#result").attr("class","result");
          if($("#inv").hasClass("outlaw")){
            document.getElementById("input-field").value += $(this).text().slice(0, -2) + "\u2212" + "\u00b9" + "(";
            document.getElementById("input-field2").value += "Math.a" + $(this).text().slice(0, -2) + "(";
          }
          else{
            document.getElementById("input-field").value += $(this).text() + "(";
            document.getElementById("input-field2").value += "Math." + $(this).html() + "(";
          }
        });
     
        $("#log").on("click", function (){
          $("#result").attr("class","result");
          if($("#inv").hasClass("outlaw")){
            document.getElementById("input-field").value += $(this).text().replace("x", "^");
            document.getElementById("input-field2").value += "10**";
          }
          else{
            document.getElementById("input-field").value += $(this).text() + "(";
            document.getElementById("input-field2").value += "Math." + $(this).html() + "10(";
          }
        });
        
        $("#ln").on("click", function (){
          $("#result").attr("class","result");
          if ($("#inv").hasClass("outlaw")){
            document.getElementById("input-field").value += "exp(";
            document.getElementById("input-field2").value += "Math." + "E**(";
          }
          else{
            document.getElementById("input-field").value += $(this).text() + "(";
            document.getElementById("input-field2").value += "Math." + $("#log").html() + "(";
          }
        });
        
        $("#root").on("click", function (){
          $("#result").attr("class","result");
          if ($("#inv").hasClass("outlaw")){
            document.getElementById("input-field").value += "²";
            document.getElementById("input-field2").value += "**2";
            var a = eval($("#input-field2").val());
            $("#input-field2").val(a);
            $("#result").text(a);
          }
          else{
            document.getElementById("input-field").value += $(this).text() + "(";
            document.getElementById("input-field2").value += "Math." + "sqrt(";
          }
        });
        
         $("#percent").on("click", function (){
           $("#result").attr("class","result");
          document.getElementById("input-field").value += $(this).text();
          document.getElementById("input-field2").value += "/100";
          var s = eval($("#input-field2").val());
          var t = Math.round(s * 100000000)/100000000;
          $("#result").html(t);
        });
       
        $("#factorial").on("click", function (){
          $("#result").attr("class","result");
          var x = $("#input-field").val();
          var y = $("#input-field2").val();
          document.getElementById("input-field").value += $(this).text();
          var value = x.match(/\d+$/g)
          var u = y.replace(/\d+$/g, factorial(value));
          $("#input-field2").val(u);
          $("#result").text(eval(u));
        });
        
        $("#power").on("click", function (){
          $("#result").attr("class","result");
          document.getElementById("input-field").value += $(this).text();
          document.getElementById("input-field2").value += "**";
        });
        
        $("#pi").on("click", function (){
          $("#result").attr("class","result");
          document.getElementById("input-field").value += $(this).text();
          document.getElementById("input-field2").value += "Math." + "PI";
          var s = eval($("#input-field2").val());
          var t = Math.round(s * 100000000)/100000000;
          $("#result").html(t);
        });
        
        $("#euler").on("click", function (){
          $("#result").attr("class","result");
          var x = $(this).text();
          var euler = x.toUpperCase();
          document.getElementById("input-field").value += $(this).text();
          document.getElementById("input-field2").value += "Math." + euler;
          var s = eval($("#input-field2").val());
          var t = Math.round(s * 100000000)/100000000;
          $("#result").html(t);
        });
        
        $(".operator, .decimal-point").on("click", function (){
          $("#result").attr("class","result");
          document.getElementById("input-field").value += $(this).text();
          var y = $(this).html();
          if (y == "×"){
            document.getElementById("input-field2").value += "*";
          }
          else{
            document.getElementById("input-field2").value += $(this).text();
          }
        });
        
        $(".bracket").on("click", function (){
          $("#result").attr("class","result");
          document.getElementById("input-field").value += $(this).text();
          document.getElementById("input-field2").value += $(this).text();
          var s = eval($("#input-field2").val());
          var t = Math.round(s * 100000000)/100000000;
          $("#result").html(t);
        });
        
        $("#del").on("click", function (){
          $("#result").attr("class","result");
          
          var x = $("#input-field").val();
          var y = $("#input-field2").val();
          var x_len = $("#input-field").val().length;
          var y_len = $("#input-field2").val().length;
          var sin = x.match(/sin\(+$/g);
          var cos = x.match(/cos\(+$/g);
          var tan = x.match(/tan\(+$/g);
          var log = x.match(/log\(+$/g);
          var ln = x.match(/ln\(+$/g);
          var sqrt = x.match(/\√\(+$/g);
          var percent = x.match(/\%$/g);
          var power = x.match(/\^+$/g);
          var euler = x.match(/e+$/g);
          var pi = x.match(/\π+$/g);
          var exp = x.match(/exp\(+$/g);
          var pow2 = x.match(/\²+$/g);
          var asin = x.match(/sin\−\¹\(+$/g);
          var acos = x.match(/cos\−\¹\(+$/g);
          var atan = x.match(/tan\−\¹\(+$/g);
          var factorial = x.match(/\!+$/g);
          
          var sin_lindex = x.lastIndexOf(sin);
          var cos_lindex = x.lastIndexOf(cos);
          var tan_lindex = x.lastIndexOf(tan);
          var log_lindex = x.lastIndexOf(log);
          var ln_lindex = x.lastIndexOf(ln);
          var sqrt_lindex = x.lastIndexOf(sqrt);
          var percent_lindex = x.lastIndexOf(percent);
          var power_lindex = x.lastIndexOf(power);
          var euler_lindex = x.lastIndexOf(euler);
          var pi_lindex = x.lastIndexOf(pi);
          var exp_lindex = x.lastIndexOf(exp);
          var pow2_lindex = x.lastIndexOf(pow2);
          var asin_lindex = x.lastIndexOf(asin);
          var acos_lindex = x.lastIndexOf(acos);
          var atan_lindex = x.lastIndexOf(atan);
          var factorial_lindex = x.lastIndexOf(factorial);
          
          if (sin_lindex > cos_lindex && sin_lindex > tan_lindex && sin_lindex > log_lindex && sin_lindex > ln_lindex && sin_lindex > percent_lindex && sin_lindex > sqrt_lindex && sin_lindex > power_lindex && sin_lindex > euler_lindex && sin_lindex > pi_lindex && sin_lindex > exp_lindex && sin_lindex > pow2_lindex && sin_lindex > asin_lindex && sin_lindex > acos_lindex && sin_lindex > atan_lindex && sin_lindex > factorial_lindex){
            var value = x.replace(/sin\(+$/g, "");
            var value2 = y.replace(/Math\.sin\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (cos_lindex > sin_lindex && cos_lindex > tan_lindex && cos_lindex > log_lindex && cos_lindex > ln_lindex && cos_lindex > percent_lindex && cos_lindex > sqrt_lindex && cos_lindex > power_lindex && cos_lindex > euler_lindex && cos_lindex > pi_lindex && cos_lindex > exp_lindex && cos_lindex > pow2_lindex && cos_lindex > asin_lindex && cos_lindex > acos_lindex && cos_lindex > atan_lindex && cos_lindex > factorial_lindex){
            var value = x.replace(/cos\(+$/g, "");
            var value2 = y.replace(/Math\.cos\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (tan_lindex > cos_lindex && sin_lindex < tan_lindex && tan_lindex > log_lindex && tan_lindex > ln_lindex && tan_lindex > percent_lindex && tan_lindex > sqrt_lindex && tan_lindex > power_lindex && tan_lindex > euler_lindex && tan_lindex > pi_lindex && tan_lindex > exp_lindex && tan_lindex > pow2_lindex && tan_lindex > asin_lindex && tan_lindex > acos_lindex && tan_lindex > atan_lindex && tan_lindex > factorial_lindex){
            var value = x.replace(/tan\(+$/g, "");
            var value2 = y.replace(/Math\.tan\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (percent_lindex > sin_lindex && percent_lindex > cos_lindex && percent_lindex > tan_lindex && percent_lindex > log_lindex && percent_lindex > ln_lindex && percent_lindex > sqrt_lindex && percent_lindex > power_lindex && percent_lindex > euler_lindex && percent_lindex > pi_lindex && percent_lindex > exp_lindex && percent_lindex > pow2_lindex && percent_lindex > asin_lindex && percent_lindex > acos_lindex && percent_lindex > atan_lindex && percent_lindex > factorial_lindex){
            var value = x.replace(/\%$/g, "");
            var value2 = y.replace(/\/100$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (log_lindex > sin_lindex && log_lindex > cos_lindex && log_lindex > tan_lindex && log_lindex > ln_lindex && log_lindex > percent_lindex && log_lindex > sqrt_lindex && log_lindex > power_lindex && log_lindex > euler_lindex && log_lindex > pi_lindex && log_lindex > exp_lindex && log_lindex > pow2_lindex && log_lindex > asin_lindex && log_lindex > acos_lindex && log_lindex > atan_lindex && log_lindex > factorial_lindex){
            var value = x.replace(/log\(+$/g, "");
            var value2 = y.replace(/Math\.log10\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (ln_lindex > sin_lindex && ln_lindex > cos_lindex && ln_lindex > tan_lindex && ln_lindex > log_lindex && ln_lindex > percent_lindex && ln_lindex > sqrt_lindex && ln_lindex > power_lindex && ln_lindex > euler_lindex && ln_lindex > pi_lindex && ln_lindex > exp_lindex && ln_lindex > pow2_lindex && ln_lindex > asin_lindex && ln_lindex > acos_lindex && ln_lindex > atan_lindex && ln_lindex > factorial_lindex){
            var value = x.replace(/ln\(+$/g, "");
            var value2 = y.replace(/Math\.log\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (sqrt_lindex > sin_lindex && sqrt_lindex > cos_lindex && sqrt_lindex > tan_lindex && sqrt_lindex > log_lindex && sqrt_lindex > percent_lindex && ln_lindex < sqrt_lindex && sqrt_lindex > power_lindex && sqrt_lindex > euler_lindex && sqrt_lindex > pi_lindex && sqrt_lindex > exp_lindex && sqrt_lindex > pow2_lindex && sqrt_lindex > asin_lindex && sqrt_lindex > acos_lindex && sqrt_lindex > atan_lindex && sqrt_lindex > factorial_lindex){
            var value = x.replace(/\√\(+$/g, "");
            var value2 = y.replace(/Math.sqrt\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (power_lindex > sin_lindex && power_lindex > cos_lindex && power_lindex > tan_lindex && power_lindex > log_lindex && power_lindex > percent_lindex && power_lindex > sqrt_lindex && ln_lindex < power_lindex && power_lindex > euler_lindex && power_lindex > pi_lindex && power_lindex > exp_lindex && power_lindex > pow2_lindex && power_lindex > asin_lindex && power_lindex > acos_lindex && power_lindex > atan_lindex && power_lindex > factorial_lindex){
            var value = x.replace(/\^+$/g, "");
            var value2 = y.replace(/\*\*+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (euler_lindex > sin_lindex && euler_lindex > cos_lindex && euler_lindex > tan_lindex && euler_lindex > log_lindex && euler_lindex > percent_lindex && euler_lindex > sqrt_lindex && euler_lindex > power_lindex && ln_lindex < euler_lindex && euler_lindex > pi_lindex && euler_lindex > exp_lindex && euler_lindex > pow2_lindex && euler_lindex > asin_lindex && euler_lindex > acos_lindex && euler_lindex > atan_lindex && euler_lindex > factorial_lindex){
            var value = x.replace(/e+$/g, "");
            var value2 = y.replace(/Math\.E+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (pi_lindex > sin_lindex && pi_lindex > cos_lindex && pi_lindex > tan_lindex && pi_lindex > log_lindex && pi_lindex > ln_lindex && pi_lindex > percent_lindex && pi_lindex > power_lindex && pi_lindex > euler_lindex && pi_lindex > sqrt_lindex && pi_lindex > exp_lindex && pi_lindex > pow2_lindex && pi_lindex > asin_lindex && pi_lindex > acos_lindex && pi_lindex > atan_lindex && pi_lindex > factorial_lindex){
            var value = x.replace(/\π+$/g, "");
            var value2 = y.replace(/Math\.PI+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (exp_lindex > sin_lindex && exp_lindex > cos_lindex && exp_lindex > tan_lindex && exp_lindex > log_lindex && exp_lindex > ln_lindex && exp_lindex > percent_lindex && exp_lindex > power_lindex && exp_lindex > euler_lindex && exp_lindex > sqrt_lindex && exp_lindex > pi_lindex && exp_lindex > pow2_lindex && exp_lindex > asin_lindex && exp_lindex > acos_lindex && exp_lindex > atan_lindex && exp_lindex > factorial_lindex){
            var value = x.replace(/exp\(+$/g, "");
            var value2 = y.replace(/Math\.E\*\*\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (pow2_lindex > sin_lindex && pow2_lindex > cos_lindex && pow2_lindex > tan_lindex && pow2_lindex > log_lindex && pow2_lindex > ln_lindex && pow2_lindex > percent_lindex && pow2_lindex > power_lindex && pow2_lindex > euler_lindex && pow2_lindex > sqrt_lindex && pow2_lindex > pi_lindex && pow2_lindex > asin_lindex && pow2_lindex > acos_lindex && pow2_lindex > atan_lindex && pow2_lindex > exp_lindex && pow2_lindex > factorial_lindex){
            var value = x.replace(/\²+$/g, "");
            var value2 = y.replace(/\*\*2+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (asin_lindex > sin_lindex && asin_lindex > cos_lindex && asin_lindex > tan_lindex && asin_lindex > log_lindex && asin_lindex > ln_lindex && asin_lindex > percent_lindex && asin_lindex > power_lindex && asin_lindex > euler_lindex && asin_lindex > sqrt_lindex && asin_lindex > pi_lindex && asin_lindex > acos_lindex && asin_lindex > atan_lindex && asin_lindex > pow2_lindex && asin_lindex > exp_lindex && asin_lindex > factorial_lindex){
            var value = x.replace(/sin\−\¹\(+$/g, "");
            var value2 = y.replace(/Math\.asin\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (acos_lindex > sin_lindex && acos_lindex > cos_lindex && acos_lindex > tan_lindex && acos_lindex > log_lindex && acos_lindex > ln_lindex && acos_lindex > percent_lindex && acos_lindex > power_lindex && acos_lindex > euler_lindex && acos_lindex > sqrt_lindex && acos_lindex > pi_lindex && acos_lindex > asin_lindex && acos_lindex > atan_lindex && acos_lindex > pow2_lindex && acos_lindex > exp_lindex && acos_lindex > factorial_lindex){
            var value = x.replace(/cos\−\¹\(+$/g, "");
            var value2 = y.replace(/Math\.acos\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (atan_lindex > sin_lindex && atan_lindex > cos_lindex && atan_lindex > tan_lindex && atan_lindex > log_lindex && atan_lindex > ln_lindex && atan_lindex > percent_lindex && atan_lindex > power_lindex && atan_lindex > euler_lindex && atan_lindex > sqrt_lindex && atan_lindex > pi_lindex && atan_lindex > acos_lindex && atan_lindex > asin_lindex && atan_lindex > pow2_lindex && atan_lindex > exp_lindex && atan_lindex > factorial_lindex){
            var value = x.replace(/tan\−\¹\(+$/g, "");
            var value2 = y.replace(/Math\.atan\(+$/g, "");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (factorial_lindex > sin_lindex && factorial_lindex > cos_lindex && factorial_lindex > tan_lindex && factorial_lindex > log_lindex && factorial_lindex > ln_lindex && factorial_lindex > percent_lindex && factorial_lindex > power_lindex && factorial_lindex > euler_lindex && factorial_lindex > sqrt_lindex && factorial_lindex > pi_lindex && factorial_lindex > acos_lindex && factorial_lindex > asin_lindex && factorial_lindex > pow2_lindex && factorial_lindex > exp_lindex && factorial_lindex > atan_lindex){
            var value = x.replace(/\!+$/g, "");
            var s = x.match(/\d+\!$/g);
            var val = y.replace(/[\d.e+]+$/g, s);
            var value2 = val.replace("!","");
            $("#input-field").val(value);
            $("#input-field2").val(value2);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
          else if (x == "" && y == "" && $("#result").text() != ""){
            $("#result").text("");
          }
          else {
            var a = x.slice(0, x_len-1);
            var b = y.slice(0, y_len-1);
            $("#input-field").val(a);
            $("#input-field2").val(b);
            var s = eval($("#input-field2").val());
            var t = Math.round(s * 100000000)/100000000;
            $("#result").html(t);
          }
            
        });
                
        $("#equal").on("click", function (){
          $("#result").addClass("result_main");
          var x = $("#input-field2").val();
          var fact = x.match(/\d+\!/g);
          var left = x.match(/\u0028/g);
          var right = x.match(/\u0029/g);
          
          if (right == null && left == null){
            var a = eval(x);
            var b = Math.round(a * 100000000)/100000000;
            $("#result").html(b);
          }
          else if (right == null){
            for (var i = 0; i < left.length; i++){
              var y = document.getElementById("input-field").value += ")";
              var z = document.getElementById("input-field2").value += ")";
            }
            var a = eval(z);
            var b = Math.round(a * 100000000)/100000000;
            $("#result").html(b);
          }
          else if (right.length < left.length){
            for (var i = right.length; i < left.length; i++){
              var y = document.getElementById("input-field").value += ")";
              var z = document.getElementById("input-field2").value += ")";
            }
            var a = eval(z);
            var b = Math.round(a * 100000000)/100000000;
            $("#result").html(b);
          }
          else if (right.length == left.length){
            var a = eval(x);
            var b = Math.round(a * 100000000)/100000000;
            $("#result").html(b);
          }
          else if ($("#input-field2").val().match("null")){
            $("#result").html("Syntax Error");
          }
          else{
            var a = eval($("#input-field2").val());
            var b = Math.round(a * 100000000)/100000000;
            $("#result").html(b);
          }
        });
        
        $("#cls").on("click", function (){
          $("#input-field").val("");
          $("#input-field2").val("");
          $("#result").html("");
          
        });
        
      });