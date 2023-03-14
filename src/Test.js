import {useResumeToPDF} from "./hooks/useResumeToPDF";

const templateOne = {
    defaultStyle: {
        font: 'Roboto',
        color: 'red',
    },
    styles: {
        'html-div': {
            background: 'yellow',
            color: 'green'
        }
    }
}

const templateTwo = {
    defaultStyle: {
        font: 'Poppins',
        color: 'purple',
    },
    styles: {
        'html-div': {
            background: 'red',
            color: 'black'
        }
    }
}


const Test = () => {
    const {ConvertToPDF, savePDF, setTemplate} = useResumeToPDF({
        page: {
            pageMargins: 5
        }
    })

    return <>
        <ConvertToPDF>
            <div>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt, dui non finibus
                venenatis, enim ante feugiat orci, et ultrices ipsum felis nec diam. Curabitur sed elementum dolor.
                Aenean feugiat diam nec velit eleifend, eget semper eros vulputate. Morbi mollis sollicitudin arcu, quis
                auctor urna varius ac. Etiam a congue felis. Aliquam sit amet quam nisi. Vivamus ac sem iaculis ipsum
                iaculis vehicula nec ut lectus. Donec vel feugiat ipsum, sed faucibus nisl. Cras semper ante mi, vitae
                faucibus nunc lacinia sed.

                Donec eu massa ut arcu ultrices pretium. Praesent nec orci quis eros aliquam pulvinar a non odio.
                Vestibulum a ante dictum, luctus tellus et, venenatis nibh. Nullam urna mi, molestie ullamcorper dapibus
                eu, molestie id est. Pellentesque vulputate, ex vel lobortis accumsan, massa metus volutpat velit, nec
                euismod ex mauris id ipsum. Mauris vulputate velit nunc, non suscipit arcu fermentum ac. Fusce nec
                dapibus elit. Nulla pulvinar urna lorem, iaculis fermentum lacus eleifend ut. Ut porta vel arcu eget
                consectetur. Nulla commodo accumsan ipsum et bibendum.

                Phasellus ac sagittis justo, id egestas arcu. Pellentesque ac sem quam. Morbi tincidunt eu augue non
                lacinia. Sed ultricies, odio vel consectetur dapibus, mi odio commodo magna, in auctor sapien mi non
                tortor. Etiam varius facilisis suscipit. Morbi nec tortor massa. Vestibulum laoreet, turpis ac ultricies
                luctus, ex risus tincidunt ipsum, ut pellentesque dolor tortor in lacus. Nam ullamcorper at felis ut
                mollis.

                Quisque volutpat dignissim ante quis ultricies. Nullam aliquet id lorem vel consectetur. Aliquam
                facilisis diam in erat porttitor, vulputate pellentesque ante cursus. Etiam tristique orci in congue
                feugiat. Ut iaculis, massa quis rhoncus fringilla, risus elit molestie erat, sit amet varius sapien
                metus id tellus. Vivamus sodales lacus sit amet sem consequat, porta convallis diam hendrerit. Ut leo
                risus, pulvinar sed ligula aliquet, elementum porttitor quam. Praesent fringilla faucibus nisi, a
                volutpat massa fermentum vel. In est augue, dictum nec elit vel, congue fringilla magna. Nullam tempor
                rhoncus purus. Sed nec ultricies nunc. Aliquam ultricies lacus nec dolor porta malesuada.

                Cras id interdum justo. Nunc iaculis diam eget nisl tristique luctus. Curabitur elementum molestie
                lectus vel eleifend. Nulla non orci efficitur, blandit tellus eget, egestas mi. Integer eget ultrices
                sapien. Morbi eu sapien massa. Phasellus lobortis molestie velit id varius. Donec eu bibendum lectus,
                porta rhoncus magna. Pellentesque eget dictum leo. Aliquam varius felis sed aliquet blandit. In
                consectetur porta purus, ut iaculis nisl lacinia nec. Vivamus cursus felis sapien, sit amet pulvinar
                arcu semper eu. Duis vitae sodales ante, a varius ex. Aenean porttitor mollis turpis ut auctor.

                Nulla ex nisi, porta id interdum eu, placerat nec orci. Proin ornare, lorem sed rutrum facilisis, est
                risus facilisis augue, ut egestas nunc turpis eu nisl. Maecenas mattis, nisi nec facilisis tincidunt,
                nibh turpis ornare eros, a tristique augue mi nec ante. Fusce varius nunc at tellus blandit, et gravida
                massa venenatis. Quisque ultricies ipsum urna, eget elementum metus semper et. Nulla quis ullamcorper
                nisi. Vivamus vitae elit volutpat, rutrum urna at, tincidunt urna. Nulla facilisi. Mauris a ligula
                neque. Donec non dui dapibus, tristique leo cursus, ornare orci. Donec vitae urna a magna rhoncus
                rhoncus.

                Aliquam suscipit dolor sit amet pellentesque vestibulum. Nulla eu ex quis magna ultricies sollicitudin.
                Aenean consequat erat sed sapien tempor iaculis sit amet sed nulla. Integer dignissim egestas lacus, nec
                maximus lectus bibendum dapibus. Aliquam ornare aliquet felis, eu varius velit rhoncus sit amet.
                Phasellus in consectetur tortor, et ornare sem. Aenean eget turpis ut urna scelerisque imperdiet. Etiam
                sit amet risus ac nibh volutpat lacinia in id erat. Sed sed ipsum scelerisque sapien dignissim
                condimentum ut nec erat. Sed non magna ut risus dictum dapibus. Sed porttitor euismod pellentesque.
                Fusce vel consectetur mauris. Nulla id nisi ligula. Pellentesque consectetur ex orci, id accumsan lorem
                facilisis vitae. Cras sed erat vel risus dictum convallis. Aenean rhoncus blandit ex eu varius.

                Proin imperdiet ultrices gravida. Phasellus egestas ultricies urna, vitae bibendum nisl porta id.
                Quisque volutpat dui eros, in accumsan odio blandit a. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Nunc euismod id lacus eu vehicula. Proin bibendum lorem in orci lobortis, ac varius ex sodales. Sed a
                lorem nec neque tincidunt iaculis in vel leo. Fusce in aliquet lorem, quis fringilla mi. Nam iaculis
                tellus sit amet consequat faucibus. Integer a velit turpis.

                Ut nec gravida eros, id consequat dui. Integer sit amet posuere eros. Integer finibus ipsum orci, sit
                amet hendrerit odio eleifend vitae. Mauris vitae commodo tellus, a semper arcu. Donec eu arcu in mi
                viverra ultrices. Proin hendrerit orci tortor, ut fringilla urna ultrices vitae. Proin dignissim neque
                lectus, eu vestibulum dolor venenatis finibus.

                Vestibulum volutpat nulla nec tellus ornare ultrices. Nulla id suscipit augue. Fusce erat leo, feugiat
                non fringilla nec, lobortis in dui. Nunc ut mollis mi. Suspendisse vulputate luctus lorem ac sodales.
                Vestibulum et varius velit, at mollis mauris. Aliquam ullamcorper turpis sem, ut ultricies lacus mollis
                sit amet. In vitae nunc tellus. Duis aliquam massa lectus, ut elementum dolor pretium non. Nullam lectus
                nibh, imperdiet scelerisque odio ut, ultrices suscipit lorem. Suspendisse facilisis laoreet diam,
                elementum vestibulum risus aliquet non. Pellentesque ornare eget turpis ut posuere. Aenean tristique vel
                risus ac facilisis.
            </div>
        </ConvertToPDF>

        <div>
            <button onClick={() => setTemplate(templateOne)}>template one</button>
            <button onClick={() => setTemplate(templateTwo)}>template two</button>
        </div>
        <button onClick={savePDF}>click</button>
    </>

};

export default Test
