const gulp = require('gulp')
const del = require('del')

const sourceFolder = 'source'
const destFolder = 'built'

const assetTypes = [
	'*.html',
]

const copyAssetsTask = 'copy-assets'

gulp.task('watch-assets', () => {
	const source = makeAssetPaths()

	gulp.watch(source, [copyAssetsTask])
})

gulp.task(copyAssetsTask, () => {
	const source = makeAssetPaths()

	gulp.src(source)
		.pipe(gulp.dest(destFolder))
})

function makeAssetPaths() {
	return assetTypes.map(x => './' + sourceFolder + '/**/' + x)
}

gulp.task('clean', () => {
	return del(destFolder)
})