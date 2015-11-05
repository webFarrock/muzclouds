
<?
$f1 = fopen( "f.txt" , "x+" );

$f2 = fopen( "g.txt" , "x+" );

$text1 = fread( $f1 , filesize( "f.txt" ) );

$text2= fread( $f2 , filesize( "g.txt" ) );



print $text1; // Выведет содержимое файла.
echo '<hr>';
print $text2; // Выведет содержимое файла.


fwrite($f1, $text2);
fwrite($f2, $text1);



fclose($f1);
fclose($f2);
 