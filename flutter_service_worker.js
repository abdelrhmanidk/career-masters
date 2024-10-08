'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "36fd0e5efc65c2fc94445b248ef6bbd1",
"version.json": "0c0f216726b797dcdd157004732d4231",
"index.html": "49576fda52ecae030c82c46b34e63052",
"/": "49576fda52ecae030c82c46b34e63052",
"main.dart.js": "4735df0aef5deec51659942c79cabd78",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "684dc34190cadf1581d681514e5b4377",
"icons/favicon-16x16.png": "b99af480b805f56b505437b756d6c8cb",
"icons/android-chrome-192x192.png": "2ceb22978d8ea1a9a45869243d3287fd",
"icons/apple-touch-icon.png": "3e5e357baa3fbb48a19aa69e2d4f2cf2",
"icons/android-chrome-512x512.png": "ebf176441f499ae560753991e70cfa34",
"icons/favicon-32x32.png": "3971f4377be1f9f401bd4e6659a5dc1d",
"manifest.json": "053100cb84a50d2ae7f5492f7dd7f25e",
".git/config": "8e6c94405c03028264f5286aa65d3b62",
".git/objects/61/bf23c8b9f735b9179169babb32bd19eb4c4dfe": "17320eeb9d638a350ca5425ef48e5a70",
".git/objects/0d/255a6d73b9e0632111c6c7d455df15029eb2b6": "c7fddc5f04c81a5b8b06ed96c814d206",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/0c/7a411a87cfcaead9c479b4f742dcbe023532d7": "25472e17e1f9c6de6cb0446048815781",
".git/objects/66/9abf6763082a3eb69e73d8327239a0426b7658": "2b2a167fcd8204261f46ed653a41d7b8",
".git/objects/66/155529dc4d2c8f7fda87a0acdbbeba279fb7d2": "d3bdc5d1ef22c6a53ef3e9dff23b09e4",
".git/objects/68/47a140dc2006a3ba61e15c375a38e9d85690ef": "b9ccff1d2d08705f908fb0d97d3c2865",
".git/objects/9e/5af04550925123135c279397e42d1242c4ab29": "8f86380eb242ca6d3c9c2e539ca70963",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/51/f93225bcb9c4f25f729f0f7b7898c5d664edf6": "688f7523f2005c2247bc42db0853162a",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/66ee3b3ac5a884130a013856f2929ceebcb584": "efaf7af282aa537737efa40904cfdb3c",
".git/objects/34/9944e831dce298424343cca67471db2c11660b": "b3ba4521fb31f84c64054357015a6d59",
".git/objects/5f/bdb8abf2338c684f39abbe1477fcf265833f8a": "4290dedb10659499639957cd0ba6bc94",
".git/objects/b5/e4d19a35bc5e3dc9974b78f3078497f554cb3d": "de6275a7dc17db730570f408b29f09c6",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/d7/4bbc4aeb1e0eac605ffb125921ba79632ad1f1": "0deb9ac5f566b02e3efd6b3fccd39b7b",
".git/objects/be/8487a6eafa46e503c9bf5b424952c73a0de22d": "4d824bd49168c56589fae31c877a1251",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/cc4c779c9f69c5a3000950f633f88ceb33ddcd": "299c548d15878e70ef9a96903edfe961",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/2f497fecad4725c41728cb15cb38c0f0e1a0c1": "6ba69e01971908cf8b34cdcd5e687773",
".git/objects/ae/edab8ffcb9029a930ccb1bd73979e0c54b2dba": "006ab99536baf4aad284ab3fe81ee1a6",
".git/objects/ab/04fc325747ebfbe8dbde8646ba414ce3e19576": "fd91999aaefcb82bb9e11642f71f6a21",
".git/objects/ee/7dd4482d90e4e890839fe49f17c58b4ac1074a": "54b2b8e57558e9d3725046ede2bac148",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/498ae0326450700d1cf3d8a9433ed09ecef9a8": "c9d3a34a861d86830656e72097823e6f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/acbe3033c9c8a469f2fd4e766a27f0c55a5079": "5601e34985fc3dea86ec5d63c5709128",
".git/objects/f2/7fd6f021c89a634dc68401a582518bd3008971": "781ac2e96df1027da3a79835b70c011f",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/ed/a35f15412f6a148a8c4c4ff9f701278de442c9": "76f6cb26cafbfc409ef53075be920eb6",
".git/objects/4e/59896d544a340e389525f4a5da3a12da733aa9": "f0f9e20b539e3c4f51cd2d22055cc174",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/45/2059040f0259841f960454546dcd42837cbfe2": "2951c2204253fbbc79b26f68f295e941",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/1f/ce1b76af44cc789935538e73a9edfe7929b8cb": "7e66eb2fc226a726d610001b393c4432",
".git/objects/1f/bae305573f1b19673012911c3ce1db06d6e440": "5d1424cfd99ee12d53a04f7aa21bec26",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/26038f938bda3d431cac34dea8363c0da8b1a7": "6390544426d796064eec9724896865d0",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/1a/980c3f6a6f414bced72b9196f0e8f372735b00": "02bb49a65ba430d055fceec3e340e634",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/7b/d76147c81d1f55998ad2ad2bcb528c7b449077": "2ec48a698abcd681285db60edde726b1",
".git/objects/7b/f0ca4be8f1a0362dba954bc802047c04b5db8e": "696418f10c1801a79793fd4ced0ee2e6",
".git/objects/7e/f65f2d84c49c5b7a16cf3e849673901ce69a66": "10d06f1735ac44b79f17a0a5efebbe36",
".git/objects/4c/dfed9a15b00d515ca740803c7aef3d21f2aae7": "63debfd708d81b67a23cdbfefa5ad6da",
".git/objects/75/b550ceda40783288cf1024a1ebf60c23382478": "c1216f62da9d37d418a5c52be993940c",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/9f/a349bba5e6e41f256d14027c85bae6970f73a4": "1e4c2354513d347ddba4e62bf4c5ef3b",
".git/objects/6b/5b44f7fa3a5ca799fc50a33bee767dcb043193": "3bfc7a1fddb131262121628de86f3630",
".git/objects/38/a14d8d4c5087a1d412c01393f084b2c62032aa": "200e96b41b86575474406dcd965b689a",
".git/objects/00/1e1a21d74893211d3b4e37350a42bb56e44715": "c3abafb547c23326a5b6b9f3671043ac",
".git/objects/9a/fed7b40208651b7ff1a7cf2cbf67fa985889a6": "c7775218d9644fdfe5f312bc6a1f3e01",
".git/objects/9a/594273de27a56caffe8d76416f240b80cba8c9": "7110997ef4c855c4e80a95fe56c58ee3",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/d655e39322974bf5f7d5bdbc73980307852c69": "4551161bed05dcba99935fe7a8825309",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/5d/11a639b7cef12a23766f8c07563049255d14eb": "49b4d830e9509165c7d5c651bf633577",
".git/objects/91/dfaf23430754d0d4188f1aaa3d953d956ea099": "4f4b465300847ada491c5174022a1d04",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/98/53123a0ad7907b7b7e470f05a8d07ff56a89b3": "f3393a59e0402617d4992fa88f7f42ae",
".git/objects/08/5ec3e2f46f78e1814b598150a97037bbd072cb": "963dc5585ee42b0379a8933b0129c3a2",
".git/objects/6c/a1426269d4dd1bdbcca8c38633783ff5fa03b7": "eb9f77d0596e3f4c3543a5153128e993",
".git/objects/39/dac2ea3638226f8b1b73694297c65ca0085841": "72fa90b7d3afd0fa2b88c8e358b911b6",
".git/objects/97/a35a22090948e033f28ba12876884ab9fc55b4": "f60dd74d1f7326a99a7b5234a1cf39bb",
".git/objects/64/de0c751c3628f773e9f01e8fc509f33e18ed42": "0c48984899d19570070e5d76f82e03f2",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/325c53be734021b051cb27006abf1553ce31db": "861bbe21fa0d2d7c0bd016a3fd1f72d5",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/d2/ba9d6c4648d835e5e9e38e2efe95a9440c0afa": "8963b0b5e01fa22a8cb1558087bd4657",
".git/objects/de/1dc7b3bc742c3780190a88ab6fe78f28362161": "2a3edeabe4adaaa6c70e56cd2a59f827",
".git/objects/b9/21e8281457c6cecff6712de0563101b207cd16": "64af10f11b3d3d0bbed59f90a8812fbf",
".git/objects/c3/c076cc6fc1c716d64c581145097d44f4a5d6fc": "9de093196e31bf6db9cb1750a7c7291a",
".git/objects/e1/0e15649bb15495826d4cae86c7cc1bae5bd602": "ef05fa6e545465043a83256f54636720",
".git/objects/cc/addd8fd49969ef0c5aac4049af85b351604e7c": "3b2243bc99618505782bdaa63ba29f66",
".git/objects/f7/e30958d9a9e6af0eaf4c085191013587ce9dbb": "5a7d23e1e20087ec85129ba8906efd50",
".git/objects/fa/a674de8cffd03ec8e76c3c6e7795f17269ba39": "b5d940c47af3f2fbea417dc618018bca",
".git/objects/c2/d08bb19db07dec6fdac85b1744da2cfa6f971a": "0e06b43c049dd3d38113eb5937d806c7",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/f8/c7ce0eba1d9463b314cab706c2fbb297b4c7ee": "b5274c84484df750563705bd5accd733",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/e0/67e98b0278a25ba3202c15fe0b4e147537e2e5": "4c552555ae70795f7037038e1c687360",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/8b/b48ae9c7f8578ca86ba976dba4b7f506a38086": "4cf5395716d2e21c403d6b99742abde2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fd6310ba7fb3aa9a3ca00736a0a97f6f",
".git/logs/refs/heads/main": "6d9d0341a4b4d3d008bb26686b72e900",
".git/logs/refs/remotes/origin/main": "902bb1839192473b99f9f985d7ff277a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ded4da71f5839158115db19e48b287e7",
".git/refs/remotes/origin/main": "ded4da71f5839158115db19e48b287e7",
".git/index": "a34e627858d53113098c37165a494216",
".git/COMMIT_EDITMSG": "18670582b5a76319761d48f6f78773d5",
"assets/images/favicon_io.zip": "ce5ca0539ab4d822a9dbca483b615620",
"assets/images/login.png": "5bd6e4d36069ef2e1a0363c7434cf81c",
"assets/images/formpage.png": "7f297c4a7ab8502273a868a3feb99032",
"assets/images/company%2520page.png": "64802f42ff63550f739feaf2b447a8cc",
"assets/images/undraw_Female_avatar_efig.png": "428d038c28d271738e16b1ad6173f2c8",
"assets/images/logotest.jpg": "5fe5fd46c833b00a2b7a36078ac156a7",
"assets/images/student%2520profile%2520page.png": "cd37b0755e9b979e99651d064286840a",
"assets/images/user.png": "e459835010bf256bf5e3f7423b43bc51",
"assets/images/Aboutpage.png": "1e3a46ce9a15e8d805e0ffe0efd1cbd9",
"assets/images/microsoft.png": "01d3f16b2bdab39a69d2e0f2019dd696",
"assets/images/evo.jpeg": "0933b78d5a1290a5bcfb3ede7a523735",
"assets/images/figma.png": "ac00fa7b6768286ad44283e4595dd07e",
"assets/images/contact.png": "4aa5ce88b6b2cf8e3938b00e8e8fab4e",
"assets/images/search.png": "e9612850a6cb55eb547266043e1eef86",
"assets/images/evo.png": "7b56edef3964964bb3136ccb6081233b",
"assets/images/student.png": "9e5c8479a67fc65a1548cccf7ee6a490",
"assets/images/student%2520page.png": "b5bb294a4b0470fec9a4069f2eaae316",
"assets/images/trainee%2520pfp.png": "dc4c237afe2f79ede75747900e6952cb",
"assets/images/login%2520mobile.png": "f443ea21019a1f3e95718a5d3cccd636",
"assets/images/company.png": "3e906bba7509118da1ccdcb830f33233",
"assets/images/logo-removebg-preview%25202.png": "8b11f770bf45324ad76556f65cad5145",
"assets/images/logo-removebg-preview.png": "656868a9183ff5dc093d207864a67965",
"assets/images/course.png": "259e112bebfd77746d7070bcdf140a64",
"assets/images/logo.png": "e80abcfb8e398f2041561b48af45a7ea",
"assets/images/firstpage2.png": "0b0a89cab70a3ea62bfc438d95999400",
"assets/images/signup.png": "f3422d452c82f3df8ede34688cc761c8",
"assets/images/undraw_Male_avatar_g98d.png": "91bdb6f5cc7df130fd6f57c29786e972",
"assets/images/homepage.2.png": "867f92ecfaef8ad07c2aceeab70933a2",
"assets/images/firstpage.png": "d8cba134feb71c07ab00ca91ce307e9d",
"assets/images/homepage.png": "f7ea808d06788513ee8c7bdcbfaaa666",
"assets/images/company%2520form%2520phone.png": "d03ba352d8bdf02ba30ec22ad42fcfba",
"assets/images/google.png": "48968e25a410cf9711ec32caad37df0a",
"assets/images/companyForm.png": "a5394f8a1918386c791ad4de918795be",
"assets/AssetManifest.json": "333a8d5d97699919c74f318091489e93",
"assets/NOTICES": "1799c4f9f54b9b2b3d33c6aa9ab61dbc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6c87a2bc2b79c95aaf845c702fd197da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2b90fe41663e5cc05e26d505cd0f2e58",
"assets/fonts/MaterialIcons-Regular.otf": "2674ab79b307ccfdd237f09f88b72d31",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
