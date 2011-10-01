function tree_init() {
   
   var canvas = $("#tree_canvas").get(0);
   var ctx = canvas.getContext("2d");
   
   tree_draw(ctx);
}


function tree_draw(ctx) {

   // layer1/Path
   ctx.save();
   ctx.beginPath();
   ctx.moveTo(185.5, 312.5);
   ctx.bezierCurveTo(192.3, 312.6, 193.0, 293.9, 192.3, 290.5);
   ctx.bezierCurveTo(190.0, 280.5, 185.0, 267.8, 186.4, 271.0);
   ctx.bezierCurveTo(187.7, 274.2, 180.5, 258.7, 179.1, 247.9);
   ctx.bezierCurveTo(177.8, 237.0, 178.2, 239.2, 175.9, 238.3);
   ctx.bezierCurveTo(173.7, 237.4, 175.9, 238.8, 166.4, 232.4);
   ctx.bezierCurveTo(156.9, 226.1, 156.9, 223.3, 155.1, 222.4);
   ctx.bezierCurveTo(153.2, 221.5, 147.3, 222.9, 147.3, 222.9);
   ctx.bezierCurveTo(147.3, 222.9, 144.2, 233.3, 140.5, 235.1);
   ctx.bezierCurveTo(140.1, 239.7, 139.6, 244.2, 132.8, 253.8);
   ctx.bezierCurveTo(132.8, 253.8, 134.2, 245.1, 131.0, 245.6);
   ctx.bezierCurveTo(127.8, 246.0, 125.1, 253.3, 126.0, 255.6);
   ctx.bezierCurveTo(126.9, 257.8, 123.3, 263.3, 121.5, 260.6);
   ctx.bezierCurveTo(119.7, 257.8, 117.8, 253.3, 116.5, 256.0);
   ctx.bezierCurveTo(115.1, 258.7, 121.5, 265.1, 117.4, 267.8);
   ctx.bezierCurveTo(113.3, 270.5, 113.8, 269.6, 112.4, 267.8);
   ctx.bezierCurveTo(112.4, 267.8, 106.7, 269.3, 109.2, 259.2);
   ctx.bezierCurveTo(110.6, 253.8, 104.7, 249.2, 104.7, 249.2);
   ctx.bezierCurveTo(104.7, 249.2, 98.8, 247.4, 102.0, 256.9);
   ctx.bezierCurveTo(103.8, 262.4, 100.6, 262.8, 100.6, 262.8);
   ctx.bezierCurveTo(100.6, 262.8, 101.1, 275.1, 95.6, 276.0);
   ctx.bezierCurveTo(90.2, 276.9, 83.4, 275.5, 87.4, 271.5);
   ctx.bezierCurveTo(91.5, 267.4, 88.3, 266.9, 86.5, 267.4);
   ctx.bezierCurveTo(84.7, 267.8, 85.6, 260.6, 87.4, 260.6);
   ctx.bezierCurveTo(89.3, 260.6, 80.6, 260.6, 78.8, 256.9);
   ctx.bezierCurveTo(77.0, 253.3, 83.8, 246.0, 86.5, 246.5);
   ctx.bezierCurveTo(89.3, 246.9, 87.9, 240.1, 85.6, 240.1);
   ctx.bezierCurveTo(83.4, 240.1, 79.7, 242.0, 79.7, 242.0);
   ctx.bezierCurveTo(79.7, 242.0, 78.8, 238.8, 77.0, 239.7);
   ctx.bezierCurveTo(75.2, 240.6, 73.8, 246.9, 70.2, 246.5);
   ctx.bezierCurveTo(67.9, 246.2, 63.8, 248.8, 63.4, 246.5);
   ctx.bezierCurveTo(62.9, 244.2, 63.8, 255.1, 54.3, 256.5);
   ctx.bezierCurveTo(53.0, 256.7, 55.7, 261.0, 52.5, 262.4);
   ctx.bezierCurveTo(49.3, 263.7, 47.0, 265.1, 47.0, 258.3);
   ctx.bezierCurveTo(45.7, 258.7, 39.3, 260.1, 38.0, 257.4);
   ctx.bezierCurveTo(38.0, 257.4, 36.2, 251.0, 33.9, 252.8);
   ctx.bezierCurveTo(31.6, 254.7, 33.0, 258.3, 32.1, 263.3);
   ctx.bezierCurveTo(33.9, 268.7, 27.5, 272.4, 23.9, 268.3);
   ctx.bezierCurveTo(20.3, 264.2, 25.7, 259.7, 25.7, 259.7);
   ctx.lineTo(23.0, 257.4);
   ctx.bezierCurveTo(23.0, 257.4, 19.4, 252.8, 26.6, 249.7);
   ctx.bezierCurveTo(29.3, 237.0, 33.9, 246.5, 33.9, 246.5);
   ctx.bezierCurveTo(33.9, 246.5, 40.2, 240.6, 42.5, 242.4);
   ctx.bezierCurveTo(44.8, 244.2, 48.4, 241.0, 48.4, 241.0);
   ctx.bezierCurveTo(48.4, 241.0, 45.7, 238.8, 48.4, 231.5);
   ctx.bezierCurveTo(48.9, 226.5, 43.0, 225.2, 43.0, 225.2);
   ctx.bezierCurveTo(43.0, 225.2, 42.5, 235.1, 40.2, 233.3);
   ctx.bezierCurveTo(38.0, 231.5, 35.2, 232.4, 35.2, 232.4);
   ctx.bezierCurveTo(35.2, 232.4, 33.9, 238.3, 29.8, 240.1);
   ctx.bezierCurveTo(25.7, 242.0, 24.8, 242.4, 23.0, 239.7);
   ctx.bezierCurveTo(23.0, 239.7, 15.7, 242.4, 16.2, 238.3);
   ctx.bezierCurveTo(16.6, 234.2, 9.8, 238.3, 9.8, 238.3);
   ctx.bezierCurveTo(9.8, 238.3, 5.7, 232.9, 8.0, 232.4);
   ctx.bezierCurveTo(10.3, 232.0, 13.5, 228.3, 13.0, 225.6);
   ctx.bezierCurveTo(12.6, 222.9, 10.3, 218.4, 8.9, 219.7);
   ctx.bezierCurveTo(7.6, 221.1, 6.7, 226.1, 4.4, 225.2);
   ctx.bezierCurveTo(2.1, 224.3, -0.2, 218.4, 1.7, 215.2);
   ctx.bezierCurveTo(3.5, 212.0, 10.7, 202.9, 11.6, 205.6);
   ctx.bezierCurveTo(12.6, 208.4, 14.8, 202.0, 15.7, 206.6);
   ctx.bezierCurveTo(16.6, 211.1, 15.3, 213.8, 15.3, 213.8);
   ctx.bezierCurveTo(15.3, 213.8, 21.6, 216.5, 22.5, 210.6);
   ctx.bezierCurveTo(23.4, 204.7, 18.9, 197.0, 23.9, 193.8);
   ctx.bezierCurveTo(28.9, 190.7, 29.8, 192.9, 32.1, 190.7);
   ctx.bezierCurveTo(34.3, 188.4, 34.8, 186.6, 40.2, 187.0);
   ctx.bezierCurveTo(45.7, 187.5, 47.5, 191.6, 46.6, 192.9);
   ctx.bezierCurveTo(45.7, 194.3, 50.7, 190.2, 56.1, 191.6);
   ctx.bezierCurveTo(61.6, 192.9, 61.1, 197.5, 71.6, 195.2);
   ctx.bezierCurveTo(76.9, 194.0, 77.9, 197.9, 77.9, 200.2);
   ctx.bezierCurveTo(77.9, 200.2, 88.2, 182.8, 94.2, 188.9);
   ctx.bezierCurveTo(96.1, 190.7, 98.8, 187.6, 101.5, 184.8);
   ctx.bezierCurveTo(108.8, 177.1, 118.3, 180.7, 121.0, 182.0);
   ctx.bezierCurveTo(123.1, 183.1, 121.5, 178.9, 126.0, 176.1);
   ctx.bezierCurveTo(129.3, 174.2, 138.3, 179.3, 138.3, 179.3);
   ctx.bezierCurveTo(138.3, 179.3, 145.5, 180.7, 151.4, 188.9);
   ctx.bezierCurveTo(157.3, 197.0, 159.6, 202.0, 160.5, 207.9);
   ctx.bezierCurveTo(161.4, 213.8, 161.4, 214.7, 161.4, 214.7);
   ctx.bezierCurveTo(161.4, 214.7, 175.9, 222.9, 176.8, 220.6);
   ctx.bezierCurveTo(177.8, 218.4, 179.1, 198.8, 177.3, 197.5);
   ctx.bezierCurveTo(175.5, 196.1, 173.7, 192.9, 164.6, 188.4);
   ctx.bezierCurveTo(155.5, 183.9, 151.9, 174.3, 151.9, 172.1);
   ctx.bezierCurveTo(151.9, 169.8, 144.9, 161.3, 142.8, 163.0);
   ctx.bezierCurveTo(137.8, 167.1, 127.8, 158.9, 127.8, 157.5);
   ctx.bezierCurveTo(127.8, 156.2, 120.6, 158.4, 117.4, 158.9);
   ctx.bezierCurveTo(114.2, 159.4, 114.7, 154.4, 113.3, 155.3);
   ctx.bezierCurveTo(111.9, 156.2, 116.5, 156.2, 111.5, 158.0);
   ctx.bezierCurveTo(106.5, 159.8, 110.6, 155.3, 108.8, 156.6);
   ctx.bezierCurveTo(107.0, 158.0, 107.0, 161.2, 105.6, 162.5);
   ctx.bezierCurveTo(104.2, 163.9, 101.5, 164.8, 101.5, 162.1);
   ctx.bezierCurveTo(101.5, 162.1, 98.8, 161.2, 98.3, 158.4);
   ctx.bezierCurveTo(97.9, 155.7, 95.2, 161.2, 95.2, 161.2);
   ctx.bezierCurveTo(95.2, 161.2, 89.3, 164.3, 89.3, 162.1);
   ctx.bezierCurveTo(89.3, 159.8, 89.3, 159.8, 89.3, 159.8);
   ctx.bezierCurveTo(89.3, 159.8, 86.5, 157.1, 86.5, 159.4);
   ctx.bezierCurveTo(86.5, 161.6, 92.4, 163.4, 87.4, 166.2);
   ctx.bezierCurveTo(82.4, 168.9, 81.1, 166.6, 81.1, 166.6);
   ctx.bezierCurveTo(81.1, 166.6, 79.3, 177.1, 77.0, 177.1);
   ctx.bezierCurveTo(74.7, 177.1, 71.6, 179.0, 68.4, 173.9);
   ctx.bezierCurveTo(63.8, 166.6, 72.5, 164.8, 72.5, 158.9);
   ctx.bezierCurveTo(72.5, 153.0, 69.7, 151.6, 69.3, 153.0);
   ctx.bezierCurveTo(68.8, 154.4, 64.3, 163.0, 62.5, 162.5);
   ctx.bezierCurveTo(53.0, 160.2, 56.6, 151.6, 64.3, 147.6);
   ctx.bezierCurveTo(72.0, 143.5, 74.7, 135.3, 76.1, 132.6);
   ctx.bezierCurveTo(77.5, 129.9, 77.5, 127.9, 72.0, 128.5);
   ctx.bezierCurveTo(68.7, 128.8, 68.7, 129.1, 67.0, 131.2);
   ctx.bezierCurveTo(60.2, 139.4, 57.0, 135.8, 57.0, 135.8);
   ctx.bezierCurveTo(57.0, 135.8, 51.1, 135.3, 55.2, 127.6);
   ctx.bezierCurveTo(59.3, 119.9, 55.9, 124.0, 57.0, 118.5);
   ctx.bezierCurveTo(58.4, 111.7, 52.9, 111.2, 52.9, 111.2);
   ctx.bezierCurveTo(52.9, 111.2, 53.9, 116.2, 47.5, 116.7);
   ctx.bezierCurveTo(41.1, 117.1, 43.0, 114.0, 43.0, 114.0);
   ctx.bezierCurveTo(43.0, 114.0, 38.9, 121.7, 40.7, 123.0);
   ctx.bezierCurveTo(42.5, 124.4, 40.2, 130.8, 37.5, 130.3);
   ctx.bezierCurveTo(34.8, 129.9, 32.1, 133.0, 29.3, 128.5);
   ctx.bezierCurveTo(26.6, 124.0, 31.6, 122.6, 31.6, 122.6);
   ctx.bezierCurveTo(31.6, 122.6, 28.9, 110.3, 33.4, 107.6);
   ctx.bezierCurveTo(38.0, 104.9, 42.5, 99.9, 42.5, 99.9);
   ctx.bezierCurveTo(42.5, 99.9, 43.0, 95.4, 50.2, 96.7);
   ctx.bezierCurveTo(57.5, 98.1, 55.2, 101.7, 55.2, 101.7);
   ctx.bezierCurveTo(55.2, 101.7, 59.3, 98.1, 64.3, 103.5);
   ctx.bezierCurveTo(66.6, 106.1, 64.3, 96.7, 67.5, 96.7);
   ctx.bezierCurveTo(70.6, 96.7, 65.2, 93.1, 69.3, 91.7);
   ctx.bezierCurveTo(73.4, 90.4, 79.3, 92.6, 79.3, 92.6);
   ctx.bezierCurveTo(79.3, 92.6, 81.1, 83.1, 84.3, 85.4);
   ctx.bezierCurveTo(87.4, 87.6, 85.6, 91.3, 87.0, 92.6);
   ctx.bezierCurveTo(88.3, 94.0, 92.4, 91.7, 92.4, 91.7);
   ctx.lineTo(94.2, 88.6);
   ctx.bezierCurveTo(94.2, 88.6, 99.2, 91.3, 100.1, 89.0);
   ctx.bezierCurveTo(101.1, 86.7, 102.9, 85.4, 102.9, 85.4);
   ctx.lineTo(107.4, 84.9);
   ctx.bezierCurveTo(107.4, 84.9, 105.1, 81.3, 102.4, 82.7);
   ctx.bezierCurveTo(99.7, 84.0, 92.9, 83.6, 92.9, 83.6);
   ctx.bezierCurveTo(92.9, 83.6, 90.6, 78.6, 87.4, 78.1);
   ctx.bezierCurveTo(84.3, 77.7, 82.4, 79.9, 80.6, 82.2);
   ctx.bezierCurveTo(78.8, 84.5, 75.6, 86.3, 73.8, 85.8);
   ctx.bezierCurveTo(72.0, 85.4, 63.4, 86.7, 63.4, 86.7);
   ctx.bezierCurveTo(63.4, 86.7, 57.5, 91.3, 54.8, 89.0);
   ctx.bezierCurveTo(52.0, 86.7, 48.2, 88.9, 49.3, 83.6);
   ctx.bezierCurveTo(49.8, 81.3, 47.5, 77.7, 52.0, 75.8);
   ctx.bezierCurveTo(56.6, 74.0, 56.1, 75.8, 56.1, 75.8);
   ctx.bezierCurveTo(56.1, 75.8, 60.2, 69.9, 61.1, 72.2);
   ctx.bezierCurveTo(62.0, 74.5, 62.5, 78.6, 62.5, 78.6);
   ctx.bezierCurveTo(62.5, 78.6, 64.3, 81.3, 67.0, 79.5);
   ctx.bezierCurveTo(69.7, 77.7, 65.2, 75.8, 71.6, 74.5);
   ctx.bezierCurveTo(77.9, 73.1, 73.8, 74.9, 75.2, 73.6);
   ctx.bezierCurveTo(76.5, 72.2, 74.7, 69.9, 73.4, 69.9);
   ctx.bezierCurveTo(72.0, 69.9, 74.7, 64.5, 76.5, 64.5);
   ctx.bezierCurveTo(78.4, 64.5, 77.0, 60.4, 81.5, 60.4);
   ctx.bezierCurveTo(86.1, 60.4, 85.6, 53.6, 92.4, 55.4);
   ctx.bezierCurveTo(99.2, 57.2, 95.6, 56.8, 96.1, 60.9);
   ctx.bezierCurveTo(96.5, 65.0, 97.9, 62.2, 97.9, 62.2);
   ctx.bezierCurveTo(97.9, 62.2, 96.1, 55.9, 101.1, 58.6);
   ctx.bezierCurveTo(106.0, 61.3, 105.6, 58.6, 103.8, 56.8);
   ctx.bezierCurveTo(102.0, 55.0, 98.3, 47.3, 103.3, 45.9);
   ctx.bezierCurveTo(108.3, 44.5, 112.9, 48.2, 112.9, 48.2);
   ctx.bezierCurveTo(112.9, 48.2, 116.0, 44.5, 112.4, 43.2);
   ctx.bezierCurveTo(108.8, 41.8, 108.0, 38.6, 112.9, 37.3);
   ctx.bezierCurveTo(117.8, 35.9, 117.8, 35.9, 117.8, 39.5);
   ctx.bezierCurveTo(117.8, 46.6, 117.8, 32.7, 121.5, 33.2);
   ctx.bezierCurveTo(125.1, 33.6, 125.6, 36.4, 125.6, 36.4);
   ctx.bezierCurveTo(125.6, 36.4, 121.9, 34.5, 128.3, 30.5);
   ctx.bezierCurveTo(134.6, 26.4, 133.3, 30.5, 136.0, 29.6);
   ctx.bezierCurveTo(138.7, 28.6, 133.3, 23.7, 131.5, 25.0);
   ctx.bezierCurveTo(129.6, 26.4, 121.5, 22.7, 131.5, 17.8);
   ctx.bezierCurveTo(141.4, 12.8, 138.7, 16.8, 138.7, 16.8);
   ctx.bezierCurveTo(138.7, 16.8, 138.6, 8.5, 141.0, 9.1);
   ctx.bezierCurveTo(144.2, 10.0, 149.2, 7.8, 148.7, 11.4);
   ctx.bezierCurveTo(148.3, 15.0, 155.5, 6.9, 156.0, 8.7);
   ctx.bezierCurveTo(156.4, 10.5, 159.1, 7.8, 158.7, 10.5);
   ctx.bezierCurveTo(158.2, 13.2, 159.1, 15.0, 159.1, 15.0);
   ctx.bezierCurveTo(159.1, 15.0, 160.5, 15.5, 161.9, 13.2);
   ctx.bezierCurveTo(163.2, 10.9, 156.4, 5.5, 164.6, 4.6);
   ctx.bezierCurveTo(172.8, 3.7, 170.9, 4.6, 173.7, 5.0);
   ctx.bezierCurveTo(176.4, 5.5, 177.3, 4.6, 181.4, 5.5);
   ctx.bezierCurveTo(185.5, 6.4, 187.7, 7.8, 189.6, 5.0);
   ctx.bezierCurveTo(191.4, 2.3, 204.1, -1.8, 204.5, 3.7);
   ctx.bezierCurveTo(205.0, 9.1, 210.0, 5.5, 211.8, 5.0);
   ctx.bezierCurveTo(213.6, 4.6, 219.1, 0.5, 220.0, 5.5);
   ctx.bezierCurveTo(220.9, 10.5, 217.2, 10.0, 215.9, 10.0);
   ctx.bezierCurveTo(214.5, 10.0, 219.1, 11.4, 216.8, 13.2);
   ctx.bezierCurveTo(214.5, 15.0, 211.3, 14.1, 211.8, 16.8);
   ctx.bezierCurveTo(212.2, 19.6, 215.9, 18.7, 218.6, 17.8);
   ctx.bezierCurveTo(222.0, 16.6, 236.8, 13.2, 236.8, 13.2);
   ctx.bezierCurveTo(236.8, 13.2, 243.6, 13.2, 242.2, 17.8);
   ctx.bezierCurveTo(240.8, 22.3, 239.9, 26.4, 241.7, 26.4);
   ctx.bezierCurveTo(243.6, 26.4, 249.0, 25.9, 248.6, 27.7);
   ctx.bezierCurveTo(248.1, 29.6, 249.9, 32.7, 250.8, 33.6);
   ctx.bezierCurveTo(251.7, 34.5, 259.4, 34.5, 259.4, 36.4);
   ctx.bezierCurveTo(259.4, 38.2, 258.5, 42.3, 257.2, 42.3);
   ctx.bezierCurveTo(255.8, 42.3, 257.6, 43.2, 258.1, 45.4);
   ctx.bezierCurveTo(258.5, 47.7, 254.5, 50.9, 254.9, 54.5);
   ctx.bezierCurveTo(255.4, 58.1, 259.0, 58.6, 260.4, 57.2);
   ctx.bezierCurveTo(261.7, 55.9, 264.0, 50.0, 267.2, 55.0);
   ctx.bezierCurveTo(270.3, 60.0, 269.4, 64.0, 267.2, 66.3);
   ctx.bezierCurveTo(264.9, 68.6, 268.1, 73.6, 268.1, 73.6);
   ctx.bezierCurveTo(268.1, 73.6, 271.2, 72.2, 271.2, 75.4);
   ctx.bezierCurveTo(275.8, 76.3, 275.8, 78.1, 275.8, 81.3);
   ctx.bezierCurveTo(275.8, 81.3, 272.2, 84.9, 269.0, 84.9);
   ctx.bezierCurveTo(265.8, 84.9, 269.0, 89.0, 266.7, 89.5);
   ctx.bezierCurveTo(264.4, 89.9, 262.6, 87.6, 260.8, 88.1);
   ctx.bezierCurveTo(259.0, 88.6, 261.7, 89.9, 259.0, 90.4);
   ctx.bezierCurveTo(256.3, 90.8, 253.1, 92.2, 254.5, 94.9);
   ctx.bezierCurveTo(255.8, 97.6, 258.5, 94.0, 256.7, 93.5);
   ctx.bezierCurveTo(254.9, 93.1, 261.3, 92.2, 260.8, 98.1);
   ctx.bezierCurveTo(262.6, 99.0, 272.2, 82.7, 284.9, 84.9);
   ctx.bezierCurveTo(291.6, 86.1, 295.8, 84.5, 295.3, 85.4);
   ctx.bezierCurveTo(294.8, 86.3, 301.2, 80.8, 306.2, 85.4);
   ctx.bezierCurveTo(308.5, 86.7, 313.0, 79.9, 316.6, 79.5);
   ctx.bezierCurveTo(320.1, 79.0, 323.4, 81.3, 323.4, 81.3);
   ctx.bezierCurveTo(323.4, 81.3, 322.5, 79.5, 322.5, 75.8);
   ctx.bezierCurveTo(322.5, 73.2, 332.1, 74.9, 335.2, 74.9);
   ctx.bezierCurveTo(338.4, 74.9, 334.3, 78.1, 336.1, 78.6);
   ctx.bezierCurveTo(338.0, 79.0, 342.0, 82.7, 338.4, 83.6);
   ctx.bezierCurveTo(334.8, 84.5, 331.2, 83.1, 331.2, 85.8);
   ctx.bezierCurveTo(331.2, 88.6, 335.7, 87.2, 335.7, 87.2);
   ctx.bezierCurveTo(335.7, 87.2, 337.5, 91.3, 334.3, 94.0);
   ctx.bezierCurveTo(332.2, 95.8, 341.1, 89.9, 343.0, 94.5);
   ctx.bezierCurveTo(344.8, 99.0, 340.7, 96.7, 340.7, 99.0);
   ctx.bezierCurveTo(340.7, 101.3, 348.4, 100.4, 348.4, 102.2);
   ctx.bezierCurveTo(348.4, 104.0, 349.8, 105.8, 347.5, 107.6);
   ctx.bezierCurveTo(345.2, 109.4, 355.2, 106.3, 350.2, 113.1);
   ctx.bezierCurveTo(354.8, 112.2, 350.7, 108.1, 356.1, 110.8);
   ctx.bezierCurveTo(361.6, 113.5, 362.0, 117.6, 360.2, 119.0);
   ctx.bezierCurveTo(358.4, 120.3, 367.5, 117.1, 373.4, 122.6);
   ctx.bezierCurveTo(379.3, 128.0, 382.4, 137.1, 376.1, 138.5);
   ctx.bezierCurveTo(374.3, 139.8, 372.9, 134.4, 371.5, 137.1);
   ctx.bezierCurveTo(370.2, 139.8, 364.7, 140.3, 367.9, 143.0);
   ctx.bezierCurveTo(372.5, 147.0, 376.1, 142.1, 378.4, 145.7);
   ctx.bezierCurveTo(380.6, 149.4, 379.7, 147.6, 379.7, 149.8);
   ctx.bezierCurveTo(379.7, 152.1, 381.6, 151.1, 383.8, 151.6);
   ctx.bezierCurveTo(385.6, 152.1, 399.7, 148.5, 397.9, 154.8);
   ctx.bezierCurveTo(396.1, 161.2, 400.1, 156.6, 399.7, 158.0);
   ctx.bezierCurveTo(398.3, 159.8, 406.5, 159.8, 400.6, 165.3);
   ctx.bezierCurveTo(397.5, 168.1, 406.5, 164.3, 407.4, 168.4);
   ctx.bezierCurveTo(408.3, 172.5, 407.4, 175.2, 400.6, 176.1);
   ctx.bezierCurveTo(400.1, 178.0, 402.9, 182.0, 401.0, 184.3);
   ctx.bezierCurveTo(401.0, 184.3, 399.7, 188.9, 399.7, 194.3);
   ctx.bezierCurveTo(399.7, 199.7, 388.8, 200.2, 386.1, 199.3);
   ctx.bezierCurveTo(386.1, 199.3, 382.9, 207.9, 377.4, 211.1);
   ctx.bezierCurveTo(372.0, 214.3, 362.0, 211.5, 359.3, 215.6);
   ctx.bezierCurveTo(356.6, 219.7, 357.9, 222.0, 358.8, 227.9);
   ctx.bezierCurveTo(359.7, 233.8, 355.2, 233.3, 352.9, 233.8);
   ctx.bezierCurveTo(350.7, 234.2, 352.9, 245.6, 351.6, 244.7);
   ctx.bezierCurveTo(347.0, 247.9, 347.0, 245.1, 342.0, 247.4);
   ctx.bezierCurveTo(337.1, 249.7, 334.3, 259.2, 333.4, 263.7);
   ctx.bezierCurveTo(333.9, 266.9, 338.4, 268.3, 332.1, 270.1);
   ctx.bezierCurveTo(325.7, 271.9, 323.9, 263.3, 318.9, 272.4);
   ctx.bezierCurveTo(317.0, 275.8, 310.7, 271.0, 309.4, 266.9);
   ctx.bezierCurveTo(308.0, 262.8, 312.5, 254.7, 308.9, 255.1);
   ctx.bezierCurveTo(308.9, 255.1, 308.9, 257.8, 306.6, 259.2);
   ctx.bezierCurveTo(304.4, 260.6, 304.8, 263.7, 301.7, 262.4);
   ctx.bezierCurveTo(298.5, 261.0, 300.7, 255.6, 299.4, 256.0);
   ctx.bezierCurveTo(298.0, 256.5, 296.2, 256.0, 296.2, 256.0);
   ctx.bezierCurveTo(296.2, 256.0, 292.6, 251.5, 294.8, 251.5);
   ctx.bezierCurveTo(297.1, 248.8, 294.8, 243.3, 293.0, 244.7);
   ctx.bezierCurveTo(291.2, 246.0, 284.9, 248.3, 284.4, 243.8);
   ctx.bezierCurveTo(284.0, 239.2, 280.3, 238.8, 280.3, 238.8);
   ctx.bezierCurveTo(280.3, 238.8, 269.4, 237.0, 268.5, 232.9);
   ctx.bezierCurveTo(267.6, 228.8, 262.6, 231.5, 262.6, 231.5);
   ctx.bezierCurveTo(262.6, 231.5, 258.5, 230.6, 258.5, 227.9);
   ctx.bezierCurveTo(258.5, 225.2, 255.4, 222.4, 253.5, 224.3);
   ctx.bezierCurveTo(251.7, 226.1, 250.8, 224.7, 249.5, 222.4);
   ctx.bezierCurveTo(248.1, 220.2, 244.9, 222.4, 244.9, 222.4);
   ctx.lineTo(242.7, 221.1);
   ctx.bezierCurveTo(242.7, 221.1, 241.3, 220.6, 239.0, 221.1);
   ctx.bezierCurveTo(236.8, 221.5, 233.6, 222.9, 232.2, 220.2);
   ctx.bezierCurveTo(230.9, 217.4, 230.4, 227.9, 223.1, 226.5);
   ctx.bezierCurveTo(220.9, 228.3, 217.7, 233.8, 216.3, 238.3);
   ctx.bezierCurveTo(215.0, 242.9, 215.9, 256.9, 217.2, 266.9);
   ctx.bezierCurveTo(218.6, 276.9, 224.5, 294.6, 225.4, 298.7);
   ctx.bezierCurveTo(226.3, 302.8, 227.3, 312.8, 233.7, 312.5);
   ctx.fillStyle = "rgb(233, 234, 238)";
   addShadow(ctx);
   ctx.fill();
   ctx.lineWidth = 2.0;
   ctx.strokeStyle = "rgb(255, 255, 255)";
   ctx.lineJoin = "miter";
   ctx.miterLimit = 4.0;
   removeShadow(ctx);
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(199.1, 169.8);
   ctx.bezierCurveTo(199.1, 169.8, 191.8, 177.5, 193.2, 183.9);
   ctx.bezierCurveTo(194.5, 190.2, 193.6, 195.7, 194.1, 198.4);
   ctx.bezierCurveTo(194.5, 201.1, 192.7, 211.5, 194.1, 214.7);
   ctx.bezierCurveTo(195.5, 217.9, 204.1, 229.8, 204.5, 232.4);
   ctx.bezierCurveTo(209.1, 229.7, 205.9, 227.9, 210.0, 223.8);
   ctx.bezierCurveTo(214.1, 219.7, 210.8, 218.6, 208.2, 213.8);
   ctx.bezierCurveTo(205.4, 208.8, 214.1, 205.2, 214.1, 198.8);
   ctx.bezierCurveTo(214.1, 196.2, 213.6, 185.7, 210.0, 185.7);
   ctx.bezierCurveTo(206.3, 185.7, 200.4, 176.1, 200.4, 174.8);
   ctx.bezierCurveTo(200.4, 173.4, 199.1, 169.8, 199.1, 169.8);
   ctx.closePath();
   ctx.fillStyle = "rgb(61, 61, 61)";
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(216.3, 178.4);
   ctx.bezierCurveTo(216.3, 178.4, 201.8, 168.8, 205.9, 155.7);
   ctx.bezierCurveTo(208.2, 148.5, 218.7, 147.4, 220.0, 148.0);
   ctx.bezierCurveTo(222.7, 149.4, 226.3, 154.4, 229.5, 154.8);
   ctx.bezierCurveTo(232.7, 155.3, 237.0, 155.8, 236.3, 159.4);
   ctx.bezierCurveTo(235.4, 164.3, 234.5, 171.2, 227.7, 172.5);
   ctx.bezierCurveTo(220.9, 173.9, 225.4, 172.5, 220.9, 173.9);
   ctx.bezierCurveTo(216.3, 175.2, 216.3, 178.4, 216.3, 178.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(244.0, 184.3);
   ctx.bezierCurveTo(244.0, 184.3, 244.0, 179.3, 253.1, 178.4);
   ctx.bezierCurveTo(262.2, 177.5, 257.2, 177.5, 256.7, 173.9);
   ctx.bezierCurveTo(256.3, 170.2, 260.8, 173.4, 262.2, 175.7);
   ctx.bezierCurveTo(263.5, 178.0, 264.0, 176.1, 269.4, 175.7);
   ctx.bezierCurveTo(274.9, 175.2, 276.2, 176.1, 281.2, 182.0);
   ctx.bezierCurveTo(286.2, 187.9, 288.5, 186.1, 283.0, 195.7);
   ctx.bezierCurveTo(277.6, 205.2, 272.2, 192.0, 272.2, 189.8);
   ctx.bezierCurveTo(272.2, 187.5, 264.4, 192.9, 262.6, 195.2);
   ctx.bezierCurveTo(260.8, 197.5, 255.4, 199.3, 255.4, 197.0);
   ctx.bezierCurveTo(255.4, 194.8, 258.1, 187.9, 255.8, 186.6);
   ctx.bezierCurveTo(253.5, 185.2, 248.6, 190.7, 246.3, 188.9);
   ctx.bezierCurveTo(244.0, 187.0, 244.0, 184.3, 244.0, 184.3);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(267.2, 221.1);
   ctx.bezierCurveTo(267.2, 221.1, 264.9, 222.9, 268.1, 225.2);
   ctx.bezierCurveTo(271.2, 227.4, 270.3, 221.5, 267.2, 221.1);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(275.8, 229.2);
   ctx.bezierCurveTo(275.8, 229.2, 271.7, 232.4, 275.8, 233.8);
   ctx.bezierCurveTo(279.9, 235.1, 279.0, 230.2, 275.8, 229.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(302.6, 222.0);
   ctx.bezierCurveTo(302.6, 222.0, 296.7, 227.0, 301.7, 227.9);
   ctx.bezierCurveTo(306.6, 228.8, 306.2, 223.3, 302.6, 222.0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(274.4, 216.5);
   ctx.bezierCurveTo(274.4, 216.5, 273.5, 224.7, 278.5, 222.9);
   ctx.bezierCurveTo(283.5, 221.1, 275.8, 216.1, 274.4, 216.5);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(283.5, 208.4);
   ctx.bezierCurveTo(283.5, 208.4, 278.5, 211.1, 284.0, 213.4);
   ctx.bezierCurveTo(289.4, 215.6, 286.2, 208.4, 283.5, 208.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(299.4, 191.1);
   ctx.bezierCurveTo(299.4, 191.1, 293.0, 196.1, 292.6, 199.7);
   ctx.bezierCurveTo(292.1, 203.4, 292.6, 206.1, 296.2, 209.7);
   ctx.bezierCurveTo(299.8, 213.4, 302.1, 204.7, 301.2, 203.4);
   ctx.bezierCurveTo(300.3, 202.0, 300.7, 191.1, 299.4, 191.1);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(322.5, 194.8);
   ctx.bezierCurveTo(322.5, 194.8, 328.4, 192.9, 329.3, 191.6);
   ctx.bezierCurveTo(330.2, 190.2, 328.0, 185.7, 331.6, 186.1);
   ctx.bezierCurveTo(335.2, 186.6, 335.2, 189.8, 335.2, 189.8);
   ctx.bezierCurveTo(335.2, 189.8, 343.0, 188.9, 343.0, 190.2);
   ctx.bezierCurveTo(343.0, 191.6, 343.4, 198.8, 340.7, 197.5);
   ctx.bezierCurveTo(338.0, 196.1, 334.3, 196.1, 333.4, 193.4);
   ctx.bezierCurveTo(332.5, 190.7, 327.1, 200.7, 322.5, 194.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(338.0, 205.6);
   ctx.bezierCurveTo(338.0, 205.6, 330.2, 208.4, 332.1, 212.9);
   ctx.bezierCurveTo(333.9, 217.4, 338.9, 208.4, 338.0, 205.6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(349.3, 184.3);
   ctx.bezierCurveTo(349.3, 184.3, 342.5, 184.3, 342.5, 186.1);
   ctx.bezierCurveTo(342.5, 187.9, 349.8, 189.8, 351.1, 187.9);
   ctx.bezierCurveTo(352.5, 186.1, 349.3, 184.3, 349.3, 184.3);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(357.0, 181.1);
   ctx.bezierCurveTo(357.0, 181.1, 353.8, 182.0, 354.8, 183.9);
   ctx.bezierCurveTo(355.7, 185.7, 359.3, 184.8, 359.3, 184.8);
   ctx.lineTo(364.3, 187.5);
   ctx.bezierCurveTo(364.3, 187.5, 370.6, 183.4, 357.0, 181.1);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(387.4, 174.8);
   ctx.bezierCurveTo(387.4, 174.8, 382.0, 174.3, 384.7, 178.9);
   ctx.bezierCurveTo(387.4, 183.4, 387.4, 174.8, 387.4, 174.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(343.0, 113.5);
   ctx.bezierCurveTo(343.0, 113.5, 336.1, 114.9, 339.8, 118.1);
   ctx.bezierCurveTo(343.4, 121.2, 343.0, 113.5, 343.0, 113.5);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(351.1, 129.4);
   ctx.bezierCurveTo(351.1, 129.4, 348.4, 117.6, 358.4, 124.9);
   ctx.bezierCurveTo(352.5, 123.0, 350.7, 128.5, 351.1, 129.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(331.2, 126.2);
   ctx.bezierCurveTo(331.2, 126.2, 323.9, 133.0, 320.7, 132.1);
   ctx.bezierCurveTo(317.5, 131.2, 317.1, 138.0, 325.3, 138.5);
   ctx.bezierCurveTo(333.4, 138.9, 322.5, 139.8, 338.9, 138.5);
   ctx.bezierCurveTo(344.3, 138.0, 338.0, 133.0, 336.1, 133.0);
   ctx.bezierCurveTo(334.3, 133.0, 334.8, 128.0, 331.2, 126.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(328.0, 86.7);
   ctx.bezierCurveTo(328.0, 86.7, 320.2, 85.0, 323.4, 89.9);
   ctx.bezierCurveTo(324.3, 91.3, 332.1, 89.0, 328.0, 86.7);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(317.1, 91.7);
   ctx.bezierCurveTo(317.1, 91.7, 311.7, 89.2, 314.8, 95.4);
   ctx.bezierCurveTo(315.3, 96.3, 320.3, 93.5, 317.1, 91.7);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(284.9, 110.8);
   ctx.bezierCurveTo(286.7, 109.0, 293.0, 111.2, 291.7, 117.6);
   ctx.bezierCurveTo(290.3, 124.0, 284.4, 118.1, 287.6, 125.3);
   ctx.bezierCurveTo(290.8, 132.6, 286.2, 134.8, 286.2, 134.8);
   ctx.lineTo(279.4, 128.5);
   ctx.bezierCurveTo(279.4, 128.5, 272.6, 128.0, 275.8, 123.0);
   ctx.bezierCurveTo(278.0, 119.5, 282.1, 119.4, 282.1, 119.4);
   ctx.bezierCurveTo(282.1, 119.4, 283.0, 112.6, 284.9, 110.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(286.7, 161.2);
   ctx.bezierCurveTo(286.7, 161.2, 282.6, 168.4, 280.8, 167.1);
   ctx.bezierCurveTo(279.0, 165.7, 270.8, 166.2, 269.9, 168.0);
   ctx.bezierCurveTo(269.0, 169.8, 265.3, 174.3, 276.2, 171.6);
   ctx.bezierCurveTo(287.1, 168.9, 285.3, 174.8, 285.3, 174.8);
   ctx.bezierCurveTo(285.3, 174.8, 293.5, 175.2, 291.2, 170.2);
   ctx.bezierCurveTo(288.9, 165.3, 286.7, 161.2, 286.7, 161.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(298.5, 151.6);
   ctx.bezierCurveTo(298.5, 151.6, 294.0, 146.2, 290.8, 153.9);
   ctx.bezierCurveTo(289.4, 157.1, 302.6, 152.5, 298.5, 151.6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(253.1, 165.7);
   ctx.bezierCurveTo(253.1, 165.7, 255.8, 160.7, 267.2, 153.5);
   ctx.bezierCurveTo(264.0, 151.6, 263.1, 148.5, 269.0, 145.3);
   ctx.bezierCurveTo(274.9, 142.1, 279.9, 140.3, 280.8, 142.6);
   ctx.bezierCurveTo(281.7, 144.8, 286.7, 143.9, 271.7, 148.5);
   ctx.bezierCurveTo(269.4, 151.2, 272.2, 152.1, 274.0, 152.1);
   ctx.bezierCurveTo(275.8, 152.1, 278.5, 155.7, 274.9, 157.5);
   ctx.bezierCurveTo(271.2, 159.4, 256.7, 168.9, 253.1, 165.7);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(293.5, 143.5);
   ctx.bezierCurveTo(293.5, 143.5, 290.8, 144.4, 291.2, 147.1);
   ctx.bezierCurveTo(291.7, 149.8, 295.8, 144.4, 293.5, 143.5);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(324.8, 183.0);
   ctx.bezierCurveTo(324.8, 183.0, 319.8, 183.9, 319.8, 186.1);
   ctx.bezierCurveTo(319.8, 188.4, 327.1, 185.7, 324.8, 183.0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(244.0, 135.3);
   ctx.bezierCurveTo(244.0, 135.3, 229.6, 140.7, 232.7, 149.4);
   ctx.bezierCurveTo(235.4, 157.1, 246.3, 146.6, 246.3, 145.3);
   ctx.bezierCurveTo(246.3, 143.9, 239.0, 144.4, 239.0, 144.4);
   ctx.bezierCurveTo(239.0, 144.4, 248.1, 137.1, 244.0, 135.3);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(266.3, 118.1);
   ctx.bezierCurveTo(266.3, 118.1, 261.3, 125.8, 259.9, 127.6);
   ctx.bezierCurveTo(258.5, 129.4, 266.3, 128.5, 266.3, 124.0);
   ctx.bezierCurveTo(270.3, 124.0, 272.6, 118.5, 266.3, 118.1);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(270.8, 103.1);
   ctx.bezierCurveTo(270.8, 103.1, 266.3, 103.5, 268.5, 106.7);
   ctx.bezierCurveTo(270.8, 109.9, 274.0, 105.3, 270.8, 103.1);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(258.1, 99.0);
   ctx.bezierCurveTo(258.1, 99.0, 252.6, 100.4, 252.6, 104.9);
   ctx.bezierCurveTo(252.6, 109.4, 261.3, 101.7, 258.1, 99.0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(228.1, 111.7);
   ctx.bezierCurveTo(228.1, 111.7, 223.6, 124.4, 229.5, 124.4);
   ctx.bezierCurveTo(235.4, 124.4, 239.0, 119.4, 239.0, 119.4);
   ctx.bezierCurveTo(239.0, 119.4, 247.6, 123.0, 246.3, 113.1);
   ctx.bezierCurveTo(236.8, 114.4, 229.5, 113.5, 228.1, 111.7);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(234.5, 77.2);
   ctx.bezierCurveTo(236.8, 75.4, 240.4, 76.8, 241.7, 79.5);
   ctx.bezierCurveTo(243.1, 82.2, 250.8, 73.1, 250.4, 80.4);
   ctx.bezierCurveTo(249.9, 87.6, 245.8, 80.8, 245.4, 83.6);
   ctx.bezierCurveTo(244.9, 86.3, 244.9, 89.0, 242.2, 87.2);
   ctx.bezierCurveTo(235.6, 82.8, 232.2, 79.0, 234.5, 77.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(239.9, 52.2);
   ctx.bezierCurveTo(239.9, 52.2, 234.5, 52.7, 237.2, 56.3);
   ctx.bezierCurveTo(239.9, 60.0, 244.0, 54.5, 239.9, 52.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(222.7, 67.7);
   ctx.bezierCurveTo(222.7, 67.7, 217.2, 69.9, 222.7, 71.8);
   ctx.bezierCurveTo(228.1, 73.6, 225.4, 68.1, 222.7, 67.7);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(244.0, 96.7);
   ctx.bezierCurveTo(244.0, 96.7, 238.1, 96.7, 241.3, 100.4);
   ctx.bezierCurveTo(244.5, 104.0, 249.0, 99.4, 244.0, 96.7);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(239.5, 90.8);
   ctx.bezierCurveTo(239.5, 90.8, 235.8, 93.1, 237.2, 94.9);
   ctx.bezierCurveTo(238.6, 96.7, 243.1, 92.2, 239.5, 90.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(212.2, 119.4);
   ctx.bezierCurveTo(212.2, 119.4, 209.1, 129.9, 215.9, 130.3);
   ctx.bezierCurveTo(222.7, 130.8, 214.1, 119.9, 212.2, 119.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(207.7, 102.6);
   ctx.bezierCurveTo(207.7, 102.6, 199.5, 109.4, 201.4, 113.1);
   ctx.bezierCurveTo(203.2, 116.7, 210.0, 113.5, 212.2, 111.7);
   ctx.bezierCurveTo(214.5, 109.9, 222.2, 114.4, 221.8, 109.0);
   ctx.bezierCurveTo(221.3, 103.5, 217.2, 103.1, 213.2, 105.8);
   ctx.bezierCurveTo(210.0, 104.4, 212.7, 100.4, 207.7, 102.6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(192.7, 146.6);
   ctx.bezierCurveTo(190.9, 143.5, 187.7, 138.9, 191.4, 136.7);
   ctx.bezierCurveTo(195.0, 134.4, 192.3, 125.3, 197.3, 125.8);
   ctx.bezierCurveTo(202.3, 126.2, 201.4, 131.2, 201.4, 131.2);
   ctx.bezierCurveTo(201.4, 131.2, 210.4, 127.1, 209.5, 132.1);
   ctx.bezierCurveTo(208.6, 137.1, 198.6, 156.6, 192.7, 146.6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(221.3, 130.8);
   ctx.bezierCurveTo(221.3, 130.8, 214.5, 134.4, 220.0, 135.3);
   ctx.bezierCurveTo(225.4, 136.2, 224.5, 130.8, 221.3, 130.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(199.1, 76.8);
   ctx.bezierCurveTo(195.5, 79.9, 196.8, 81.7, 195.9, 82.2);
   ctx.bezierCurveTo(195.0, 87.2, 192.7, 90.4, 196.8, 91.7);
   ctx.bezierCurveTo(200.9, 93.1, 202.3, 95.4, 204.1, 85.4);
   ctx.bezierCurveTo(205.9, 75.4, 212.2, 81.7, 212.7, 81.7);
   ctx.bezierCurveTo(213.2, 81.7, 222.2, 88.6, 227.2, 82.7);
   ctx.bezierCurveTo(232.2, 76.8, 218.1, 79.0, 218.1, 79.0);
   ctx.lineTo(212.7, 69.9);
   ctx.bezierCurveTo(212.7, 69.9, 209.5, 75.8, 206.8, 73.6);
   ctx.bezierCurveTo(204.1, 71.3, 204.1, 67.2, 202.3, 69.0);
   ctx.bezierCurveTo(200.4, 70.9, 202.7, 73.6, 199.1, 76.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(181.4, 183.0);
   ctx.bezierCurveTo(181.4, 183.0, 178.2, 176.6, 180.9, 172.5);
   ctx.bezierCurveTo(183.7, 168.4, 180.0, 168.9, 190.0, 162.5);
   ctx.bezierCurveTo(199.9, 156.2, 190.0, 153.0, 187.3, 151.6);
   ctx.bezierCurveTo(184.6, 150.3, 182.7, 153.0, 177.3, 143.9);
   ctx.bezierCurveTo(177.3, 143.9, 174.1, 145.3, 168.7, 146.2);
   ctx.bezierCurveTo(163.2, 147.1, 165.4, 137.9, 158.7, 136.7);
   ctx.bezierCurveTo(149.2, 134.8, 149.6, 133.0, 149.6, 133.0);
   ctx.lineTo(146.4, 125.8);
   ctx.bezierCurveTo(146.4, 125.8, 146.0, 116.6, 142.4, 118.1);
   ctx.bezierCurveTo(135.5, 120.8, 143.7, 135.3, 143.7, 137.1);
   ctx.bezierCurveTo(143.7, 138.9, 143.3, 148.5, 143.7, 150.7);
   ctx.bezierCurveTo(144.2, 153.0, 144.6, 155.3, 152.8, 158.0);
   ctx.bezierCurveTo(161.0, 160.7, 165.0, 165.7, 165.5, 170.7);
   ctx.bezierCurveTo(166.0, 175.7, 176.8, 183.9, 181.4, 183.0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(162.8, 109.0);
   ctx.bezierCurveTo(162.8, 109.0, 170.9, 120.8, 174.6, 119.4);
   ctx.bezierCurveTo(178.2, 118.1, 173.2, 135.3, 173.2, 135.3);
   ctx.bezierCurveTo(173.2, 135.3, 173.2, 142.6, 161.0, 129.4);
   ctx.bezierCurveTo(162.8, 114.0, 162.8, 109.0, 162.8, 109.0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(187.3, 119.0);
   ctx.bezierCurveTo(187.3, 119.0, 180.0, 123.0, 179.6, 126.2);
   ctx.bezierCurveTo(179.1, 129.4, 180.5, 138.9, 183.2, 138.5);
   ctx.bezierCurveTo(185.9, 138.0, 187.7, 127.1, 189.1, 126.2);
   ctx.bezierCurveTo(190.5, 125.3, 190.0, 119.9, 187.3, 119.0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(185.9, 100.4);
   ctx.bezierCurveTo(185.9, 100.4, 180.5, 106.3, 187.3, 107.2);
   ctx.bezierCurveTo(194.1, 108.1, 188.6, 101.7, 185.9, 100.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(186.4, 82.7);
   ctx.bezierCurveTo(184.1, 75.8, 184.1, 68.6, 182.7, 65.4);
   ctx.bezierCurveTo(181.3, 62.0, 182.7, 54.1, 184.6, 56.3);
   ctx.bezierCurveTo(186.4, 58.6, 189.6, 65.0, 189.6, 67.2);
   ctx.bezierCurveTo(189.6, 69.5, 191.8, 69.5, 193.2, 66.3);
   ctx.bezierCurveTo(194.5, 63.1, 197.7, 55.9, 198.6, 57.7);
   ctx.bezierCurveTo(199.5, 59.5, 201.8, 62.2, 197.7, 66.3);
   ctx.bezierCurveTo(193.6, 70.4, 190.5, 77.7, 186.4, 82.7);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(160.1, 92.2);
   ctx.bezierCurveTo(157.8, 89.0, 161.0, 79.9, 164.1, 83.1);
   ctx.bezierCurveTo(167.3, 86.3, 168.7, 84.9, 170.0, 83.6);
   ctx.bezierCurveTo(171.4, 82.2, 170.0, 73.6, 170.0, 73.6);
   ctx.bezierCurveTo(170.0, 73.6, 170.0, 67.7, 175.5, 71.3);
   ctx.bezierCurveTo(180.9, 74.9, 175.0, 85.4, 175.0, 85.4);
   ctx.bezierCurveTo(175.0, 85.4, 176.4, 79.5, 184.6, 87.2);
   ctx.bezierCurveTo(192.7, 94.9, 189.1, 94.9, 189.1, 94.9);
   ctx.bezierCurveTo(189.1, 94.9, 182.3, 96.7, 178.2, 93.1);
   ctx.bezierCurveTo(174.1, 89.5, 176.8, 99.9, 176.8, 99.9);
   ctx.bezierCurveTo(176.8, 99.9, 173.7, 106.7, 168.7, 101.7);
   ctx.bezierCurveTo(163.7, 96.7, 162.3, 95.4, 160.1, 92.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(154.2, 127.6);
   ctx.bezierCurveTo(154.2, 127.6, 158.7, 128.5, 157.3, 115.3);
   ctx.bezierCurveTo(156.3, 105.6, 149.6, 112.6, 150.1, 116.2);
   ctx.bezierCurveTo(150.2, 117.6, 153.7, 119.4, 153.2, 121.7);
   ctx.bezierCurveTo(152.8, 124.0, 156.0, 124.9, 154.2, 127.6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(149.2, 210.2);
   ctx.bezierCurveTo(149.2, 207.0, 146.0, 201.1, 143.7, 196.1);
   ctx.bezierCurveTo(141.4, 191.1, 130.6, 182.8, 129.2, 185.7);
   ctx.bezierCurveTo(126.5, 191.1, 110.1, 187.9, 109.2, 189.3);
   ctx.bezierCurveTo(108.3, 190.7, 99.2, 200.7, 97.0, 198.8);
   ctx.bezierCurveTo(94.7, 197.0, 92.4, 199.3, 91.1, 200.7);
   ctx.bezierCurveTo(89.7, 202.0, 85.2, 202.9, 90.2, 204.3);
   ctx.bezierCurveTo(95.2, 205.6, 99.2, 203.8, 98.8, 206.6);
   ctx.bezierCurveTo(98.3, 209.3, 95.6, 213.8, 96.5, 216.1);
   ctx.bezierCurveTo(97.4, 218.4, 97.3, 220.2, 107.4, 217.0);
   ctx.bezierCurveTo(116.0, 214.3, 117.4, 214.3, 117.4, 217.0);
   ctx.bezierCurveTo(117.4, 219.7, 111.5, 224.3, 109.7, 221.5);
   ctx.bezierCurveTo(107.9, 218.8, 99.2, 227.9, 108.8, 227.0);
   ctx.bezierCurveTo(118.3, 226.1, 123.3, 220.2, 125.6, 218.8);
   ctx.bezierCurveTo(127.8, 217.4, 135.1, 212.5, 140.5, 216.1);
   ctx.bezierCurveTo(146.0, 219.7, 149.2, 213.4, 149.2, 210.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(51.1, 242.9);
   ctx.bezierCurveTo(51.1, 242.9, 48.4, 242.0, 48.4, 245.1);
   ctx.bezierCurveTo(48.4, 248.3, 47.0, 250.1, 48.0, 251.9);
   ctx.bezierCurveTo(48.9, 253.8, 52.0, 252.4, 52.0, 252.4);
   ctx.lineTo(52.0, 247.9);
   ctx.lineTo(56.1, 245.1);
   ctx.bezierCurveTo(56.1, 245.1, 53.4, 242.0, 51.1, 242.9);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(59.8, 229.2);
   ctx.bezierCurveTo(59.8, 229.2, 53.9, 233.3, 57.9, 234.2);
   ctx.bezierCurveTo(62.0, 235.1, 61.6, 232.0, 59.8, 229.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(80.2, 226.5);
   ctx.bezierCurveTo(80.2, 226.5, 79.6, 231.1, 85.6, 231.1);
   ctx.bezierCurveTo(86.1, 231.1, 83.4, 224.3, 80.2, 226.5);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(91.5, 207.9);
   ctx.bezierCurveTo(91.5, 207.9, 86.5, 207.0, 86.5, 211.1);
   ctx.bezierCurveTo(86.5, 215.2, 94.2, 212.5, 91.5, 207.9);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(66.6, 212.5);
   ctx.bezierCurveTo(66.6, 212.5, 62.0, 210.6, 63.4, 215.6);
   ctx.bezierCurveTo(64.7, 220.6, 71.6, 217.0, 66.6, 212.5);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(48.4, 202.0);
   ctx.bezierCurveTo(48.4, 202.0, 41.6, 195.2, 52.5, 196.1);
   ctx.bezierCurveTo(48.0, 198.8, 48.4, 202.0, 48.4, 202.0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(42.1, 198.8);
   ctx.bezierCurveTo(42.1, 198.8, 36.2, 198.4, 40.7, 202.5);
   ctx.bezierCurveTo(45.2, 206.6, 44.8, 201.1, 42.1, 198.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(173.2, 11.4);
   ctx.bezierCurveTo(173.2, 11.4, 169.1, 11.9, 170.5, 15.5);
   ctx.bezierCurveTo(171.9, 19.1, 176.4, 14.1, 173.2, 11.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(157.8, 45.9);
   ctx.bezierCurveTo(157.8, 45.9, 152.3, 54.1, 157.3, 55.0);
   ctx.bezierCurveTo(162.3, 55.9, 159.6, 52.2, 157.8, 45.9);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(151.9, 63.6);
   ctx.bezierCurveTo(151.9, 63.6, 146.9, 65.9, 150.5, 68.1);
   ctx.bezierCurveTo(154.2, 70.4, 154.2, 66.3, 151.9, 63.6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(165.0, 67.2);
   ctx.bezierCurveTo(165.0, 67.2, 160.5, 64.5, 158.7, 67.2);
   ctx.bezierCurveTo(156.9, 69.9, 163.2, 71.3, 165.0, 67.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(133.7, 61.3);
   ctx.bezierCurveTo(133.7, 61.3, 128.7, 66.3, 132.4, 68.1);
   ctx.bezierCurveTo(136.0, 69.9, 136.0, 62.7, 133.7, 61.3);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(122.8, 61.8);
   ctx.bezierCurveTo(122.8, 61.8, 117.8, 67.7, 123.7, 68.1);
   ctx.bezierCurveTo(129.6, 68.6, 125.1, 63.1, 122.8, 61.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(142.8, 67.2);
   ctx.bezierCurveTo(142.8, 67.2, 140.1, 72.2, 138.3, 71.3);
   ctx.bezierCurveTo(136.5, 70.4, 130.1, 71.8, 130.1, 71.8);
   ctx.bezierCurveTo(130.1, 71.8, 121.5, 83.6, 127.8, 84.5);
   ctx.bezierCurveTo(134.2, 85.4, 140.5, 77.7, 141.0, 79.5);
   ctx.bezierCurveTo(141.4, 81.3, 137.4, 85.8, 140.5, 90.4);
   ctx.bezierCurveTo(143.7, 94.9, 151.4, 79.0, 149.6, 77.2);
   ctx.bezierCurveTo(147.8, 75.4, 144.2, 78.1, 143.3, 76.8);
   ctx.bezierCurveTo(142.4, 75.4, 145.1, 69.9, 142.8, 67.2);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(115.6, 65.4);
   ctx.bezierCurveTo(115.6, 65.4, 110.6, 67.2, 116.5, 69.9);
   ctx.bezierCurveTo(122.4, 72.7, 118.8, 66.8, 115.6, 65.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(149.6, 102.6);
   ctx.bezierCurveTo(149.6, 102.6, 154.2, 108.5, 158.2, 105.3);
   ctx.bezierCurveTo(160.3, 103.8, 152.3, 99.0, 149.6, 102.6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(128.7, 104.4);
   ctx.bezierCurveTo(128.7, 104.4, 124.2, 109.0, 130.1, 111.7);
   ctx.bezierCurveTo(136.0, 114.4, 134.6, 103.1, 128.7, 104.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(125.6, 127.1);
   ctx.bezierCurveTo(125.6, 127.1, 123.7, 133.9, 136.5, 149.4);
   ctx.bezierCurveTo(140.1, 153.9, 139.2, 133.5, 136.0, 135.3);
   ctx.bezierCurveTo(132.8, 137.1, 132.4, 134.4, 132.4, 134.4);
   ctx.bezierCurveTo(132.4, 134.4, 130.6, 125.3, 125.6, 127.1);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(78.4, 122.6);
   ctx.bezierCurveTo(78.4, 122.6, 87.0, 121.7, 87.4, 123.0);
   ctx.bezierCurveTo(87.9, 124.4, 94.7, 125.3, 97.4, 122.6);
   ctx.bezierCurveTo(100.1, 119.9, 92.4, 123.0, 92.9, 117.1);
   ctx.bezierCurveTo(93.3, 111.2, 86.5, 113.1, 84.7, 115.8);
   ctx.bezierCurveTo(82.9, 118.5, 77.0, 119.0, 78.4, 122.6);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(112.4, 139.4);
   ctx.bezierCurveTo(112.4, 139.4, 119.7, 138.5, 120.6, 138.0);
   ctx.bezierCurveTo(121.5, 137.6, 126.5, 148.5, 124.7, 149.4);
   ctx.bezierCurveTo(122.8, 150.3, 118.3, 153.9, 116.9, 148.5);
   ctx.bezierCurveTo(115.6, 143.0, 115.1, 139.4, 112.4, 139.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(115.1, 123.0);
   ctx.bezierCurveTo(115.1, 123.0, 110.1, 126.2, 112.4, 128.9);
   ctx.bezierCurveTo(114.3, 131.2, 119.2, 126.2, 115.1, 123.0);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(72.9, 95.8);
   ctx.bezierCurveTo(72.9, 95.8, 67.5, 99.9, 72.9, 102.6);
   ctx.bezierCurveTo(78.4, 105.3, 75.6, 95.8, 72.9, 95.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(68.4, 118.5);
   ctx.bezierCurveTo(68.4, 118.5, 62.5, 119.9, 67.0, 122.6);
   ctx.bezierCurveTo(71.6, 125.3, 71.6, 120.3, 68.4, 118.5);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(95.6, 95.8);
   ctx.bezierCurveTo(95.6, 95.8, 85.6, 98.3, 92.9, 102.6);
   ctx.bezierCurveTo(95.2, 104.0, 98.8, 97.2, 95.6, 95.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(81.1, 66.8);
   ctx.bezierCurveTo(81.1, 66.8, 77.5, 66.3, 80.6, 69.5);
   ctx.bezierCurveTo(83.8, 72.7, 85.2, 68.6, 81.1, 66.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(76.5, 75.4);
   ctx.bezierCurveTo(76.5, 75.4, 73.4, 77.7, 75.6, 79.5);
   ctx.bezierCurveTo(77.9, 81.3, 80.2, 77.7, 76.5, 75.4);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(58.8, 75.8);
   ctx.bezierCurveTo(58.8, 75.8, 54.8, 78.1, 57.5, 79.5);
   ctx.bezierCurveTo(60.2, 80.8, 62.0, 76.3, 58.8, 75.8);
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
   
   // layer1/Path
   ctx.beginPath();
   ctx.moveTo(229.1, 306.3);
   ctx.stroke();
   ctx.restore();
}

function addShadow(context) {
   context.shadowOffsetX = 1;
   context.shadowOffsetY = 2;
   context.shadowBlur = 6;
   context.shadowColor = "rgba(0, 0, 0, 0.5)";
}

function removeShadow(context) {
   context.shadowOffsetX = 0;
   context.shadowOffsetY = 0;
   context.shadowBlur = 0;
   context.shadowColor = "none";
}

$(function() {
   tree_init();
   if (typeof init === "function") {
      init();
   }
});