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
    "revision": "6d2ca3daa799142008775406edbc30f2"
  },
  {
    "url": "Algorithms/BinarySearch.html",
    "revision": "68105eec64a5796c7ddc8690dfeaacf4"
  },
  {
    "url": "Algorithms/BreadthFirstSearch.html",
    "revision": "2b04a4fc9bc2fd49c629ffadafdce5f2"
  },
  {
    "url": "Algorithms/BubbleSort.html",
    "revision": "82586e2e44662ac2aa7aa06777ce3e86"
  },
  {
    "url": "Algorithms/DepthFirstSearch.html",
    "revision": "236f87a747309a2bf2ec26095dee8150"
  },
  {
    "url": "Algorithms/Hash.html",
    "revision": "936c9b7a860fafc6d50d9f139a711032"
  },
  {
    "url": "Algorithms/HeapSort.html",
    "revision": "936ceb29c0f4b0a21edd6ac0e1068095"
  },
  {
    "url": "Algorithms/InsertionSort.html",
    "revision": "4c7dc7b5519f8fe10c086056cd73e4a9"
  },
  {
    "url": "Algorithms/LinearSearch.html",
    "revision": "07faa55b0825bc8c7654a4b32b98af55"
  },
  {
    "url": "Algorithms/PrimeNum.html",
    "revision": "7dc582a90aa700ed1b0a561307ba9a96"
  },
  {
    "url": "Algorithms/QuickSort.html",
    "revision": "4ecb266b9cb9fd9150a55a8b56715028"
  },
  {
    "url": "Algorithms/RadixSort.html",
    "revision": "2f7b7c268914263520c2b2f0d98cbe38"
  },
  {
    "url": "Algorithms/Recursive.html",
    "revision": "c467e89c68bf2bc0cd60410b89ba9a3d"
  },
  {
    "url": "Algorithms/SelectionSort.html",
    "revision": "652679dc606a0aaf8745b159df335cf0"
  },
  {
    "url": "Algorithms/StringSearch.html",
    "revision": "0af51258a4116adebdfb124db0627850"
  },
  {
    "url": "Algorithms/TimeComplexity.html",
    "revision": "4de6486f03ffced656e03234d68d753c"
  },
  {
    "url": "assets/css/0.styles.6ec522c8.css",
    "revision": "4aca3c64362f9064ceabb99f9e493a21"
  },
  {
    "url": "assets/img/inheritance.d30173f1.png",
    "revision": "d30173f11ba1b8ca2bfe7122c934dfc3"
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
    "url": "assets/js/10.f2b06e5d.js",
    "revision": "967e549b3fd23858b19a09833a5bbfa2"
  },
  {
    "url": "assets/js/11.b3d74b9e.js",
    "revision": "a82d5ad711c8c3b078f842d6c4eacec5"
  },
  {
    "url": "assets/js/12.f26c623f.js",
    "revision": "9640b2e40b4d4ff8171f05479b55773d"
  },
  {
    "url": "assets/js/13.58552f8c.js",
    "revision": "8036cfc0a92d52264307f119b690dd6e"
  },
  {
    "url": "assets/js/14.017105da.js",
    "revision": "334784dfd210d168eb89e372c9d873d3"
  },
  {
    "url": "assets/js/15.4c38d967.js",
    "revision": "def49ae5a0056cce24b3c8f592c24e82"
  },
  {
    "url": "assets/js/16.cd39afbd.js",
    "revision": "30969a97b35be36e9ce219d8663e46f8"
  },
  {
    "url": "assets/js/17.fd422a37.js",
    "revision": "6c448324ad9f2991366b82822edaf9ad"
  },
  {
    "url": "assets/js/18.855b4b67.js",
    "revision": "7d93be653fb4948af3bb486a09957d16"
  },
  {
    "url": "assets/js/19.d72964dd.js",
    "revision": "77e418d4747a3b11a97cc416ab4c5fc5"
  },
  {
    "url": "assets/js/2.07ac685e.js",
    "revision": "7a4685c008917b37ff5b5eb12a5a64c7"
  },
  {
    "url": "assets/js/20.996aa327.js",
    "revision": "da41979b085710bf3d0091a8044210ce"
  },
  {
    "url": "assets/js/21.260a4922.js",
    "revision": "698c854fc12c61331667255648f9aa2d"
  },
  {
    "url": "assets/js/22.a70a0a03.js",
    "revision": "f57f6f5c923bd38369bb859584d7ca16"
  },
  {
    "url": "assets/js/23.14e41946.js",
    "revision": "1089d29f0d16126d7ba7ba1df877e341"
  },
  {
    "url": "assets/js/24.05bb6d29.js",
    "revision": "d27b1544d076a19a1e401f08d111885b"
  },
  {
    "url": "assets/js/25.ee511a22.js",
    "revision": "090d8320b7df2071ff885ef25c153a0d"
  },
  {
    "url": "assets/js/26.8ec4ae34.js",
    "revision": "c227ce4bd722535eff5d5cf8007ccb8c"
  },
  {
    "url": "assets/js/27.43c19de3.js",
    "revision": "13fd8b79b785155fe881144fb43f0d63"
  },
  {
    "url": "assets/js/28.c8e61350.js",
    "revision": "a29ac83c92d09c5702394e21c05e338a"
  },
  {
    "url": "assets/js/29.90fc855b.js",
    "revision": "7aefa3102d02940e927113509164049e"
  },
  {
    "url": "assets/js/3.743bfac2.js",
    "revision": "2e67513748c19592cb418bc10178a39d"
  },
  {
    "url": "assets/js/30.e85a4bb5.js",
    "revision": "6567cb4b37917db1201ab7909edff1b1"
  },
  {
    "url": "assets/js/31.00519cc6.js",
    "revision": "9c0c13f49aa1051b4c99e8591674aaa3"
  },
  {
    "url": "assets/js/32.ef0667f5.js",
    "revision": "c3834f63e78dd402f84cc3126a645a3f"
  },
  {
    "url": "assets/js/33.c4a9d9d9.js",
    "revision": "f89c68f8c1d1f03a750acd3e69a9cdfd"
  },
  {
    "url": "assets/js/34.cf101823.js",
    "revision": "4ae1d476d2ebf353b277554ea6742324"
  },
  {
    "url": "assets/js/35.0c675cfa.js",
    "revision": "8c3b5c540b5cbf37e3b6d058d2f9adcf"
  },
  {
    "url": "assets/js/36.acd8534a.js",
    "revision": "8a7348705077f0e774ea8afb70153b61"
  },
  {
    "url": "assets/js/37.44747617.js",
    "revision": "4f6a1d3ef276840d520466a029308ed1"
  },
  {
    "url": "assets/js/38.d0aca47f.js",
    "revision": "cda1ea34900b66575f0075e0eaf0bf0f"
  },
  {
    "url": "assets/js/39.1d95cb37.js",
    "revision": "87cfec5b60baf907d8b124a0e55d0109"
  },
  {
    "url": "assets/js/4.445eff0c.js",
    "revision": "ec581a07d0a1cc96bc1556995b625f84"
  },
  {
    "url": "assets/js/40.fb8492b1.js",
    "revision": "760d661fae7abc26816ad490db9ff209"
  },
  {
    "url": "assets/js/41.de27e4a5.js",
    "revision": "df06d98730d61647d2ad88b63062861f"
  },
  {
    "url": "assets/js/42.7216b17a.js",
    "revision": "3272db00c66ab2d709e60b3be2d79571"
  },
  {
    "url": "assets/js/43.8460e788.js",
    "revision": "827e41002b354cacf0f2429437d7bb33"
  },
  {
    "url": "assets/js/44.b58e0e3d.js",
    "revision": "02f592751a56543ca3426e37691a6c38"
  },
  {
    "url": "assets/js/45.b0e7b490.js",
    "revision": "fa8d179190257ca1f85159399556a058"
  },
  {
    "url": "assets/js/46.11b12824.js",
    "revision": "b6ff6b423e93fbb2950eed27ff909bf7"
  },
  {
    "url": "assets/js/47.2628971b.js",
    "revision": "6dee3de253bf99790cbe0b56e3d0403b"
  },
  {
    "url": "assets/js/48.54398a02.js",
    "revision": "35fa48f1a84869c48e5c4de73a194399"
  },
  {
    "url": "assets/js/49.6957c780.js",
    "revision": "40ad9f8af1d16fb5a8d95ddc82af97a2"
  },
  {
    "url": "assets/js/5.8f564622.js",
    "revision": "accffb646e16029429ada51bae1e3eb4"
  },
  {
    "url": "assets/js/50.3b614490.js",
    "revision": "4b57c0b6d16376143b3a67aae16bdc9a"
  },
  {
    "url": "assets/js/51.2c9e607e.js",
    "revision": "a1bee22e4727c052040724d3379999f7"
  },
  {
    "url": "assets/js/52.5a5d58d7.js",
    "revision": "eca952c7992022af49197d2378863e5d"
  },
  {
    "url": "assets/js/53.64484107.js",
    "revision": "aa791b3e3cd0bb6a81ccce212270658c"
  },
  {
    "url": "assets/js/54.03f210d7.js",
    "revision": "22d004b36749505a8ff7421d3ccd9f87"
  },
  {
    "url": "assets/js/55.357895d9.js",
    "revision": "0174bf8e3e855fe631fd401eb1b027f5"
  },
  {
    "url": "assets/js/56.e6575f88.js",
    "revision": "b1c6fdf5e25b4610ff7ae15f071ff16e"
  },
  {
    "url": "assets/js/6.62eb19e8.js",
    "revision": "456c5a47fad40cc0520f8ccf16112099"
  },
  {
    "url": "assets/js/7.0cf3b2b7.js",
    "revision": "aaf11dc406cdd60cbd6c59acf6f62a08"
  },
  {
    "url": "assets/js/8.6600c078.js",
    "revision": "ff2cef4766a4887897b17482db09094e"
  },
  {
    "url": "assets/js/9.388746d9.js",
    "revision": "c69e2d73f988bc43fab6d660ec1ccffd"
  },
  {
    "url": "assets/js/app.9de115e8.js",
    "revision": "cc8597b277e7707e1f50a70007a7869a"
  },
  {
    "url": "DataStructure/Array.html",
    "revision": "7e8ad7a54eaa9ade498452f51f68cd15"
  },
  {
    "url": "DataStructure/AVLTree.html",
    "revision": "5849c1e37fb93369d88b5f5b47a2d0dd"
  },
  {
    "url": "DataStructure/BinarySearchTree.html",
    "revision": "32fccd5e2ff20f19b5203438aab2751c"
  },
  {
    "url": "DataStructure/BinaryTree.html",
    "revision": "8b81ee1f884f05384100e0820f3885cb"
  },
  {
    "url": "DataStructure/DataStructure.html",
    "revision": "c437b7fcac68aa531217019cd964b16b"
  },
  {
    "url": "DataStructure/Graph.html",
    "revision": "ea828dee832eba36d6b9c7e2f463e07c"
  },
  {
    "url": "DataStructure/LinkedList.html",
    "revision": "cef14d2f2634dbd4534c4bc95ab70a4b"
  },
  {
    "url": "DataStructure/Queue.html",
    "revision": "2ead3e58b4f7aab6d783027895c80140"
  },
  {
    "url": "DataStructure/Stack.html",
    "revision": "562f2aff8876346176202bbde8c2c142"
  },
  {
    "url": "DataStructure/Tree.html",
    "revision": "ec4723124b12c914eebad55133a4dd92"
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
    "revision": "f832d61c74e59323bb7195adf3f5d3a1"
  },
  {
    "url": "Java/Class_and_Object.html",
    "revision": "1dace0fa5c432ddcac2339574f4b6df6"
  },
  {
    "url": "Java/ExceptionHandling.html",
    "revision": "23652792325dc71218cbeb06543e1b72"
  },
  {
    "url": "Java/GarbageCollection.html",
    "revision": "d6668b64134bf1c03d6304ed527763fb"
  },
  {
    "url": "Java/Generics.html",
    "revision": "ae5a6c0a66809f4e05d960e1151d41bd"
  },
  {
    "url": "Java/Inheritance.html",
    "revision": "c81fd0d9ed2309ab3779700f7a356d2f"
  },
  {
    "url": "Java/Java.html",
    "revision": "8f2e9402d70fab1ed29d6401d499efb2"
  },
  {
    "url": "Java/JVM(Java_Virtual_Machine).html",
    "revision": "837993844d42a830ee19862a6ed35290"
  },
  {
    "url": "Java/Lambda.html",
    "revision": "4975cc68a7f17c15c6a4b3b89d4d8e0b"
  },
  {
    "url": "Java/Modifier.html",
    "revision": "626b0fb8d70c727c6116eacafc023870"
  },
  {
    "url": "Java/Operator.html",
    "revision": "65f65b9d48d929bb24b184d824273c77"
  },
  {
    "url": "Java/Overloading_and_Overriding.html",
    "revision": "169b97369dcf70d82a2b071a0bdf925f"
  },
  {
    "url": "Java/Polymorphism.html",
    "revision": "e2d92981a145cc47f5a94dc266770404"
  },
  {
    "url": "Java/String.html",
    "revision": "fcf1e279d418c1dc0fb18161a56bf4db"
  },
  {
    "url": "Java/Thread.html",
    "revision": "233023fa4c3c4ad5f0d7e21d12c75cec"
  },
  {
    "url": "Network/ApplicationLayer.html",
    "revision": "1cc641ff5bf99a3124954dac6f9560b2"
  },
  {
    "url": "Network/Computer_Network.html",
    "revision": "d700c7859da41bc2c32ddc0a9e38ae98"
  },
  {
    "url": "Network/HTTP_and_HTTPS.html",
    "revision": "dfbb74d37782ec68ef73474a1b6105f1"
  },
  {
    "url": "Network/InternetLayer.html",
    "revision": "6b4f3a28401bc7098e1219596069c15b"
  },
  {
    "url": "Network/NetworkInterfaceLayer.html",
    "revision": "6faeb3574f17d23af18321b8b9732860"
  },
  {
    "url": "Network/OSI7Layers.html",
    "revision": "feed5beb3fc5e6a44f3a69247055d275"
  },
  {
    "url": "Network/TCP_3-way-handshake_and_4-way-handshake.html",
    "revision": "9ef18aa6b57af74f80865f8fd4f3507c"
  },
  {
    "url": "Network/TransportLayer.html",
    "revision": "8327cb15eab6dd1e775560966b171bdf"
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
