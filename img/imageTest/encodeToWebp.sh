for file in ./source/*
do
	basename=`basename $file`
	dirname=`dirname $file`
    filename=`expr $basename :  "\([^.]*\)"`
    cwebp -q 75 $file -o ./output/${filename}75Q.webp
    cwebp -q 80 $file -o ./output/${filename}80Q.webp
    cwebp -q 85 $file -o ./output/${filename}85Q.webp
    cwebp -q 90 $file -o ./output/${filename}90Q.webp
    cwebp -q 95 $file -o ./output/${filename}95Q.webp
    cwebp -q 100 $file -o ./output/${filename}100Q.webp
    cwebp -lossless $file -o ./output/${filename}lossless.webp
    convert $file -quality 75 ./output/${filename}75Q.${basename#*.}
    convert $file -quality 80 ./output/${filename}80Q.${basename#*.}
    convert $file -quality 85 ./output/${filename}85Q.${basename#*.}
    convert $file -quality 90 ./output/${filename}90Q.${basename#*.}
    convert $file -quality 95 ./output/${filename}95Q.${basename#*.}
    convert $file -quality 100 ./output/${filename}100Q.${basename#*.}
    convert $file -compress Lossless ./output/${filename}lossless.${basename#*.}
done