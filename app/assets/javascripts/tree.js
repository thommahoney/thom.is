function init_tree() {
   
   var canvas = $("#tree_canvas").get(0);
   var ctx = canvas.getContext("2d");
   
   draw_tree(ctx);
}


function draw_tree(ctx)
{
   // layer1/Compound Path
   ctx.save();
   ctx.beginPath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(406.4, 167.4);
   ctx.bezierCurveTo(405.5, 163.3, 396.5, 167.1, 399.6, 164.3);
   ctx.bezierCurveTo(405.5, 158.8, 397.3, 158.8, 398.7, 157.0);
   ctx.bezierCurveTo(399.1, 155.6, 395.1, 160.2, 396.9, 153.8);
   ctx.bezierCurveTo(398.7, 147.5, 384.6, 151.1, 382.8, 150.6);
   ctx.bezierCurveTo(380.6, 150.1, 378.7, 151.1, 378.7, 148.8);
   ctx.bezierCurveTo(378.7, 146.6, 379.6, 148.4, 377.4, 144.7);
   ctx.bezierCurveTo(375.1, 141.1, 371.5, 146.0, 366.9, 142.0);
   ctx.bezierCurveTo(363.7, 139.3, 369.2, 138.8, 370.5, 136.1);
   ctx.bezierCurveTo(371.9, 133.4, 373.3, 138.8, 375.1, 137.5);
   ctx.bezierCurveTo(381.4, 136.1, 378.3, 127.0, 372.4, 121.6);
   ctx.bezierCurveTo(366.5, 116.1, 357.4, 119.3, 359.2, 118.0);
   ctx.bezierCurveTo(361.0, 116.6, 360.6, 112.5, 355.1, 109.8);
   ctx.bezierCurveTo(349.7, 107.1, 353.8, 111.2, 349.2, 112.1);
   ctx.bezierCurveTo(354.2, 105.3, 344.2, 108.4, 346.5, 106.6);
   ctx.bezierCurveTo(348.8, 104.8, 347.4, 103.0, 347.4, 101.2);
   ctx.bezierCurveTo(347.4, 99.4, 339.7, 100.3, 339.7, 98.0);
   ctx.bezierCurveTo(339.7, 95.7, 343.8, 98.0, 342.0, 93.5);
   ctx.bezierCurveTo(340.1, 88.9, 331.2, 94.8, 333.3, 93.0);
   ctx.bezierCurveTo(336.5, 90.3, 334.7, 86.2, 334.7, 86.2);
   ctx.bezierCurveTo(334.7, 86.2, 330.2, 87.6, 330.2, 84.8);
   ctx.bezierCurveTo(330.2, 82.1, 333.8, 83.5, 337.4, 82.6);
   ctx.bezierCurveTo(341.0, 81.7, 337.0, 78.0, 335.1, 77.6);
   ctx.bezierCurveTo(333.3, 77.1, 337.4, 73.9, 334.2, 73.9);
   ctx.bezierCurveTo(331.1, 73.9, 321.5, 72.2, 321.5, 74.8);
   ctx.bezierCurveTo(321.5, 78.5, 322.4, 80.3, 322.4, 80.3);
   ctx.bezierCurveTo(322.4, 80.3, 319.1, 78.0, 315.6, 78.5);
   ctx.bezierCurveTo(312.0, 78.9, 307.5, 85.7, 305.2, 84.4);
   ctx.bezierCurveTo(300.2, 79.8, 293.8, 85.3, 294.3, 84.4);
   ctx.bezierCurveTo(294.8, 83.5, 290.6, 85.1, 283.9, 83.9);
   ctx.bezierCurveTo(271.2, 81.7, 261.6, 98.0, 259.8, 97.1);
   ctx.bezierCurveTo(260.3, 91.2, 253.9, 92.1, 255.7, 92.5);
   ctx.bezierCurveTo(257.5, 93.0, 254.8, 96.6, 253.5, 93.9);
   ctx.bezierCurveTo(252.1, 91.2, 255.3, 89.8, 258.0, 89.4);
   ctx.bezierCurveTo(260.7, 88.9, 258.0, 87.6, 259.8, 87.1);
   ctx.bezierCurveTo(261.6, 86.6, 263.4, 88.9, 265.7, 88.5);
   ctx.bezierCurveTo(268.0, 88.0, 264.8, 83.9, 268.0, 83.9);
   ctx.bezierCurveTo(271.2, 83.9, 274.8, 80.3, 274.8, 80.3);
   ctx.bezierCurveTo(274.8, 77.1, 274.8, 75.3, 270.2, 74.4);
   ctx.bezierCurveTo(270.2, 71.2, 267.1, 72.6, 267.1, 72.6);
   ctx.bezierCurveTo(267.1, 72.6, 263.9, 67.6, 266.2, 65.3);
   ctx.bezierCurveTo(268.4, 63.0, 269.3, 59.0, 266.2, 54.0);
   ctx.bezierCurveTo(263.0, 49.0, 260.7, 54.9, 259.4, 56.2);
   ctx.bezierCurveTo(258.0, 57.6, 254.4, 57.1, 253.9, 53.5);
   ctx.bezierCurveTo(253.5, 49.9, 257.5, 46.7, 257.1, 44.4);
   ctx.bezierCurveTo(256.6, 42.2, 254.8, 41.3, 256.2, 41.3);
   ctx.bezierCurveTo(257.5, 41.3, 258.4, 37.2, 258.4, 35.4);
   ctx.bezierCurveTo(258.4, 33.5, 250.7, 33.5, 249.8, 32.6);
   ctx.bezierCurveTo(248.9, 31.7, 247.1, 28.6, 247.6, 26.7);
   ctx.bezierCurveTo(248.0, 24.9, 242.6, 25.4, 240.7, 25.4);
   ctx.bezierCurveTo(238.9, 25.4, 239.8, 21.3, 241.2, 16.8);
   ctx.bezierCurveTo(242.6, 12.2, 235.8, 12.2, 235.8, 12.2);
   ctx.bezierCurveTo(235.8, 12.2, 221.0, 15.6, 217.6, 16.8);
   ctx.bezierCurveTo(214.9, 17.7, 211.2, 18.6, 210.8, 15.8);
   ctx.bezierCurveTo(210.3, 13.1, 213.5, 14.0, 215.8, 12.2);
   ctx.bezierCurveTo(218.1, 10.4, 213.5, 9.0, 214.9, 9.0);
   ctx.bezierCurveTo(216.2, 9.0, 219.9, 9.5, 219.0, 4.5);
   ctx.bezierCurveTo(218.1, -0.5, 212.6, 3.6, 210.8, 4.0);
   ctx.bezierCurveTo(209.0, 4.5, 204.0, 8.1, 203.5, 2.7);
   ctx.bezierCurveTo(203.1, -2.8, 190.4, 1.3, 188.6, 4.0);
   ctx.bezierCurveTo(186.7, 6.8, 184.5, 5.4, 180.4, 4.5);
   ctx.bezierCurveTo(176.3, 3.6, 175.4, 4.5, 172.7, 4.0);
   ctx.bezierCurveTo(169.9, 3.6, 171.8, 2.7, 163.6, 3.6);
   ctx.bezierCurveTo(155.4, 4.5, 162.2, 9.9, 160.9, 12.2);
   ctx.bezierCurveTo(159.5, 14.5, 158.1, 14.0, 158.1, 14.0);
   ctx.bezierCurveTo(158.1, 14.0, 157.2, 12.2, 157.7, 9.5);
   ctx.bezierCurveTo(158.1, 6.8, 155.4, 9.5, 155.0, 7.7);
   ctx.bezierCurveTo(154.5, 5.9, 147.3, 14.0, 147.7, 10.4);
   ctx.bezierCurveTo(148.2, 6.8, 143.2, 9.0, 140.0, 8.1);
   ctx.bezierCurveTo(138.3, 7.6, 137.9, 12.0, 137.8, 14.4);
   ctx.bezierCurveTo(137.1, 14.1, 135.2, 14.4, 130.5, 16.8);
   ctx.bezierCurveTo(120.5, 21.7, 128.6, 25.4, 130.5, 24.0);
   ctx.bezierCurveTo(132.3, 22.7, 137.7, 27.6, 135.0, 28.6);
   ctx.bezierCurveTo(132.3, 29.5, 133.6, 25.4, 127.3, 29.5);
   ctx.bezierCurveTo(124.5, 31.2, 123.6, 32.6, 123.5, 33.6);
   ctx.bezierCurveTo(122.9, 32.9, 122.0, 32.4, 120.5, 32.2);
   ctx.bezierCurveTo(116.8, 31.7, 116.8, 45.6, 116.8, 38.5);
   ctx.bezierCurveTo(116.8, 34.9, 116.8, 34.9, 111.9, 36.3);
   ctx.bezierCurveTo(107.0, 37.6, 107.8, 40.8, 111.4, 42.2);
   ctx.bezierCurveTo(115.0, 43.5, 111.9, 47.2, 111.9, 47.2);
   ctx.bezierCurveTo(111.9, 47.2, 107.3, 43.5, 102.3, 44.9);
   ctx.bezierCurveTo(97.3, 46.3, 101.0, 54.0, 102.8, 55.8);
   ctx.bezierCurveTo(104.6, 57.6, 105.0, 60.3, 100.1, 57.6);
   ctx.bezierCurveTo(95.1, 54.9, 96.9, 61.2, 96.9, 61.2);
   ctx.bezierCurveTo(96.9, 61.2, 95.5, 64.0, 95.1, 59.9);
   ctx.bezierCurveTo(94.6, 55.8, 98.2, 56.2, 91.4, 54.4);
   ctx.bezierCurveTo(84.6, 52.6, 85.1, 59.4, 80.5, 59.4);
   ctx.bezierCurveTo(76.0, 59.4, 77.4, 63.5, 75.5, 63.5);
   ctx.bezierCurveTo(73.7, 63.5, 71.0, 68.9, 72.4, 68.9);
   ctx.bezierCurveTo(73.7, 68.9, 75.5, 71.2, 74.2, 72.6);
   ctx.bezierCurveTo(74.0, 72.7, 73.9, 72.9, 73.9, 72.9);
   ctx.bezierCurveTo(73.5, 73.0, 72.5, 73.1, 70.6, 73.5);
   ctx.bezierCurveTo(64.2, 74.8, 68.7, 76.7, 66.0, 78.5);
   ctx.bezierCurveTo(63.3, 80.3, 61.5, 77.6, 61.5, 77.6);
   ctx.bezierCurveTo(61.5, 77.6, 61.0, 73.5, 60.1, 71.2);
   ctx.bezierCurveTo(59.2, 68.9, 55.1, 74.8, 55.1, 74.8);
   ctx.bezierCurveTo(55.1, 74.8, 55.6, 73.0, 51.0, 74.8);
   ctx.bezierCurveTo(46.5, 76.7, 48.8, 80.3, 48.3, 82.6);
   ctx.bezierCurveTo(47.2, 87.9, 51.0, 85.7, 53.8, 88.0);
   ctx.bezierCurveTo(56.5, 90.3, 62.4, 85.7, 62.4, 85.7);
   ctx.bezierCurveTo(62.4, 85.7, 71.0, 84.4, 72.8, 84.8);
   ctx.bezierCurveTo(74.6, 85.3, 77.8, 83.5, 79.6, 81.2);
   ctx.bezierCurveTo(81.4, 78.9, 83.3, 76.7, 86.4, 77.1);
   ctx.bezierCurveTo(89.6, 77.6, 91.9, 82.6, 91.9, 82.6);
   ctx.bezierCurveTo(91.9, 82.6, 98.7, 83.0, 101.4, 81.7);
   ctx.bezierCurveTo(104.1, 80.3, 106.4, 83.9, 106.4, 83.9);
   ctx.lineTo(101.9, 84.4);
   ctx.bezierCurveTo(101.9, 84.4, 100.1, 85.7, 99.1, 88.0);
   ctx.bezierCurveTo(98.2, 90.3, 93.2, 87.6, 93.2, 87.6);
   ctx.lineTo(91.4, 90.7);
   ctx.bezierCurveTo(91.4, 90.7, 87.3, 93.0, 86.0, 91.6);
   ctx.bezierCurveTo(84.6, 90.3, 86.4, 86.6, 83.3, 84.4);
   ctx.bezierCurveTo(80.1, 82.1, 78.3, 91.6, 78.3, 91.6);
   ctx.bezierCurveTo(78.3, 91.6, 72.4, 89.4, 68.3, 90.7);
   ctx.bezierCurveTo(64.2, 92.1, 69.6, 95.7, 66.5, 95.7);
   ctx.bezierCurveTo(63.3, 95.7, 65.6, 105.1, 63.3, 102.5);
   ctx.bezierCurveTo(58.3, 97.1, 54.2, 100.7, 54.2, 100.7);
   ctx.bezierCurveTo(54.2, 100.7, 56.5, 97.1, 49.2, 95.7);
   ctx.bezierCurveTo(42.0, 94.4, 41.5, 98.9, 41.5, 98.9);
   ctx.bezierCurveTo(41.5, 98.9, 37.0, 103.9, 32.4, 106.6);
   ctx.bezierCurveTo(27.9, 109.3, 30.6, 121.6, 30.6, 121.6);
   ctx.bezierCurveTo(30.6, 121.6, 25.6, 123.0, 28.3, 127.5);
   ctx.bezierCurveTo(31.1, 132.0, 33.8, 128.9, 36.5, 129.3);
   ctx.bezierCurveTo(39.2, 129.8, 41.5, 123.4, 39.7, 122.0);
   ctx.bezierCurveTo(37.9, 120.7, 41.7, 113.4, 41.9, 113.0);
   ctx.bezierCurveTo(41.8, 113.4, 40.6, 116.1, 46.5, 115.7);
   ctx.bezierCurveTo(52.9, 115.2, 51.9, 110.2, 51.9, 110.2);
   ctx.bezierCurveTo(51.9, 110.2, 57.4, 110.7, 56.0, 117.5);
   ctx.bezierCurveTo(54.9, 123.0, 58.3, 118.9, 54.2, 126.6);
   ctx.bezierCurveTo(50.1, 134.3, 56.0, 134.8, 56.0, 134.8);
   ctx.bezierCurveTo(56.0, 134.8, 59.2, 138.4, 66.0, 130.2);
   ctx.bezierCurveTo(67.7, 128.1, 67.7, 127.8, 71.0, 127.5);
   ctx.bezierCurveTo(76.5, 126.9, 76.5, 128.9, 75.1, 131.6);
   ctx.bezierCurveTo(73.7, 134.3, 71.0, 142.5, 63.3, 146.6);
   ctx.bezierCurveTo(55.6, 150.6, 52.0, 159.2, 61.5, 161.5);
   ctx.bezierCurveTo(63.3, 162.0, 67.8, 153.4, 68.3, 152.0);
   ctx.bezierCurveTo(68.7, 150.6, 71.5, 152.0, 71.5, 157.9);
   ctx.bezierCurveTo(71.5, 163.8, 62.8, 165.6, 67.4, 172.9);
   ctx.bezierCurveTo(70.6, 178.0, 73.7, 176.1, 76.0, 176.1);
   ctx.bezierCurveTo(78.3, 176.1, 80.1, 165.6, 80.1, 165.6);
   ctx.bezierCurveTo(80.1, 165.6, 81.4, 167.9, 86.4, 165.2);
   ctx.bezierCurveTo(91.4, 162.4, 85.5, 160.6, 85.5, 158.4);
   ctx.bezierCurveTo(85.5, 156.1, 88.3, 158.8, 88.3, 158.8);
   ctx.bezierCurveTo(88.3, 158.8, 88.3, 158.8, 88.3, 161.1);
   ctx.bezierCurveTo(88.3, 163.3, 94.2, 160.2, 94.2, 160.2);
   ctx.bezierCurveTo(94.2, 160.2, 96.9, 154.7, 97.3, 157.4);
   ctx.bezierCurveTo(97.8, 160.2, 100.5, 161.1, 100.5, 161.1);
   ctx.bezierCurveTo(100.5, 163.8, 103.2, 162.9, 104.6, 161.5);
   ctx.bezierCurveTo(106.0, 160.2, 106.0, 157.0, 107.8, 155.6);
   ctx.bezierCurveTo(109.6, 154.3, 105.5, 158.8, 110.5, 157.0);
   ctx.bezierCurveTo(115.5, 155.2, 110.9, 155.2, 112.3, 154.3);
   ctx.bezierCurveTo(113.7, 153.4, 113.2, 158.4, 116.4, 157.9);
   ctx.bezierCurveTo(119.6, 157.4, 126.8, 155.2, 126.8, 156.5);
   ctx.bezierCurveTo(126.8, 157.9, 136.8, 166.1, 141.8, 162.0);
   ctx.bezierCurveTo(143.9, 160.3, 150.9, 168.8, 150.9, 171.1);
   ctx.bezierCurveTo(150.9, 173.3, 154.5, 182.9, 163.6, 187.4);
   ctx.bezierCurveTo(172.7, 191.9, 174.5, 195.1, 176.3, 196.5);
   ctx.bezierCurveTo(178.1, 197.8, 176.8, 217.4, 175.8, 219.6);
   ctx.bezierCurveTo(174.9, 221.9, 160.4, 213.7, 160.4, 213.7);
   ctx.bezierCurveTo(160.4, 213.7, 160.4, 212.8, 159.5, 206.9);
   ctx.bezierCurveTo(158.6, 201.0, 156.3, 196.0, 150.4, 187.9);
   ctx.bezierCurveTo(144.5, 179.7, 137.3, 178.3, 137.3, 178.3);
   ctx.bezierCurveTo(137.3, 178.3, 128.3, 173.2, 125.0, 175.1);
   ctx.bezierCurveTo(120.5, 177.9, 122.1, 182.1, 120.0, 181.0);
   ctx.bezierCurveTo(117.3, 179.7, 107.8, 176.1, 100.5, 183.8);
   ctx.bezierCurveTo(97.8, 186.6, 95.1, 189.7, 93.2, 187.9);
   ctx.bezierCurveTo(87.2, 181.8, 76.9, 199.2, 76.9, 199.2);
   ctx.bezierCurveTo(76.9, 196.9, 75.9, 193.0, 70.6, 194.2);
   ctx.bezierCurveTo(60.1, 196.5, 60.6, 191.9, 55.1, 190.6);
   ctx.bezierCurveTo(49.7, 189.2, 44.7, 193.3, 45.6, 191.9);
   ctx.bezierCurveTo(46.5, 190.6, 44.7, 186.5, 39.2, 186.0);
   ctx.bezierCurveTo(33.8, 185.6, 33.3, 187.4, 31.1, 189.7);
   ctx.bezierCurveTo(28.8, 191.9, 27.9, 189.7, 22.9, 192.8);
   ctx.bezierCurveTo(17.9, 196.0, 22.4, 203.7, 21.5, 209.6);
   ctx.bezierCurveTo(20.6, 215.5, 14.3, 212.8, 14.3, 212.8);
   ctx.bezierCurveTo(14.3, 212.8, 15.6, 210.1, 14.7, 205.6);
   ctx.bezierCurveTo(13.8, 201.0, 11.6, 207.4, 10.6, 204.6);
   ctx.bezierCurveTo(9.7, 201.9, 2.5, 211.0, 0.7, 214.2);
   ctx.bezierCurveTo(-1.2, 217.4, 1.1, 223.3, 3.4, 224.2);
   ctx.bezierCurveTo(5.7, 225.1, 6.6, 220.1, 7.9, 218.7);
   ctx.bezierCurveTo(9.3, 217.4, 11.6, 221.9, 12.0, 224.6);
   ctx.bezierCurveTo(12.5, 227.3, 9.3, 231.0, 7.0, 231.4);
   ctx.bezierCurveTo(4.7, 231.9, 8.8, 237.3, 8.8, 237.3);
   ctx.bezierCurveTo(8.8, 237.3, 15.6, 233.2, 15.2, 237.3);
   ctx.bezierCurveTo(14.7, 241.4, 22.0, 238.7, 22.0, 238.7);
   ctx.bezierCurveTo(23.8, 241.4, 24.7, 241.0, 28.8, 239.1);
   ctx.bezierCurveTo(32.9, 237.3, 34.2, 231.4, 34.2, 231.4);
   ctx.bezierCurveTo(34.2, 231.4, 37.0, 230.5, 39.2, 232.3);
   ctx.bezierCurveTo(41.5, 234.1, 42.0, 224.2, 42.0, 224.2);
   ctx.bezierCurveTo(42.0, 224.2, 47.9, 225.5, 47.4, 230.5);
   ctx.bezierCurveTo(44.7, 237.8, 47.4, 240.0, 47.4, 240.0);
   ctx.bezierCurveTo(47.4, 240.0, 43.8, 243.2, 41.5, 241.4);
   ctx.bezierCurveTo(39.2, 239.6, 32.9, 245.5, 32.9, 245.5);
   ctx.bezierCurveTo(32.9, 245.5, 28.3, 236.0, 25.6, 248.7);
   ctx.bezierCurveTo(18.4, 251.8, 22.0, 256.4, 22.0, 256.4);
   ctx.lineTo(24.7, 258.7);
   ctx.bezierCurveTo(24.7, 258.7, 19.3, 263.2, 22.9, 267.3);
   ctx.bezierCurveTo(26.5, 271.4, 32.9, 267.7, 31.1, 262.3);
   ctx.bezierCurveTo(32.0, 257.3, 30.6, 253.7, 32.9, 251.8);
   ctx.bezierCurveTo(35.2, 250.0, 37.0, 256.4, 37.0, 256.4);
   ctx.bezierCurveTo(38.3, 259.1, 44.7, 257.7, 46.0, 257.3);
   ctx.bezierCurveTo(46.0, 264.1, 48.3, 262.7, 51.5, 261.4);
   ctx.bezierCurveTo(54.7, 260.0, 52.0, 255.7, 53.3, 255.5);
   ctx.bezierCurveTo(62.8, 254.1, 61.9, 243.2, 62.4, 245.5);
   ctx.bezierCurveTo(62.8, 247.8, 66.9, 245.2, 69.2, 245.5);
   ctx.bezierCurveTo(72.8, 245.9, 74.2, 239.6, 76.0, 238.7);
   ctx.bezierCurveTo(77.8, 237.8, 78.7, 241.0, 78.7, 241.0);
   ctx.bezierCurveTo(78.7, 241.0, 82.4, 239.1, 84.6, 239.1);
   ctx.bezierCurveTo(86.9, 239.1, 88.3, 245.9, 85.5, 245.5);
   ctx.bezierCurveTo(82.8, 245.0, 76.0, 252.3, 77.8, 255.9);
   ctx.bezierCurveTo(79.6, 259.6, 88.3, 259.6, 86.4, 259.6);
   ctx.bezierCurveTo(84.6, 259.6, 83.7, 266.8, 85.5, 266.4);
   ctx.bezierCurveTo(87.3, 265.9, 90.5, 266.4, 86.4, 270.5);
   ctx.bezierCurveTo(82.4, 274.5, 89.2, 275.9, 94.6, 275.0);
   ctx.bezierCurveTo(100.1, 274.1, 99.6, 261.8, 99.6, 261.8);
   ctx.bezierCurveTo(99.6, 261.8, 102.8, 261.4, 101.0, 255.9);
   ctx.bezierCurveTo(97.8, 246.4, 103.7, 248.2, 103.7, 248.2);
   ctx.bezierCurveTo(103.7, 248.2, 109.6, 252.8, 108.2, 258.2);
   ctx.bezierCurveTo(105.7, 268.3, 111.4, 266.8, 111.4, 266.8);
   ctx.bezierCurveTo(112.8, 268.6, 112.3, 269.5, 116.4, 266.8);
   ctx.bezierCurveTo(120.5, 264.1, 114.1, 257.7, 115.5, 255.0);
   ctx.bezierCurveTo(116.8, 252.3, 118.7, 256.8, 120.5, 259.6);
   ctx.bezierCurveTo(122.3, 262.3, 125.9, 256.8, 125.0, 254.6);
   ctx.bezierCurveTo(124.1, 252.3, 126.8, 245.0, 130.0, 244.6);
   ctx.bezierCurveTo(133.2, 244.1, 131.8, 252.8, 131.8, 252.8);
   ctx.bezierCurveTo(138.6, 243.2, 139.1, 238.7, 139.5, 234.1);
   ctx.bezierCurveTo(143.2, 232.3, 146.3, 221.9, 146.3, 221.9);
   ctx.bezierCurveTo(146.3, 221.9, 152.2, 220.5, 154.1, 221.4);
   ctx.bezierCurveTo(155.9, 222.3, 155.9, 225.1, 165.4, 231.4);
   ctx.bezierCurveTo(174.9, 237.8, 172.7, 236.4, 174.9, 237.3);
   ctx.bezierCurveTo(177.2, 238.2, 176.8, 236.0, 178.1, 246.9);
   ctx.bezierCurveTo(179.2, 255.4, 183.9, 266.7, 185.2, 269.7);
   ctx.bezierCurveTo(185.6, 271.0, 189.4, 281.2, 191.3, 289.5);
   ctx.bezierCurveTo(192.0, 292.9, 191.3, 311.6, 184.5, 311.5);
   ctx.lineTo(232.7, 311.5);
   ctx.bezierCurveTo(226.3, 311.8, 225.3, 301.8, 224.4, 297.7);
   ctx.bezierCurveTo(223.5, 293.6, 217.6, 275.9, 216.2, 265.9);
   ctx.bezierCurveTo(214.9, 255.9, 214.0, 241.9, 215.3, 237.3);
   ctx.bezierCurveTo(216.7, 232.8, 219.9, 227.3, 222.1, 225.5);
   ctx.bezierCurveTo(229.4, 226.9, 229.9, 216.4, 231.2, 219.2);
   ctx.bezierCurveTo(232.6, 221.9, 235.8, 220.5, 238.0, 220.1);
   ctx.bezierCurveTo(240.3, 219.6, 241.7, 220.1, 241.7, 220.1);
   ctx.lineTo(243.9, 221.4);
   ctx.bezierCurveTo(243.9, 221.4, 247.1, 219.2, 248.5, 221.4);
   ctx.bezierCurveTo(249.8, 223.7, 250.7, 225.1, 252.5, 223.3);
   ctx.bezierCurveTo(254.4, 221.4, 257.5, 224.2, 257.5, 226.9);
   ctx.bezierCurveTo(257.5, 229.6, 261.6, 230.5, 261.6, 230.5);
   ctx.bezierCurveTo(261.6, 230.5, 266.6, 227.8, 267.5, 231.9);
   ctx.bezierCurveTo(268.4, 236.0, 279.3, 237.8, 279.3, 237.8);
   ctx.bezierCurveTo(279.3, 237.8, 283.0, 238.2, 283.4, 242.8);
   ctx.bezierCurveTo(283.9, 247.3, 290.2, 245.0, 292.0, 243.7);
   ctx.bezierCurveTo(293.8, 242.3, 296.1, 247.8, 293.8, 250.5);
   ctx.bezierCurveTo(291.6, 250.5, 295.2, 255.0, 295.2, 255.0);
   ctx.bezierCurveTo(295.2, 255.0, 297.0, 255.5, 298.4, 255.0);
   ctx.bezierCurveTo(299.7, 254.6, 297.5, 260.0, 300.7, 261.4);
   ctx.bezierCurveTo(303.8, 262.7, 303.4, 259.6, 305.6, 258.2);
   ctx.bezierCurveTo(307.9, 256.8, 307.9, 254.1, 307.9, 254.1);
   ctx.bezierCurveTo(311.5, 253.7, 307.0, 261.8, 308.4, 265.9);
   ctx.bezierCurveTo(309.7, 270.0, 316.0, 274.8, 317.9, 271.4);
   ctx.bezierCurveTo(322.9, 262.3, 324.7, 270.9, 331.1, 269.1);
   ctx.bezierCurveTo(337.4, 267.3, 332.9, 265.9, 332.4, 262.7);
   ctx.bezierCurveTo(333.3, 258.2, 336.1, 248.7, 341.0, 246.4);
   ctx.bezierCurveTo(346.0, 244.1, 346.0, 246.9, 350.6, 243.7);
   ctx.bezierCurveTo(351.9, 244.6, 349.7, 233.2, 351.9, 232.8);
   ctx.bezierCurveTo(354.2, 232.3, 358.7, 232.8, 357.8, 226.9);
   ctx.bezierCurveTo(356.9, 221.0, 355.6, 218.7, 358.3, 214.6);
   ctx.bezierCurveTo(361.0, 210.5, 371.0, 213.3, 376.4, 210.1);
   ctx.bezierCurveTo(381.9, 206.9, 385.1, 198.3, 385.1, 198.3);
   ctx.bezierCurveTo(387.8, 199.2, 398.7, 198.7, 398.7, 193.3);
   ctx.bezierCurveTo(398.7, 187.9, 400.0, 183.3, 400.0, 183.3);
   ctx.bezierCurveTo(401.9, 181.0, 399.1, 177.0, 399.6, 175.1);
   ctx.bezierCurveTo(406.4, 174.2, 407.3, 171.5, 406.4, 167.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(56.5, 78.5);
   ctx.bezierCurveTo(53.8, 77.1, 57.8, 74.8, 57.8, 74.8);
   ctx.bezierCurveTo(61.0, 75.3, 59.2, 79.8, 56.5, 78.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(74.6, 78.5);
   ctx.bezierCurveTo(72.4, 76.7, 75.5, 74.4, 75.5, 74.4);
   ctx.bezierCurveTo(79.2, 76.7, 76.9, 80.3, 74.6, 78.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(79.6, 68.5);
   ctx.bezierCurveTo(76.5, 65.3, 80.1, 65.8, 80.1, 65.8);
   ctx.bezierCurveTo(84.2, 67.6, 82.8, 71.7, 79.6, 68.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(66.0, 121.6);
   ctx.bezierCurveTo(61.5, 118.9, 67.4, 117.5, 67.4, 117.5);
   ctx.bezierCurveTo(70.6, 119.3, 70.6, 124.3, 66.0, 121.6);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(71.9, 101.6);
   ctx.bezierCurveTo(66.5, 98.9, 71.9, 94.8, 71.9, 94.8);
   ctx.bezierCurveTo(74.6, 94.8, 77.4, 104.3, 71.9, 101.6);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(94.6, 94.8);
   ctx.bezierCurveTo(97.8, 96.2, 94.2, 103.0, 91.9, 101.6);
   ctx.bezierCurveTo(84.6, 97.3, 94.6, 94.8, 94.6, 94.8);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(96.4, 121.6);
   ctx.bezierCurveTo(93.7, 124.3, 86.9, 123.4, 86.4, 122.0);
   ctx.bezierCurveTo(86.0, 120.7, 77.4, 121.6, 77.4, 121.6);
   ctx.bezierCurveTo(76.0, 118.0, 81.9, 117.5, 83.7, 114.8);
   ctx.bezierCurveTo(85.5, 112.1, 92.3, 110.2, 91.9, 116.1);
   ctx.bezierCurveTo(91.4, 122.0, 99.1, 118.9, 96.4, 121.6);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(39.7, 201.5);
   ctx.bezierCurveTo(35.2, 197.4, 41.1, 197.8, 41.1, 197.8);
   ctx.bezierCurveTo(43.8, 200.1, 44.2, 205.6, 39.7, 201.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(47.4, 201.0);
   ctx.bezierCurveTo(47.4, 201.0, 40.6, 194.2, 51.5, 195.1);
   ctx.bezierCurveTo(47.0, 197.8, 47.4, 201.0, 47.4, 201.0);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(51.0, 246.9);
   ctx.lineTo(51.0, 251.4);
   ctx.bezierCurveTo(51.0, 251.4, 47.9, 252.8, 47.0, 250.9);
   ctx.bezierCurveTo(46.0, 249.1, 47.4, 247.3, 47.4, 244.1);
   ctx.bezierCurveTo(47.4, 241.0, 50.1, 241.9, 50.1, 241.9);
   ctx.bezierCurveTo(52.4, 241.0, 55.1, 244.1, 55.1, 244.1);
   ctx.lineTo(51.0, 246.9);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(56.9, 233.2);
   ctx.bezierCurveTo(52.9, 232.3, 58.8, 228.2, 58.8, 228.2);
   ctx.bezierCurveTo(60.6, 231.0, 61.0, 234.1, 56.9, 233.2);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(62.4, 214.6);
   ctx.bezierCurveTo(61.0, 209.6, 65.6, 211.5, 65.6, 211.5);
   ctx.bezierCurveTo(70.6, 216.0, 63.7, 219.6, 62.4, 214.6);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(84.6, 230.1);
   ctx.bezierCurveTo(78.6, 230.1, 79.2, 225.5, 79.2, 225.5);
   ctx.bezierCurveTo(82.4, 223.3, 85.1, 230.1, 84.6, 230.1);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(85.5, 210.1);
   ctx.bezierCurveTo(85.5, 206.0, 90.5, 206.9, 90.5, 206.9);
   ctx.bezierCurveTo(93.2, 211.5, 85.5, 214.2, 85.5, 210.1);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(139.5, 215.1);
   ctx.bezierCurveTo(134.1, 211.5, 126.8, 216.4, 124.6, 217.8);
   ctx.bezierCurveTo(122.3, 219.2, 117.3, 225.1, 107.8, 226.0);
   ctx.bezierCurveTo(98.2, 226.9, 106.9, 217.8, 108.7, 220.5);
   ctx.bezierCurveTo(110.5, 223.3, 116.4, 218.7, 116.4, 216.0);
   ctx.bezierCurveTo(116.4, 213.3, 115.0, 213.3, 106.4, 216.0);
   ctx.bezierCurveTo(96.3, 219.2, 96.4, 217.4, 95.5, 215.1);
   ctx.bezierCurveTo(94.6, 212.8, 97.3, 208.3, 97.8, 205.6);
   ctx.bezierCurveTo(98.2, 202.8, 94.2, 204.6, 89.2, 203.3);
   ctx.bezierCurveTo(84.2, 201.9, 88.7, 201.0, 90.1, 199.7);
   ctx.bezierCurveTo(91.4, 198.3, 93.7, 196.0, 96.0, 197.8);
   ctx.bezierCurveTo(98.2, 199.7, 107.3, 189.7, 108.2, 188.3);
   ctx.bezierCurveTo(109.1, 186.9, 125.5, 190.1, 128.2, 184.7);
   ctx.bezierCurveTo(129.6, 181.8, 140.4, 190.1, 142.7, 195.1);
   ctx.bezierCurveTo(145.0, 200.1, 148.2, 206.0, 148.2, 209.2);
   ctx.bezierCurveTo(148.2, 212.4, 145.0, 218.7, 139.5, 215.1);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(292.5, 142.5);
   ctx.bezierCurveTo(294.8, 143.4, 290.7, 148.8, 290.2, 146.1);
   ctx.bezierCurveTo(289.8, 143.4, 292.5, 142.5, 292.5, 142.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(274.8, 122.0);
   ctx.bezierCurveTo(277.0, 118.5, 281.1, 118.4, 281.1, 118.4);
   ctx.bezierCurveTo(281.1, 118.4, 282.0, 111.6, 283.9, 109.8);
   ctx.bezierCurveTo(285.7, 108.0, 292.0, 110.2, 290.7, 116.6);
   ctx.bezierCurveTo(289.3, 123.0, 283.4, 117.1, 286.6, 124.3);
   ctx.bezierCurveTo(289.8, 131.6, 285.2, 133.8, 285.2, 133.8);
   ctx.lineTo(278.4, 127.5);
   ctx.bezierCurveTo(278.4, 127.5, 271.6, 127.0, 274.8, 122.0);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(269.8, 102.1);
   ctx.bezierCurveTo(273.0, 104.3, 269.8, 108.9, 267.5, 105.7);
   ctx.bezierCurveTo(265.3, 102.5, 269.8, 102.1, 269.8, 102.1);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(258.9, 126.6);
   ctx.bezierCurveTo(260.3, 124.8, 265.3, 117.1, 265.3, 117.1);
   ctx.bezierCurveTo(271.6, 117.5, 269.3, 123.0, 265.3, 123.0);
   ctx.bezierCurveTo(265.3, 127.5, 257.5, 128.4, 258.9, 126.6);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(266.2, 152.5);
   ctx.bezierCurveTo(263.0, 150.6, 262.1, 147.5, 268.0, 144.3);
   ctx.bezierCurveTo(273.9, 141.1, 278.9, 139.3, 279.8, 141.6);
   ctx.bezierCurveTo(280.7, 143.8, 285.7, 142.9, 270.7, 147.5);
   ctx.bezierCurveTo(268.4, 150.2, 271.2, 151.1, 273.0, 151.1);
   ctx.bezierCurveTo(274.8, 151.1, 277.5, 154.7, 273.9, 156.5);
   ctx.bezierCurveTo(270.2, 158.4, 255.7, 167.9, 252.1, 164.7);
   ctx.bezierCurveTo(252.1, 164.7, 254.8, 159.7, 266.2, 152.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(257.1, 98.0);
   ctx.bezierCurveTo(260.3, 100.7, 251.6, 108.4, 251.6, 103.9);
   ctx.bezierCurveTo(251.6, 99.4, 257.1, 98.0, 257.1, 98.0);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(238.9, 51.2);
   ctx.bezierCurveTo(243.0, 53.5, 238.9, 59.0, 236.2, 55.3);
   ctx.bezierCurveTo(233.5, 51.7, 238.9, 51.2, 238.9, 51.2);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(233.5, 76.2);
   ctx.bezierCurveTo(235.8, 74.4, 239.4, 75.8, 240.7, 78.5);
   ctx.bezierCurveTo(242.1, 81.2, 249.8, 72.1, 249.4, 79.4);
   ctx.bezierCurveTo(248.9, 86.6, 244.8, 79.8, 244.4, 82.6);
   ctx.bezierCurveTo(243.9, 85.3, 243.9, 88.0, 241.2, 86.2);
   ctx.bezierCurveTo(234.6, 81.8, 231.2, 78.0, 233.5, 76.2);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(243.0, 95.7);
   ctx.bezierCurveTo(248.0, 98.4, 243.5, 103.0, 240.3, 99.4);
   ctx.bezierCurveTo(237.1, 95.7, 243.0, 95.7, 243.0, 95.7);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(236.2, 93.9);
   ctx.bezierCurveTo(234.8, 92.1, 238.5, 89.8, 238.5, 89.8);
   ctx.bezierCurveTo(242.1, 91.2, 237.6, 95.7, 236.2, 93.9);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(245.3, 112.1);
   ctx.bezierCurveTo(246.6, 122.0, 238.0, 118.4, 238.0, 118.4);
   ctx.bezierCurveTo(238.0, 118.4, 234.4, 123.4, 228.5, 123.4);
   ctx.bezierCurveTo(222.6, 123.4, 227.1, 110.7, 227.1, 110.7);
   ctx.bezierCurveTo(228.5, 112.5, 235.8, 113.4, 245.3, 112.1);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(221.7, 66.7);
   ctx.bezierCurveTo(224.4, 67.1, 227.1, 72.6, 221.7, 70.8);
   ctx.bezierCurveTo(216.2, 68.9, 221.7, 66.7, 221.7, 66.7);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(205.8, 72.6);
   ctx.bezierCurveTo(208.5, 74.8, 211.7, 68.9, 211.7, 68.9);
   ctx.lineTo(217.1, 78.0);
   ctx.bezierCurveTo(217.1, 78.0, 231.2, 75.8, 226.2, 81.7);
   ctx.bezierCurveTo(221.2, 87.6, 212.2, 80.7, 211.7, 80.7);
   ctx.bezierCurveTo(211.2, 80.7, 204.9, 74.4, 203.1, 84.4);
   ctx.bezierCurveTo(201.3, 94.4, 199.9, 92.1, 195.8, 90.7);
   ctx.bezierCurveTo(191.7, 89.4, 194.0, 86.2, 194.9, 81.2);
   ctx.bezierCurveTo(195.8, 80.7, 194.5, 78.9, 198.1, 75.8);
   ctx.bezierCurveTo(201.7, 72.6, 199.4, 69.9, 201.3, 68.0);
   ctx.bezierCurveTo(203.1, 66.2, 203.1, 70.3, 205.8, 72.6);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(186.3, 118.0);
   ctx.bezierCurveTo(189.0, 118.9, 189.5, 124.3, 188.1, 125.2);
   ctx.bezierCurveTo(186.7, 126.1, 184.9, 137.0, 182.2, 137.5);
   ctx.bezierCurveTo(179.5, 137.9, 178.1, 128.4, 178.6, 125.2);
   ctx.bezierCurveTo(179.0, 122.0, 186.3, 118.0, 186.3, 118.0);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(184.9, 99.4);
   ctx.bezierCurveTo(187.6, 100.7, 193.1, 107.1, 186.3, 106.2);
   ctx.bezierCurveTo(179.5, 105.3, 184.9, 99.4, 184.9, 99.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(190.4, 135.7);
   ctx.bezierCurveTo(194.0, 133.4, 191.3, 124.3, 196.3, 124.8);
   ctx.bezierCurveTo(201.3, 125.2, 200.4, 130.2, 200.4, 130.2);
   ctx.bezierCurveTo(200.4, 130.2, 209.4, 126.1, 208.5, 131.1);
   ctx.bezierCurveTo(207.6, 136.1, 197.6, 155.6, 191.7, 145.6);
   ctx.bezierCurveTo(189.9, 142.5, 186.7, 137.9, 190.4, 135.7);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(200.4, 112.1);
   ctx.bezierCurveTo(198.5, 108.4, 206.7, 101.6, 206.7, 101.6);
   ctx.bezierCurveTo(211.7, 99.4, 209.0, 103.4, 212.2, 104.8);
   ctx.bezierCurveTo(216.2, 102.1, 220.3, 102.5, 220.8, 108.0);
   ctx.bezierCurveTo(221.2, 113.4, 213.5, 108.9, 211.2, 110.7);
   ctx.bezierCurveTo(209.0, 112.5, 202.2, 115.7, 200.4, 112.1);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(211.2, 118.4);
   ctx.bezierCurveTo(213.1, 118.9, 221.7, 129.8, 214.9, 129.3);
   ctx.bezierCurveTo(208.1, 128.9, 211.2, 118.4, 211.2, 118.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(220.3, 129.8);
   ctx.bezierCurveTo(223.5, 129.8, 224.4, 135.2, 219.0, 134.3);
   ctx.bezierCurveTo(213.5, 133.4, 220.3, 129.8, 220.3, 129.8);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(183.6, 55.3);
   ctx.bezierCurveTo(185.4, 57.6, 188.6, 64.0, 188.6, 66.2);
   ctx.bezierCurveTo(188.6, 68.5, 190.8, 68.5, 192.2, 65.3);
   ctx.bezierCurveTo(193.5, 62.1, 196.7, 54.9, 197.6, 56.7);
   ctx.bezierCurveTo(198.5, 58.5, 200.8, 61.2, 196.7, 65.3);
   ctx.bezierCurveTo(192.6, 69.4, 189.5, 76.7, 185.4, 81.7);
   ctx.bezierCurveTo(183.1, 74.8, 183.1, 67.6, 181.7, 64.4);
   ctx.bezierCurveTo(180.3, 61.0, 181.7, 53.1, 183.6, 55.3);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(172.2, 10.4);
   ctx.bezierCurveTo(175.4, 13.1, 170.9, 18.1, 169.5, 14.5);
   ctx.bezierCurveTo(168.1, 10.9, 172.2, 10.4, 172.2, 10.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(169.0, 82.6);
   ctx.bezierCurveTo(170.4, 81.2, 169.0, 72.6, 169.0, 72.6);
   ctx.bezierCurveTo(169.0, 72.6, 169.0, 66.7, 174.5, 70.3);
   ctx.bezierCurveTo(178.8, 73.2, 176.0, 80.4, 174.6, 83.2);
   ctx.bezierCurveTo(175.6, 82.0, 178.0, 80.9, 183.6, 86.2);
   ctx.bezierCurveTo(191.7, 93.9, 188.1, 93.9, 188.1, 93.9);
   ctx.bezierCurveTo(188.1, 93.9, 181.3, 95.7, 177.2, 92.1);
   ctx.bezierCurveTo(173.1, 88.5, 175.8, 98.9, 175.8, 98.9);
   ctx.bezierCurveTo(175.8, 98.9, 172.7, 105.7, 167.7, 100.7);
   ctx.bezierCurveTo(162.7, 95.7, 161.3, 94.4, 159.1, 91.2);
   ctx.bezierCurveTo(156.8, 88.0, 160.0, 78.9, 163.1, 82.1);
   ctx.bezierCurveTo(166.3, 85.3, 167.7, 83.9, 169.0, 82.6);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(172.2, 134.3);
   ctx.bezierCurveTo(172.2, 134.3, 172.2, 141.6, 160.0, 128.4);
   ctx.bezierCurveTo(161.8, 113.0, 161.8, 108.0, 161.8, 108.0);
   ctx.bezierCurveTo(161.8, 108.0, 169.9, 119.8, 173.6, 118.4);
   ctx.bezierCurveTo(177.2, 117.1, 172.2, 134.3, 172.2, 134.3);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(164.0, 66.2);
   ctx.bezierCurveTo(162.2, 70.3, 155.9, 68.9, 157.7, 66.2);
   ctx.bezierCurveTo(159.5, 63.5, 164.0, 66.2, 164.0, 66.2);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(152.2, 120.7);
   ctx.bezierCurveTo(152.7, 118.4, 149.2, 116.6, 149.1, 115.2);
   ctx.bezierCurveTo(148.6, 111.6, 155.3, 104.6, 156.3, 114.3);
   ctx.bezierCurveTo(157.7, 127.5, 153.2, 126.6, 153.2, 126.6);
   ctx.bezierCurveTo(155.0, 123.9, 151.8, 123.0, 152.2, 120.7);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(148.6, 101.6);
   ctx.bezierCurveTo(151.3, 98.0, 159.3, 102.8, 157.2, 104.3);
   ctx.bezierCurveTo(153.2, 107.5, 148.6, 101.6, 148.6, 101.6);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(156.8, 44.9);
   ctx.bezierCurveTo(158.6, 51.2, 161.3, 54.9, 156.3, 54.0);
   ctx.bezierCurveTo(151.3, 53.1, 156.8, 44.9, 156.8, 44.9);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(150.9, 62.6);
   ctx.bezierCurveTo(153.2, 65.3, 153.2, 69.4, 149.5, 67.1);
   ctx.bezierCurveTo(145.9, 64.9, 150.9, 62.6, 150.9, 62.6);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(132.7, 60.3);
   ctx.bezierCurveTo(135.0, 61.7, 135.0, 68.9, 131.4, 67.1);
   ctx.bezierCurveTo(127.7, 65.3, 132.7, 60.3, 132.7, 60.3);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(121.8, 60.8);
   ctx.bezierCurveTo(124.1, 62.1, 128.6, 67.6, 122.7, 67.1);
   ctx.bezierCurveTo(116.8, 66.7, 121.8, 60.8, 121.8, 60.8);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(114.6, 64.4);
   ctx.bezierCurveTo(117.8, 65.8, 121.4, 71.7, 115.5, 68.9);
   ctx.bezierCurveTo(109.6, 66.2, 114.6, 64.4, 114.6, 64.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(114.1, 122.0);
   ctx.bezierCurveTo(118.2, 125.2, 113.3, 130.2, 111.4, 127.9);
   ctx.bezierCurveTo(109.1, 125.2, 114.1, 122.0, 114.1, 122.0);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(123.7, 148.4);
   ctx.bezierCurveTo(121.8, 149.3, 117.3, 152.9, 115.9, 147.5);
   ctx.bezierCurveTo(114.6, 142.0, 114.1, 138.4, 111.4, 138.4);
   ctx.bezierCurveTo(111.4, 138.4, 118.7, 137.5, 119.6, 137.0);
   ctx.bezierCurveTo(120.5, 136.6, 125.5, 147.5, 123.7, 148.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(135.5, 148.4);
   ctx.bezierCurveTo(122.7, 132.9, 124.6, 126.1, 124.6, 126.1);
   ctx.bezierCurveTo(129.6, 124.3, 131.4, 133.4, 131.4, 133.4);
   ctx.bezierCurveTo(131.4, 133.4, 131.8, 136.1, 135.0, 134.3);
   ctx.bezierCurveTo(138.2, 132.5, 139.1, 152.9, 135.5, 148.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(127.7, 103.4);
   ctx.bezierCurveTo(133.6, 102.1, 135.0, 113.4, 129.1, 110.7);
   ctx.bezierCurveTo(123.2, 108.0, 127.7, 103.4, 127.7, 103.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(140.0, 78.5);
   ctx.bezierCurveTo(139.5, 76.7, 133.2, 84.4, 126.8, 83.5);
   ctx.bezierCurveTo(120.5, 82.6, 129.1, 70.8, 129.1, 70.8);
   ctx.bezierCurveTo(129.1, 70.8, 135.5, 69.4, 137.3, 70.3);
   ctx.bezierCurveTo(139.1, 71.2, 141.8, 66.2, 141.8, 66.2);
   ctx.bezierCurveTo(144.1, 68.9, 141.4, 74.4, 142.3, 75.8);
   ctx.bezierCurveTo(143.2, 77.1, 146.8, 74.4, 148.6, 76.2);
   ctx.bezierCurveTo(150.4, 78.0, 142.7, 93.9, 139.5, 89.4);
   ctx.bezierCurveTo(136.4, 84.8, 140.4, 80.3, 140.0, 78.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(189.0, 161.5);
   ctx.bezierCurveTo(179.0, 167.9, 182.7, 167.4, 179.9, 171.5);
   ctx.bezierCurveTo(177.2, 175.6, 180.4, 182.0, 180.4, 182.0);
   ctx.bezierCurveTo(175.8, 182.9, 165.0, 174.7, 164.5, 169.7);
   ctx.bezierCurveTo(164.0, 164.7, 160.0, 159.7, 151.8, 157.0);
   ctx.bezierCurveTo(143.6, 154.3, 143.2, 152.0, 142.7, 149.7);
   ctx.bezierCurveTo(142.3, 147.5, 142.7, 137.9, 142.7, 136.1);
   ctx.bezierCurveTo(142.7, 134.3, 134.5, 119.8, 141.4, 117.1);
   ctx.bezierCurveTo(145.0, 115.6, 145.4, 124.8, 145.4, 124.8);
   ctx.lineTo(148.6, 132.0);
   ctx.bezierCurveTo(148.6, 132.0, 148.2, 133.8, 157.7, 135.7);
   ctx.bezierCurveTo(164.4, 136.9, 162.2, 146.1, 167.7, 145.2);
   ctx.bezierCurveTo(173.1, 144.3, 176.3, 142.9, 176.3, 142.9);
   ctx.bezierCurveTo(181.7, 152.0, 183.6, 149.3, 186.3, 150.6);
   ctx.bezierCurveTo(189.0, 152.0, 198.9, 155.2, 189.0, 161.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(207.2, 212.8);
   ctx.bezierCurveTo(209.8, 217.6, 213.1, 218.7, 209.0, 222.8);
   ctx.bezierCurveTo(204.9, 226.9, 208.1, 228.7, 203.5, 231.4);
   ctx.bezierCurveTo(203.1, 228.8, 194.5, 216.9, 193.1, 213.7);
   ctx.bezierCurveTo(191.7, 210.5, 193.5, 200.1, 193.1, 197.4);
   ctx.bezierCurveTo(192.6, 194.7, 193.5, 189.2, 192.2, 182.9);
   ctx.bezierCurveTo(190.8, 176.5, 198.1, 168.8, 198.1, 168.8);
   ctx.bezierCurveTo(198.1, 168.8, 199.4, 172.4, 199.4, 173.8);
   ctx.bezierCurveTo(199.4, 175.1, 205.3, 184.7, 209.0, 184.7);
   ctx.bezierCurveTo(212.6, 184.7, 213.1, 195.2, 213.1, 197.8);
   ctx.bezierCurveTo(213.1, 204.2, 204.4, 207.8, 207.2, 212.8);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(235.3, 158.4);
   ctx.bezierCurveTo(234.4, 163.3, 233.5, 170.2, 226.7, 171.5);
   ctx.bezierCurveTo(219.9, 172.9, 224.4, 171.5, 219.9, 172.9);
   ctx.bezierCurveTo(215.3, 174.2, 215.3, 177.4, 215.3, 177.4);
   ctx.bezierCurveTo(215.3, 177.4, 200.8, 167.8, 204.9, 154.7);
   ctx.bezierCurveTo(207.2, 147.5, 217.7, 146.4, 219.0, 147.0);
   ctx.bezierCurveTo(221.7, 148.4, 225.3, 153.4, 228.5, 153.8);
   ctx.bezierCurveTo(231.7, 154.3, 236.0, 154.8, 235.3, 158.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(231.7, 148.4);
   ctx.bezierCurveTo(228.6, 139.7, 243.0, 134.3, 243.0, 134.3);
   ctx.bezierCurveTo(247.1, 136.1, 238.0, 143.4, 238.0, 143.4);
   ctx.bezierCurveTo(238.0, 143.4, 245.3, 142.9, 245.3, 144.3);
   ctx.bezierCurveTo(245.3, 145.6, 234.4, 156.1, 231.7, 148.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(267.1, 224.2);
   ctx.bezierCurveTo(263.9, 221.9, 266.2, 220.1, 266.2, 220.1);
   ctx.bezierCurveTo(269.3, 220.5, 270.2, 226.4, 267.1, 224.2);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(274.8, 232.8);
   ctx.bezierCurveTo(270.7, 231.4, 274.8, 228.2, 274.8, 228.2);
   ctx.bezierCurveTo(278.0, 229.2, 278.9, 234.1, 274.8, 232.8);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(277.5, 221.9);
   ctx.bezierCurveTo(272.5, 223.7, 273.4, 215.5, 273.4, 215.5);
   ctx.bezierCurveTo(274.8, 215.1, 282.5, 220.1, 277.5, 221.9);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(271.2, 188.8);
   ctx.bezierCurveTo(271.2, 186.5, 263.4, 191.9, 261.6, 194.2);
   ctx.bezierCurveTo(259.8, 196.5, 254.4, 198.3, 254.4, 196.0);
   ctx.bezierCurveTo(254.4, 193.8, 257.1, 186.9, 254.8, 185.6);
   ctx.bezierCurveTo(252.5, 184.2, 247.6, 189.7, 245.3, 187.9);
   ctx.bezierCurveTo(243.0, 186.0, 243.0, 183.3, 243.0, 183.3);
   ctx.bezierCurveTo(243.0, 183.3, 243.0, 178.3, 252.1, 177.4);
   ctx.bezierCurveTo(261.2, 176.5, 256.2, 176.5, 255.7, 172.9);
   ctx.bezierCurveTo(255.3, 169.2, 259.8, 172.4, 261.2, 174.7);
   ctx.bezierCurveTo(262.5, 177.0, 263.0, 175.1, 268.4, 174.7);
   ctx.bezierCurveTo(273.9, 174.2, 275.2, 175.1, 280.2, 181.0);
   ctx.bezierCurveTo(285.2, 186.9, 287.5, 185.1, 282.0, 194.7);
   ctx.bezierCurveTo(276.6, 204.2, 271.2, 191.0, 271.2, 188.8);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(283.0, 212.4);
   ctx.bezierCurveTo(277.5, 210.1, 282.5, 207.4, 282.5, 207.4);
   ctx.bezierCurveTo(285.2, 207.4, 288.4, 214.6, 283.0, 212.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(284.3, 173.8);
   ctx.bezierCurveTo(284.3, 173.8, 286.1, 167.9, 275.2, 170.6);
   ctx.bezierCurveTo(264.3, 173.3, 268.0, 168.8, 268.9, 167.0);
   ctx.bezierCurveTo(269.8, 165.2, 278.0, 164.7, 279.8, 166.1);
   ctx.bezierCurveTo(281.6, 167.4, 285.7, 160.2, 285.7, 160.2);
   ctx.bezierCurveTo(285.7, 160.2, 287.9, 164.3, 290.2, 169.2);
   ctx.bezierCurveTo(292.5, 174.2, 284.3, 173.8, 284.3, 173.8);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(289.8, 152.9);
   ctx.bezierCurveTo(293.0, 145.2, 297.5, 150.6, 297.5, 150.6);
   ctx.bezierCurveTo(301.6, 151.5, 288.4, 156.1, 289.8, 152.9);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(295.2, 208.7);
   ctx.bezierCurveTo(291.6, 205.1, 291.1, 202.4, 291.6, 198.7);
   ctx.bezierCurveTo(292.0, 195.1, 298.4, 190.1, 298.4, 190.1);
   ctx.bezierCurveTo(299.7, 190.1, 299.3, 201.0, 300.2, 202.4);
   ctx.bezierCurveTo(301.1, 203.7, 298.8, 212.4, 295.2, 208.7);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(300.7, 226.9);
   ctx.bezierCurveTo(295.7, 226.0, 301.6, 221.0, 301.6, 221.0);
   ctx.bezierCurveTo(305.2, 222.3, 305.6, 227.8, 300.7, 226.9);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(313.8, 94.4);
   ctx.bezierCurveTo(310.7, 88.2, 316.1, 90.7, 316.1, 90.7);
   ctx.bezierCurveTo(319.3, 92.5, 314.3, 95.3, 313.8, 94.4);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(342.0, 112.5);
   ctx.bezierCurveTo(342.0, 112.5, 342.4, 120.2, 338.8, 117.1);
   ctx.bezierCurveTo(335.1, 113.9, 342.0, 112.5, 342.0, 112.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(327.0, 85.7);
   ctx.bezierCurveTo(331.1, 88.0, 323.3, 90.3, 322.4, 88.9);
   ctx.bezierCurveTo(319.2, 84.0, 327.0, 85.7, 327.0, 85.7);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(319.7, 131.1);
   ctx.bezierCurveTo(322.9, 132.0, 330.2, 125.2, 330.2, 125.2);
   ctx.bezierCurveTo(333.8, 127.0, 333.3, 132.0, 335.1, 132.0);
   ctx.bezierCurveTo(337.0, 132.0, 343.3, 137.0, 337.9, 137.5);
   ctx.bezierCurveTo(321.5, 138.8, 332.4, 137.9, 324.3, 137.5);
   ctx.bezierCurveTo(316.1, 137.0, 316.5, 130.2, 319.7, 131.1);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(318.8, 185.1);
   ctx.bezierCurveTo(318.8, 182.9, 323.8, 182.0, 323.8, 182.0);
   ctx.bezierCurveTo(326.1, 184.7, 318.8, 187.4, 318.8, 185.1);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(331.1, 211.9);
   ctx.bezierCurveTo(329.2, 207.4, 337.0, 204.6, 337.0, 204.6);
   ctx.bezierCurveTo(337.9, 207.4, 332.9, 216.4, 331.1, 211.9);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(339.7, 196.5);
   ctx.bezierCurveTo(337.0, 195.1, 333.3, 195.1, 332.4, 192.4);
   ctx.bezierCurveTo(331.5, 189.7, 326.1, 199.7, 321.5, 193.8);
   ctx.bezierCurveTo(321.5, 193.8, 327.4, 191.9, 328.3, 190.6);
   ctx.bezierCurveTo(329.2, 189.2, 327.0, 184.7, 330.6, 185.1);
   ctx.bezierCurveTo(334.2, 185.6, 334.2, 188.8, 334.2, 188.8);
   ctx.bezierCurveTo(334.2, 188.8, 342.0, 187.9, 342.0, 189.2);
   ctx.bezierCurveTo(342.0, 190.6, 342.4, 197.8, 339.7, 196.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(350.1, 186.9);
   ctx.bezierCurveTo(348.8, 188.8, 341.5, 186.9, 341.5, 185.1);
   ctx.bezierCurveTo(341.5, 183.3, 348.3, 183.3, 348.3, 183.3);
   ctx.bezierCurveTo(348.3, 183.3, 351.5, 185.1, 350.1, 186.9);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(350.1, 128.1);
   ctx.bezierCurveTo(350.1, 128.3, 350.1, 128.4, 350.1, 128.4);
   ctx.bezierCurveTo(350.1, 128.3, 350.1, 128.2, 350.1, 128.1);
   ctx.bezierCurveTo(349.7, 126.4, 348.3, 117.3, 357.4, 123.9);
   ctx.bezierCurveTo(351.9, 122.2, 350.0, 126.7, 350.1, 128.1);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(363.3, 186.5);
   ctx.lineTo(358.3, 183.8);
   ctx.bezierCurveTo(358.3, 183.8, 354.7, 184.7, 353.8, 182.9);
   ctx.bezierCurveTo(352.8, 181.0, 356.0, 180.1, 356.0, 180.1);
   ctx.bezierCurveTo(369.6, 182.4, 363.3, 186.5, 363.3, 186.5);
   ctx.closePath();
   
   // layer1/Compound Path/Path
   ctx.moveTo(383.7, 177.9);
   ctx.bezierCurveTo(381.0, 173.3, 386.4, 173.8, 386.4, 173.8);
   ctx.bezierCurveTo(386.4, 173.8, 386.4, 182.4, 383.7, 177.9);
   ctx.closePath();
   
/*    ctx.globalCompositeOperation = "destination-out"; */
/*    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; */
   ctx.fillStyle = "rgb(97, 98, 100)";

   ctx.shadowOffsetY = 1.0;
   ctx.shadowColor = "rgb(255, 255, 255)";
   
   ctx.fill();
   
   // draw box to cover bottom white strip
   ctx.clearRect(180, 310, 120, 4);

   ctx.restore();
}

$(function()
{
   init_tree();
   if (typeof init === "function")
   {
      init();
   }
});