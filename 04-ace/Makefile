NAME=ace
NW=/Applications/node-webkit.app

../${NAME}.app:
	cp -r ${NW} ../${NAME}.app

pack: ../${NAME}.app
	rm -rf ../${NAME}.app/Contents/Resources/app.nw
	cp -r . ../${NAME}.app/Contents/Resources/app.nw

run:
	open -n -a node-webkit . package.json

clean:
	rm -rf ../${NAME}.app