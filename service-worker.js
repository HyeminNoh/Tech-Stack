/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "Algorithms/Algorithms.html",
    "revision": "4c08eb2f2318cf0d9256ba35f3cab3ad"
  },
  {
    "url": "Algorithms/BinarySearch.html",
    "revision": "caa7b39b47bffdc1c3332f284bb75813"
  },
  {
    "url": "Algorithms/BreadthFirstSearch.html",
    "revision": "c022ebe01cbcf88c22aeda708b129fbe"
  },
  {
    "url": "Algorithms/BubbleSort.html",
    "revision": "428243e8f12871bf1fb741b0b536d24c"
  },
  {
    "url": "Algorithms/DepthFirstSearch.html",
    "revision": "f3b18867909c5f57ef01af8becf95810"
  },
  {
    "url": "Algorithms/Hash.html",
    "revision": "adbce22711356318b41bc5caa97d4953"
  },
  {
    "url": "Algorithms/HeapSort.html",
    "revision": "8e6aefd84a4e9b2b510a24f95637280a"
  },
  {
    "url": "Algorithms/InsertionSort.html",
    "revision": "42a78989bbc01f88755258d762285c62"
  },
  {
    "url": "Algorithms/LinearSearch.html",
    "revision": "b9edd7423ff89d3c8e39d6c26764f232"
  },
  {
    "url": "Algorithms/PrimeNum.html",
    "revision": "24933f838b20146b0b026ac0409e198a"
  },
  {
    "url": "Algorithms/QuickSort.html",
    "revision": "d006152fa56cac1d6b1f1dbfcddfa22b"
  },
  {
    "url": "Algorithms/RadixSort.html",
    "revision": "5aa5d479083709940fa5e24d6be28039"
  },
  {
    "url": "Algorithms/Recursive.html",
    "revision": "8fd5192073c9eceab651f6f3ebbaba11"
  },
  {
    "url": "Algorithms/SelectionSort.html",
    "revision": "c051e586ed715858f528ec8a3e5dfa74"
  },
  {
    "url": "Algorithms/StringSearch.html",
    "revision": "2ad13fc7926c7f70a1d63335ba3daf9e"
  },
  {
    "url": "Algorithms/TimeComplexity.html",
    "revision": "42df1d730094e881bdc385d7f7bac68d"
  },
  {
    "url": "assets/css/0.styles.6ec522c8.css",
    "revision": "4aca3c64362f9064ceabb99f9e493a21"
  },
  {
    "url": "assets/img/OSI7layer.9add7cef.jpg",
    "revision": "9add7cef0b674c0b19d3a6e8249df6d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.10f25c62.js",
    "revision": "12eea6a269eec2941140943724f0b673"
  },
  {
    "url": "assets/js/11.d5e3fddc.js",
    "revision": "6f53fa6196cebf6a676226a66f54f70f"
  },
  {
    "url": "assets/js/12.db89b883.js",
    "revision": "39da79a9ff43ce22f5c78d6ff74b5b81"
  },
  {
    "url": "assets/js/13.3066a416.js",
    "revision": "1a497925c9f99e7407ec38e279f1b36c"
  },
  {
    "url": "assets/js/14.c9d735a2.js",
    "revision": "042535012fe43a94d1e83447b82f5039"
  },
  {
    "url": "assets/js/15.73e5e406.js",
    "revision": "9b87340c03e30872e02bf5ab36129d94"
  },
  {
    "url": "assets/js/16.009d0190.js",
    "revision": "4f2f092e85894f859cc67be021198b1f"
  },
  {
    "url": "assets/js/17.6e8a6ddf.js",
    "revision": "c1a0d8edfc4ef755c02aa96597e706eb"
  },
  {
    "url": "assets/js/18.fab23ada.js",
    "revision": "1daf6b2887e87ee39c9c84a68f6f5d94"
  },
  {
    "url": "assets/js/19.39a2439e.js",
    "revision": "19bdaa6ea1b8a8da05ff5fc42640c60d"
  },
  {
    "url": "assets/js/2.37c2a9c1.js",
    "revision": "0b2cb7a0f377589ac9ebdd589b4cfb2e"
  },
  {
    "url": "assets/js/20.e53fc847.js",
    "revision": "cdd56876e9fdd8fb51dbb015694cc2c8"
  },
  {
    "url": "assets/js/21.d6ce6c96.js",
    "revision": "ba3e85831c4e1c0431f478693e31e1d0"
  },
  {
    "url": "assets/js/22.a97882f2.js",
    "revision": "ba472f040d3e3d31743130c01e980162"
  },
  {
    "url": "assets/js/23.b707681b.js",
    "revision": "a32469b9d1e26d9c28f3908b24624a47"
  },
  {
    "url": "assets/js/24.e6441cbd.js",
    "revision": "6f4223da4725945e1ab1e4e23d26bba0"
  },
  {
    "url": "assets/js/25.13bb78de.js",
    "revision": "ff62e50acd685e0b65acca8280cff32f"
  },
  {
    "url": "assets/js/26.140ec841.js",
    "revision": "71c848c72b9f7f30f90d7edd7b9be9ee"
  },
  {
    "url": "assets/js/27.80699186.js",
    "revision": "b54f0f5c00960beb33c99061be086d3c"
  },
  {
    "url": "assets/js/28.d03f7b05.js",
    "revision": "06d0a83bd0b6c975c7ca45ce5abc14a3"
  },
  {
    "url": "assets/js/29.88ba7f59.js",
    "revision": "5583d40fe048a90007f7a174e42a8f00"
  },
  {
    "url": "assets/js/3.229f236d.js",
    "revision": "34fb5058c2887aee394ab29f4ae6ee33"
  },
  {
    "url": "assets/js/30.fdaf381b.js",
    "revision": "49ada242b83ab69bdc52fed6442b1336"
  },
  {
    "url": "assets/js/31.fab0f8c4.js",
    "revision": "c5b8505fef57d426a120deafdff97e2d"
  },
  {
    "url": "assets/js/32.ec9cdf46.js",
    "revision": "9e825f93846bd5aa7bc7d8760b1fc02d"
  },
  {
    "url": "assets/js/33.9d4e0d49.js",
    "revision": "c020589012f5554460b9b2c08bb62f4f"
  },
  {
    "url": "assets/js/34.c3e19da8.js",
    "revision": "85090a8b9521f8c76ccd4ba1657dfddb"
  },
  {
    "url": "assets/js/35.093de18b.js",
    "revision": "85d5ea344f52caf8d150dc21e7562f27"
  },
  {
    "url": "assets/js/36.733f308f.js",
    "revision": "36c6e7388976ef38855ec0da84eec578"
  },
  {
    "url": "assets/js/37.461a2417.js",
    "revision": "928e9fdfdad144096f198c93cdd2e4bb"
  },
  {
    "url": "assets/js/38.58992344.js",
    "revision": "c54c8d6a41b3ab4337e4ca3a0322fe4b"
  },
  {
    "url": "assets/js/39.dbcd4b74.js",
    "revision": "9f9e4fa87979b90b4fb08e368dde4977"
  },
  {
    "url": "assets/js/4.88da62ba.js",
    "revision": "94ac8f4432130530184e5eecbd49b5cf"
  },
  {
    "url": "assets/js/40.fc2521ec.js",
    "revision": "babb53a6d96428c762dbdb148abbd025"
  },
  {
    "url": "assets/js/41.41cc1cfc.js",
    "revision": "2d826f87158db311741a28696a63939e"
  },
  {
    "url": "assets/js/42.e5f5475e.js",
    "revision": "1fdf7d248a6ba39226bdd05eb6ac949f"
  },
  {
    "url": "assets/js/43.81efa23e.js",
    "revision": "eff404680a24210934322d4113932d49"
  },
  {
    "url": "assets/js/44.0fe3a784.js",
    "revision": "18c04955bcb223054f04f5d6aebc498b"
  },
  {
    "url": "assets/js/45.17b4c4c2.js",
    "revision": "1648eeb9ab083a97ade5f39f25330c95"
  },
  {
    "url": "assets/js/46.94192a3b.js",
    "revision": "fddc3bab02424c6598279762afa9dd50"
  },
  {
    "url": "assets/js/47.6ed1725f.js",
    "revision": "12b5c87ef45c07b3de3ad4e27f04ba32"
  },
  {
    "url": "assets/js/48.5cd4da3f.js",
    "revision": "c6cb3906035a50067532050ffa1d4ade"
  },
  {
    "url": "assets/js/49.77f6a778.js",
    "revision": "c51c94a122d4a0445cc7e6d16cdbd358"
  },
  {
    "url": "assets/js/5.201a4032.js",
    "revision": "ab26999535009a986539d4d2e52d5293"
  },
  {
    "url": "assets/js/50.1522799e.js",
    "revision": "f02613c712d1ed13b33fa9017e6bfd8b"
  },
  {
    "url": "assets/js/51.4942aacc.js",
    "revision": "ab019709a215a61e549cdec3e513cd5b"
  },
  {
    "url": "assets/js/52.9427b293.js",
    "revision": "19480c225b00e1ae0bf8c8e2e61a3fdd"
  },
  {
    "url": "assets/js/53.fedf9cdb.js",
    "revision": "cf0351afc25c54d2bdf4d64b3d01d3cf"
  },
  {
    "url": "assets/js/54.981b10fe.js",
    "revision": "ffbc7bf1fbd23938b9c211862ae56897"
  },
  {
    "url": "assets/js/55.08cc7d6d.js",
    "revision": "751224afb9920f0bc772cb9cf1f34c0b"
  },
  {
    "url": "assets/js/56.e6575f88.js",
    "revision": "b1c6fdf5e25b4610ff7ae15f071ff16e"
  },
  {
    "url": "assets/js/6.0ceaedea.js",
    "revision": "094302301b43b1daa1be6a779f55f6a5"
  },
  {
    "url": "assets/js/7.e7dad563.js",
    "revision": "d685ae5e97e0f79c0aa79ab8f2d93ae6"
  },
  {
    "url": "assets/js/8.e132b549.js",
    "revision": "5457eaca2962df74fc5ea4273713d906"
  },
  {
    "url": "assets/js/9.46fd0b11.js",
    "revision": "96643b7f9ae43d5c106628620111f8a9"
  },
  {
    "url": "assets/js/app.4483bd3e.js",
    "revision": "841b157ce4ae128518451109c2f0d657"
  },
  {
    "url": "DataStructure/Array.html",
    "revision": "b03583c17e991a25aec078240f3465f2"
  },
  {
    "url": "DataStructure/AVLTree.html",
    "revision": "cf89a5942ed98d0a6a9e8c904e46be6a"
  },
  {
    "url": "DataStructure/BinarySearchTree.html",
    "revision": "bf138231df697dfe1010b3027f3ce369"
  },
  {
    "url": "DataStructure/BinaryTree.html",
    "revision": "f7d353ab5853abc50738f8ebe8c1ac1f"
  },
  {
    "url": "DataStructure/DataStructure.html",
    "revision": "82b6f8ad035257c31627c16863a22627"
  },
  {
    "url": "DataStructure/Graph.html",
    "revision": "2d887a1f47bd866b1612fcf6ca1357f7"
  },
  {
    "url": "DataStructure/LinkedList.html",
    "revision": "c0af01485d513d8d60d12bad512dab2d"
  },
  {
    "url": "DataStructure/Queue.html",
    "revision": "ce5124bd275a233d759ea2a78a9acf59"
  },
  {
    "url": "DataStructure/Stack.html",
    "revision": "9952766045c2a07ab5dff708e896009e"
  },
  {
    "url": "DataStructure/Tree.html",
    "revision": "0029d1f7ea00f499a26628322441e1b0"
  },
  {
    "url": "images/Algorithms/resources/BFS_1.png",
    "revision": "b850dbae1cc1c989e7797db4c806672b"
  },
  {
    "url": "images/Algorithms/resources/BFS_2.png",
    "revision": "34b9b4cff86074b3c1a9828ab1a0c523"
  },
  {
    "url": "images/Algorithms/resources/big-o.png",
    "revision": "2ec95379e443d53b7f2e5f4599384d4c"
  },
  {
    "url": "images/Algorithms/resources/big-o2.jpg",
    "revision": "ae32a8624e9e446fc31cc3ff873fc40a"
  },
  {
    "url": "images/Algorithms/resources/DFS_1.png",
    "revision": "82142d2ed4696179459d33656d995ed5"
  },
  {
    "url": "images/Algorithms/resources/DFS_2.png",
    "revision": "b0dffa4a9fa9b0c47bc0f7db2003d637"
  },
  {
    "url": "images/Algorithms/resources/hashtable.png",
    "revision": "b6be6d43d7a33b4dd22f221c593e5875"
  },
  {
    "url": "images/Algorithms/resources/heapsort_1.png",
    "revision": "dfe84d50477e41dffda05ef086826387"
  },
  {
    "url": "images/Algorithms/resources/heapsort_2.png",
    "revision": "0071db39a86d17823e58f48a8f8a63a6"
  },
  {
    "url": "images/Algorithms/resources/heapsort_3.png",
    "revision": "44eac1d46f2d2e5fd9e1d8e2bf996a20"
  },
  {
    "url": "images/Algorithms/resources/heapsort_4.png",
    "revision": "b14df5b0889081171551192c214be62c"
  },
  {
    "url": "images/Algorithms/resources/heapsort_5.png",
    "revision": "45d0d13f18486a543dc69a05eba08d30"
  },
  {
    "url": "images/Algorithms/resources/InsertionSort_Psudo.png",
    "revision": "c3340bf88566f336e2d9c96109bd4305"
  },
  {
    "url": "images/Algorithms/resources/InsertionSort.png",
    "revision": "4aaa623b3d48fe264e13eb79a16b36d2"
  },
  {
    "url": "images/Algorithms/resources/InsertPosition1.png",
    "revision": "3c61f803d2e51e3cd46d29aa72f7a8ee"
  },
  {
    "url": "images/Algorithms/resources/InsertPosition2.png",
    "revision": "f05f799c5d6f72b81db45fd7fe8c575b"
  },
  {
    "url": "images/Algorithms/resources/MaxHeap.png",
    "revision": "c62ffbc9d1f4338237578ddebe9f9133"
  },
  {
    "url": "images/Algorithms/resources/MinHeap.png",
    "revision": "fcc28084fdc78da37c271acdf64029e1"
  },
  {
    "url": "images/Algorithms/resources/pivot.png",
    "revision": "f7629bf88e0bd98c4983ae1500ca2742"
  },
  {
    "url": "images/Algorithms/resources/quick_average.png",
    "revision": "02e8cdfc24923ff8b4ca6cc5ba48bffe"
  },
  {
    "url": "images/Algorithms/resources/quick_best_pivot.png",
    "revision": "0d6bf64d1db59fe1f91d1865acf83027"
  },
  {
    "url": "images/Algorithms/resources/quick_best.png",
    "revision": "dcd7b073ac5a104a62ab39776dfa7635"
  },
  {
    "url": "images/Algorithms/resources/Quick_worst.png",
    "revision": "1211fd33a1f00b7e757eda9a0b185252"
  },
  {
    "url": "images/Algorithms/resources/QuickSort.png",
    "revision": "f8cd2c488fb387435a6bb817310cc131"
  },
  {
    "url": "images/Algorithms/resources/RadixSort.jpeg",
    "revision": "2d824d96e014748a0f24c221399694fb"
  },
  {
    "url": "images/Algorithms/resources/SelectionSort.png",
    "revision": "cad847d10fe136f32a4295883543fb15"
  },
  {
    "url": "images/DataStructure/resources/3-node_binarytree.png",
    "revision": "d32eafe23341c2a0d92ae459589cc6ab"
  },
  {
    "url": "images/DataStructure/resources/avl_sr2.png",
    "revision": "669b72e8308c16912fe5bef012736a92"
  },
  {
    "url": "images/DataStructure/resources/binarytree.png",
    "revision": "2e2fcd59f9310d4b9ad6f53ec75a9bae"
  },
  {
    "url": "images/DataStructure/resources/complete_binarytree.png",
    "revision": "fb8a8bb0ef545dc89985a518f22b251e"
  },
  {
    "url": "images/DataStructure/resources/full_binarytree.png",
    "revision": "6845297a3435eb61fd51ad6e76a87342"
  },
  {
    "url": "images/DataStructure/resources/min_binarytree.png",
    "revision": "c3a258ef6be67f464a54197872d770a8"
  },
  {
    "url": "images/DataStructure/resources/tree.png",
    "revision": "21cbb680d488bc38a103d0b79ad465cf"
  },
  {
    "url": "images/Java/resources/access_modifier.png",
    "revision": "8d1a3d5c911fda8e345b76d4e55c733d"
  },
  {
    "url": "images/Java/resources/access_modifier1.png",
    "revision": "383de0645ba707841683dd24543043d2"
  },
  {
    "url": "images/Java/resources/access_modifier2.png",
    "revision": "f7a7fb0621566dba8175b1c22535efb5"
  },
  {
    "url": "images/Java/resources/inheritance.png",
    "revision": "d30173f11ba1b8ca2bfe7122c934dfc3"
  },
  {
    "url": "images/Java/resources/inheritance1.png",
    "revision": "393c8a1c141e47f8928970bb677b371f"
  },
  {
    "url": "images/Java/resources/JVM.png",
    "revision": "197e2181f7b88660823f92280ba67ac1"
  },
  {
    "url": "images/Java/resources/Operator.png",
    "revision": "54aaa537644dad122362024eb6540223"
  },
  {
    "url": "images/Java/resources/polymorphism.jpeg",
    "revision": "dbd91ee82d1a822b436de0aecf37309d"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "images/Network/resources/3-way-handshake.png",
    "revision": "dd7f29fecd14fe5feebc6cf562123c48"
  },
  {
    "url": "images/Network/resources/4-way-handshake.png",
    "revision": "67a772eea0882ed28155df1f99fce31d"
  },
  {
    "url": "images/Network/resources/addressClass.jpg",
    "revision": "af422e11e3817b5156fc2ae6de1a868b"
  },
  {
    "url": "images/Network/resources/domain.png",
    "revision": "462a47c18d04cf95ab264f3139a87d9d"
  },
  {
    "url": "images/Network/resources/flow_control.jpeg",
    "revision": "82467532fd0423803082124bf2751bcc"
  },
  {
    "url": "images/Network/resources/internet.jpeg",
    "revision": "fa02ceb50a019d81dfff60f0b27d0417"
  },
  {
    "url": "images/Network/resources/OSI7layer.jpg",
    "revision": "9add7cef0b674c0b19d3a6e8249df6d1"
  },
  {
    "url": "images/Network/resources/port.png",
    "revision": "ffba6a8be8b2270735fcd7d08094b2e5"
  },
  {
    "url": "images/Network/resources/TCP_Header.png",
    "revision": "022828ea134f4f9078309300fd37c3f4"
  },
  {
    "url": "images/Network/resources/TCP_IP_Model.png",
    "revision": "acc03eaeef7b62ea132f08a3136c4cc3"
  },
  {
    "url": "images/Network/resources/UDP_Header.png",
    "revision": "ce1d44781ba8da5bdcde58eeb6004292"
  },
  {
    "url": "index.html",
    "revision": "2e6a9c9dbb57d66a0a616d98dcb1466b"
  },
  {
    "url": "Java/Class_and_Object.html",
    "revision": "383a47eaf6bbae580a3f17ba4521106a"
  },
  {
    "url": "Java/ExceptionHandling.html",
    "revision": "fbb5eb9323082b8823bcadf46880f7a4"
  },
  {
    "url": "Java/GarbageCollection.html",
    "revision": "3902eae5f77919d48f9dcba336c4e0b1"
  },
  {
    "url": "Java/Generics.html",
    "revision": "0e35a727e9fe5f4be6905540ae19f26d"
  },
  {
    "url": "Java/Inheritance.html",
    "revision": "52e45525575f5e56f255ac3dcc825327"
  },
  {
    "url": "Java/Java.html",
    "revision": "df46e03e9809c9e2a2126e64dd23b740"
  },
  {
    "url": "Java/JVM(Java_Virtual_Machine).html",
    "revision": "0c22dee6a0c74329ce7ad97daad2b429"
  },
  {
    "url": "Java/Lambda.html",
    "revision": "4c701d47ab8d8dc48b12d405526db880"
  },
  {
    "url": "Java/Modifier.html",
    "revision": "45759c22d692dc953ffccf251b719f46"
  },
  {
    "url": "Java/Operator.html",
    "revision": "fcb6398a5f4e71fff9e7319483aeb6fb"
  },
  {
    "url": "Java/Overloading_and_Overriding.html",
    "revision": "a1014df7ed0b1b180721a82c32d6e5fe"
  },
  {
    "url": "Java/Polymorphism.html",
    "revision": "9e36ac77a9e3eb7b9e7e830ab2d9e501"
  },
  {
    "url": "Java/String.html",
    "revision": "48bb2d62362b2d9cab8dc81a22566e1a"
  },
  {
    "url": "Java/Thread.html",
    "revision": "da6411cf83f97c89dcb6355fe34e07a1"
  },
  {
    "url": "Network/ApplicationLayer.html",
    "revision": "714e22bbadb2c9954b3941ad89364946"
  },
  {
    "url": "Network/Computer_Network.html",
    "revision": "3fb78edf6b52f2db24c89e0fe4887a54"
  },
  {
    "url": "Network/HTTP_and_HTTPS.html",
    "revision": "496f6f079876726f4f780a4257427808"
  },
  {
    "url": "Network/InternetLayer.html",
    "revision": "aefefe0e639fcb34371e9120d3abc5ed"
  },
  {
    "url": "Network/NetworkInterfaceLayer.html",
    "revision": "ca0547bec77fcaad321543c747a9d7e6"
  },
  {
    "url": "Network/OSI7Layers.html",
    "revision": "319fc65532ef298fbcf08ca4f12223cd"
  },
  {
    "url": "Network/TCP_3-way-handshake_and_4-way-handshake.html",
    "revision": "cda7bb0259edbf31d6c9b7a9a0fe3cd7"
  },
  {
    "url": "Network/TransportLayer.html",
    "revision": "4c5517328d6c7c6a231955b4765fba56"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
