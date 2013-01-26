NAME=hello-world
NW=/Applications/node-webkit.app

../${NAME}.app:
	cp -r ${NW} ../hello-world.app

pack: ../${NAME}.app
	rm -rf ../${NAME}.app/Contents/Resources/app.nw
	cp -r . ../${NAME}.app/Contents/Resources/app.nw

run:
	open -n -a node-webkit .

clean:
	rm -rf ../${NAME}.app