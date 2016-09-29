exports.make = function(blipp, scene) {
  var mW = blipp.getMarker().getWidth();
  var mH = blipp.getMarker().getHeight();
  var sW = blipp.getScreenWidth() * 1.003;
  var sH = blipp.getScreenHeight() * 1.004;
  exportObject = {};

  // RenderBin: 50
  exportObject.root = scene.addTransform('scene_mainScene');

  exportObject.butonFL2 = exportObject.root.addMesh('butonFL2.md2')
                     .setName('butonFL2')
                     .setTranslation(790.553711, -657.44873, 348.936188)
                     .setRotation(90.000008, 0, -0)
                     .setTexture('butons.png')
                     .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.butonFL5 = exportObject.root.addMesh('butonFL5.md2')
                     .setName('butonFL5')
                     .setTranslation(790.260376, -657.44873, 1132.132446)
                     .setRotation(90.000008, 0, -0)
                     .setTexture('butons.png')
                     .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.elevatorL = exportObject.root.addTransform('elevatorL')
                      .setTranslation(-182.052429, 277.797729, -1417.280151)
                      .setScale(0.2794, 0.2794, 0.2794);
  exportObject.elevatorL_tpath = exportObject.elevatorL.addMesh('elevatorL_tpath.md2')
                                 .setName('elevatorL_tpath')
                                 .setHidden(true)
                                 .setSides('both');
  exportObject.elevatorL_linked = exportObject.elevatorL_tpath.addMesh('elevatorL.md2')
                                        .setName('elevatorL_linked')
                                        .setLinkToParentGeometry('all')
                                        .setAlpha(0.650)
                                        .setTexture('grey.jpg')
                                        .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.elevatorR = exportObject.root.addTransform('elevatorR')
                      .setTranslation(-123.094803, 277.797729, -1417.280151)
                      .setScale(0.2794, 0.2794, 0.2794);
  exportObject.elevatorR_tpath = exportObject.elevatorR.addMesh('elevatorR_tpath.md2')
                                 .setName('elevatorR_tpath')
                                 .setHidden(true)
                                 .setSides('both');
  exportObject.elevatorR_linked = exportObject.elevatorR_tpath.addMesh('elevatorR.md2')
                                        .setName('elevatorR_linked')
                                        .setLinkToParentGeometry('all')
                                        .setAlpha(0.650)
                                        .setTexture('grey.jpg')
                                        .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Fl01_group = exportObject.root.addTransform('Fl01_group')
                       .setTranslation(-144.832703, -103.360733, -1426.207397)
                       .setScale(0.2794, 0.2794, 0.2794);
  exportObject.Fl01_group_tpath = exportObject.Fl01_group.addMesh('Fl01_group_tpath.md2')
                                   .setName('Fl01_group_tpath')
                                   .setHidden(true)
                                   .setSides('both');
  exportObject.Fl01_group_linked = exportObject.Fl01_group_tpath.addTransform('Fl01_group_linked')
                                          .setLinkToParentGeometry('all');

  exportObject.elevatorSign_fl1 = exportObject.Fl01_group_linked.addTransform('elevatorSign_fl1')
                                          .setTranslation(-201.523621, 1282.51709, 40.579102);
  exportObject.elevatorSign_fl1_tpath = exportObject.elevatorSign_fl1.addMesh('elevatorSign_fl1_tpath.md2')
                                               .setName('elevatorSign_fl1_tpath')
                                               .setHidden(true)
                                               .setSides('both');
  exportObject.elevatorSign_fl1_linked = exportObject.elevatorSign_fl1_tpath.addMesh('elevatorSign_fl1.md2')
                                                      .setName('elevatorSign_fl1_linked')
                                                      .setLinkToParentGeometry('all')
                                                      .setTexture('2ndFloor.jpg')
                                                      .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.FloorPlane01 = exportObject.Fl01_group_linked.addTransform('FloorPlane01')
                                      .setTranslation(-216.351685, -14.990753, 10.820313);
  exportObject.FloorPlane01_tpath = exportObject.FloorPlane01.addMesh('FloorPlane01_tpath.md2')
                                       .setName('FloorPlane01_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.FloorPlane01_linked = exportObject.FloorPlane01_tpath.addMesh('FloorPlane01.md2')
                                              .setName('FloorPlane01_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('diagonallines.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Foliage002 = exportObject.Fl01_group_linked.addTransform('Foliage002')
                                    .setTranslation(710.191284, 759.404541, 55.28418);
  exportObject.Foliage002_tpath = exportObject.Foliage002.addMesh('Foliage002_tpath.md2')
                                   .setName('Foliage002_tpath')
                                   .setHidden(true)
                                   .setSides('both');
  exportObject.Foliage002_linked = exportObject.Foliage002_tpath.addMesh('Foliage002.md2')
                                          .setName('Foliage002_linked')
                                          .setLinkToParentGeometry('all')

  exportObject.Icon_bookStore_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_bookStore_fl1')
                                            .setTranslation(-2531.19873, -1397.914307, 187.00293)
                                            .setRotation(90.000008, 0, -0);
  exportObject.Icon_bookStore_fl1_tpath = exportObject.Icon_bookStore_fl1.addMesh('Icon_bookStore_fl1_tpath.md2')
                                                   .setName('Icon_bookStore_fl1_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.Icon_bookStore_fl1_linked = exportObject.Icon_bookStore_fl1_tpath.addMesh('Icon_bookStore_fl1.md2')
                                                          .setName('Icon_bookStore_fl1_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setTexture('LightGrey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_coatcheck_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_coatcheck_fl1')
                                            .setTranslation(-2300.556641, 649.881592, 187.00293)
                                            .setRotation(90.000008, 0, -0);
  exportObject.Icon_coatcheck_fl1_tpath = exportObject.Icon_coatcheck_fl1.addMesh('Icon_coatcheck_fl1_tpath.md2')
                                                   .setName('Icon_coatcheck_fl1_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.Icon_coatcheck_fl1_linked = exportObject.Icon_coatcheck_fl1_tpath.addMesh('Icon_coatcheck_fl1.md2')
                                                          .setName('Icon_coatcheck_fl1_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setTexture('LightGrey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_computer_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_computer_fl1')
                                           .setTranslation(-873.651428, -755.339233, 187.00293)
                                           .setRotation(90.000008, 0, -0);
  exportObject.Icon_computer_fl1_tpath = exportObject.Icon_computer_fl1.addMesh('Icon_computer_fl1_tpath.md2')
                                                 .setName('Icon_computer_fl1_tpath')
                                                 .setHidden(true)
                                                 .setSides('both');
  exportObject.Icon_computer_fl1_linked = exportObject.Icon_computer_fl1_tpath.addMesh('Icon_computer_fl1.md2')
                                                        .setName('Icon_computer_fl1_linked')
                                                        .setLinkToParentGeometry('all')
                                                        .setTexture('LightGrey.jpg')
                                                        .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_disable_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_disable_fl1')
                                          .setTranslation(-2305.908203, -551.095032, 187.00293)
                                          .setRotation(90.000008, 0, -0);
  exportObject.Icon_disable_fl1_tpath = exportObject.Icon_disable_fl1.addMesh('Icon_disable_fl1_tpath.md2')
                                               .setName('Icon_disable_fl1_tpath')
                                               .setHidden(true)
                                               .setSides('both');
  exportObject.Icon_disable_fl1_linked = exportObject.Icon_disable_fl1_tpath.addMesh('Icon_disable_fl1.md2')
                                                      .setName('Icon_disable_fl1_linked')
                                                      .setLinkToParentGeometry('all')
                                                      .setTexture('LightGrey.jpg')
                                                      .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_food_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_food_fl1')
                                       .setTranslation(1889.988037, -640.262085, 187.00293)
                                       .setRotation(90.000008, 0, -0);
  exportObject.Icon_food_fl1_tpath = exportObject.Icon_food_fl1.addMesh('Icon_food_fl1_tpath.md2')
                                         .setName('Icon_food_fl1_tpath')
                                         .setHidden(true)
                                         .setSides('both');
  exportObject.Icon_food_fl1_linked = exportObject.Icon_food_fl1_tpath.addMesh('Icon_food_fl1.md2')
                                                .setName('Icon_food_fl1_linked')
                                                .setLinkToParentGeometry('all')
                                                .setTexture('LightGrey.jpg')
                                                .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_phone_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_phone_fl1')
                                        .setTranslation(-653.503601, -744.878174, 187.00293)
                                        .setRotation(90.000008, 0, -0);
  exportObject.Icon_phone_fl1_tpath = exportObject.Icon_phone_fl1.addMesh('Icon_phone_fl1_tpath.md2')
                                           .setName('Icon_phone_fl1_tpath')
                                           .setHidden(true)
                                           .setSides('both');
  exportObject.Icon_phone_fl1_linked = exportObject.Icon_phone_fl1_tpath.addMesh('Icon_phone_fl1.md2')
                                                  .setName('Icon_phone_fl1_linked')
                                                  .setLinkToParentGeometry('all')
                                                  .setTexture('LightGrey.jpg')
                                                  .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_question = exportObject.Fl01_group_linked.addTransform('Icon_question')
                                       .setTranslation(-1985.859375, 865.993408, 197.127441)
                                       .setRotation(90.000008, 0, -0);
  exportObject.Icon_question_tpath = exportObject.Icon_question.addMesh('Icon_question_tpath.md2')
                                         .setName('Icon_question_tpath')
                                         .setHidden(true)
                                         .setSides('both');
  exportObject.Icon_question_linked = exportObject.Icon_question_tpath.addMesh('Icon_question.md2')
                                                .setName('Icon_question_linked')
                                                .setLinkToParentGeometry('all')
                                                .setTexture('LightGrey.jpg')
                                                .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_table_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_table_fl1')
                                        .setTranslation(-1968.723633, -395.600891, 187.00293)
                                        .setRotation(90.000008, 0, -0);
  exportObject.Icon_table_fl1_tpath = exportObject.Icon_table_fl1.addMesh('Icon_table_fl1_tpath.md2')
                                           .setName('Icon_table_fl1_tpath')
                                           .setHidden(true)
                                           .setSides('both');
  exportObject.Icon_table_fl1_linked = exportObject.Icon_table_fl1_tpath.addMesh('Icon_table_fl1.md2')
                                                  .setName('Icon_table_fl1_linked')
                                                  .setLinkToParentGeometry('all')
                                                  .setTexture('LightGrey.jpg')
                                                  .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_theather_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_theather_fl1')
                                           .setTranslation(1464.30835, -1026.209351, 187.00293)
                                           .setRotation(90.000008, 0, -0);
  exportObject.Icon_theather_fl1_tpath = exportObject.Icon_theather_fl1.addMesh('Icon_theather_fl1_tpath.md2')
                                                 .setName('Icon_theather_fl1_tpath')
                                                 .setHidden(true)
                                                 .setSides('both');
  exportObject.Icon_theather_fl1_linked = exportObject.Icon_theather_fl1_tpath.addMesh('Icon_theather_fl1.md2')
                                                        .setName('Icon_theather_fl1_linked')
                                                        .setLinkToParentGeometry('all')
                                                        .setTexture('LightGrey.jpg')
                                                        .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_toilets_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_toilets_fl1')
                                          .setTranslation(-441.032288, -751.56189, 187.00293)
                                          .setRotation(90.000008, 0, -0);
  exportObject.Icon_toilets_fl1_tpath = exportObject.Icon_toilets_fl1.addMesh('Icon_toilets_fl1_tpath.md2')
                                               .setName('Icon_toilets_fl1_tpath')
                                               .setHidden(true)
                                               .setSides('both');
  exportObject.Icon_toilets_fl1_linked = exportObject.Icon_toilets_fl1_tpath.addMesh('Icon_toilets_fl1.md2')
                                                      .setName('Icon_toilets_fl1_linked')
                                                      .setLinkToParentGeometry('all')
                                                      .setTexture('LightGrey.jpg')
                                                      .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_wireless_fl1 = exportObject.Fl01_group_linked.addTransform('Icon_wireless_fl1')
                                           .setTranslation(-960.211975, 257.481049, 187.00293)
                                           .setRotation(90.000008, 0, -0);
  exportObject.Icon_wireless_fl1_tpath = exportObject.Icon_wireless_fl1.addMesh('Icon_wireless_fl1_tpath.md2')
                                                 .setName('Icon_wireless_fl1_tpath')
                                                 .setHidden(true)
                                                 .setSides('both');
  exportObject.Icon_wireless_fl1_linked = exportObject.Icon_wireless_fl1_tpath.addMesh('Icon_wireless_fl1.md2')
                                                        .setName('Icon_wireless_fl1_linked')
                                                        .setLinkToParentGeometry('all')
                                                        .setTexture('LightGrey.jpg')
                                                        .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor01 = exportObject.Fl01_group_linked.addTransform('MainFloor01')
                                     .setTranslation(-1024.787598, -172.224182, -39.179199);
  exportObject.MainFloor01_tpath = exportObject.MainFloor01.addMesh('MainFloor01_tpath.md2')
                                     .setName('MainFloor01_tpath')
                                     .setHidden(true)
                                     .setSides('both');
  exportObject.MainFloor01_linked = exportObject.MainFloor01_tpath.addMesh('MainFloor01.md2')
                                            .setName('MainFloor01_linked')
                                            .setLinkToParentGeometry('all')
                                            .setTexture('LightGrey.jpg')
                                            .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.mainFloorGarden_fl1 = exportObject.Fl01_group_linked.addTransform('mainFloorGarden_fl1')
                                             .setTranslation(1497.7771, 433.552338, 10.820313);
  exportObject.mainFloorGarden_fl1_tpath = exportObject.mainFloorGarden_fl1.addMesh('mainFloorGarden_fl1_tpath.md2')
                                                     .setName('mainFloorGarden_fl1_tpath')
                                                     .setHidden(true)
                                                     .setSides('both');
  exportObject.mainFloorGarden_fl1_linked = exportObject.mainFloorGarden_fl1_tpath.addMesh('mainFloorGarden_fl1.md2')
                                                            .setName('mainFloorGarden_fl1_linked')
                                                            .setLinkToParentGeometry('all')
                                                            .setTexture('garden.jpg')
                                                            .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.number1 = exportObject.Fl01_group_linked.addTransform('number1')
                                 .setTranslation(-3718.906738, -111.198517, 10.820313)
                                 .setRotation(90.000008, 0, -0)
                                 .setScale(7.504149, 7.504149, 7.504149);
  exportObject.number1_tpath = exportObject.number1.addMesh('number1_tpath.md2')
                             .setName('number1_tpath')
                             .setHidden(true)
                             .setSides('both');
  exportObject.number1_linked = exportObject.number1_tpath.addMesh('number1.md2')
                                    .setName('number1_linked')
                                    .setLinkToParentGeometry('all')
                                    .setColor([0.000, 0.000, 0.000])

  exportObject.scalator_fl001b = exportObject.Fl01_group_linked.addTransform('scalator_fl001b')
                                         .setTranslation(1136.474609, -191.83374, 311.390625)
                                         .setRotation(90.000008, 0, -0)
                                         .setScale(2.83825, 2.83825, 2.83825);
  exportObject.scalator_fl001b_tpath = exportObject.scalator_fl001b.addMesh('scalator_fl001b_tpath.md2')
                                             .setName('scalator_fl001b_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.scalator_fl001b_linked = exportObject.scalator_fl001b_tpath.addMesh('scalator_fl001b.md2')
                                                    .setName('scalator_fl001b_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setAlpha(0.650)
                                                    .setTexture('grey.jpg')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.scalator_fl001b001 = exportObject.Fl01_group_linked.addTransform('scalator_fl001b001')
                                            .setTranslation(-423.300659, -812.642334, 311.390625)
                                            .setRotation(90.000008, 0, -0)
                                            .setScale(2.83825, 2.83825, 2.83825);
  exportObject.scalator_fl001b001_tpath = exportObject.scalator_fl001b001.addMesh('scalator_fl001b001_tpath.md2')
                                                   .setName('scalator_fl001b001_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.scalator_fl001b001_linked = exportObject.scalator_fl001b001_tpath.addMesh('scalator_fl001b001.md2')
                                                          .setName('scalator_fl001b001_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setAlpha(0.650)
                                                          .setTexture('grey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StraightStair_fl_001b = exportObject.Fl01_group_linked.addTransform('StraightStair_fl_001b')
                                               .setTranslation(3665.181396, 121.299362, 52.296875)
                                               .setRotation(-0, 0, 90.575806);
  exportObject.StraightStair_fl_001b_tpath = exportObject.StraightStair_fl_001b.addMesh('StraightStair_fl_001b_tpath.md2')
                                                         .setName('StraightStair_fl_001b_tpath')
                                                         .setHidden(true)
                                                         .setSides('both');
  exportObject.StraightStair_fl_001b_linked = exportObject.StraightStair_fl_001b_tpath.addMesh('StraightStair_fl_001b.md2')
                                                                .setName('StraightStair_fl_001b_linked')
                                                                .setLinkToParentGeometry('all')
                                                                .setAlpha(0.650)
                                                                .setTexture('grey.jpg')
                                                                .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StraightStair_fl_001c = exportObject.Fl01_group_linked.addTransform('StraightStair_fl_001c')
                                               .setTranslation(2399.229004, 624.036621, -613.462891);
  exportObject.StraightStair_fl_001c_tpath = exportObject.StraightStair_fl_001c.addMesh('StraightStair_fl_001c_tpath.md2')
                                                         .setName('StraightStair_fl_001c_tpath')
                                                         .setHidden(true)
                                                         .setSides('both');
  exportObject.StraightStair_fl_001c_linked = exportObject.StraightStair_fl_001c_tpath.addMesh('StraightStair_fl_001c.md2')
                                                                .setName('StraightStair_fl_001c_linked')
                                                                .setLinkToParentGeometry('all')
                                                                .setAlpha(0.650)
                                                                .setTexture('grey.jpg')
                                                                .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StraightStair_fl_01 = exportObject.Fl01_group_linked.addTransform('StraightStair_fl_01')
                                             .setTranslation(231.93335, -77.686279, 52.296875)
                                             .setRotation(-0, 0, 90.575806);
  exportObject.StraightStair_fl_01_tpath = exportObject.StraightStair_fl_01.addMesh('StraightStair_fl_01_tpath.md2')
                                                     .setName('StraightStair_fl_01_tpath')
                                                     .setHidden(true)
                                                     .setSides('both');
  exportObject.StraightStair_fl_01_linked = exportObject.StraightStair_fl_01_tpath.addMesh('StraightStair_fl_01.md2')
                                                            .setName('StraightStair_fl_01_linked')
                                                            .setLinkToParentGeometry('all')
                                                            .setAlpha(0.650)
                                                            .setTexture('grey.jpg')
                                                            .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.treeBush = exportObject.Fl01_group_linked.addTransform('treeBush')
                                  .setTranslation(710.191284, 759.404541, 55.28418);
  exportObject.treeBush_tpath = exportObject.treeBush.addMesh('treeBush_tpath.md2')
                               .setName('treeBush_tpath')
                               .setHidden(true)
                               .setSides('both');
  exportObject.treeBush_linked = exportObject.treeBush_tpath.addMesh('treeBush.md2')
                                      .setName('treeBush_linked')
                                      .setLinkToParentGeometry('all')

  exportObject.Fl02_group = exportObject.root.addTransform('Fl02_group')
                       .setTranslation(-145.424988, -102.331642, -1155.549194)
                       .setScale(0.282103, 0.282103, 0.282103);
  exportObject.Fl02_group_tpath = exportObject.Fl02_group.addMesh('Fl02_group_tpath.md2')
                                   .setName('Fl02_group_tpath')
                                   .setHidden(true)
                                   .setSides('both');
  exportObject.Fl02_group_linked = exportObject.Fl02_group_tpath.addTransform('Fl02_group_linked')
                                          .setLinkToParentGeometry('all');

  exportObject.FloorPlane02 = exportObject.Fl02_group_linked.addTransform('FloorPlane02')
                                      .setTranslation(457.305176, 0.000397, -304.265137);
  exportObject.FloorPlane02_tpath = exportObject.FloorPlane02.addMesh('FloorPlane02_tpath.md2')
                                       .setName('FloorPlane02_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.FloorPlane02_linked = exportObject.FloorPlane02_tpath.addMesh('FloorPlane02.md2')
                                              .setName('FloorPlane02_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('diagonallines.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_bookStore_fl2 = exportObject.Fl02_group_linked.addTransform('Icon_bookStore_fl2')
                                            .setTranslation(-923.91748, 1189.384155, -128.08252)
                                            .setRotation(90.000008, 0, -0);
  exportObject.Icon_bookStore_fl2_tpath = exportObject.Icon_bookStore_fl2.addMesh('Icon_bookStore_fl2_tpath.md2')
                                                   .setName('Icon_bookStore_fl2_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.Icon_bookStore_fl2_linked = exportObject.Icon_bookStore_fl2_tpath.addMesh('Icon_bookStore_fl2.md2')
                                                          .setName('Icon_bookStore_fl2_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setTexture('LightGrey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_coffe_fl2 = exportObject.Fl02_group_linked.addTransform('Icon_coffe_fl2')
                                        .setTranslation(1394.588379, -906.837402, -128.08252)
                                        .setRotation(90.000008, 0, -0);
  exportObject.Icon_coffe_fl2_tpath = exportObject.Icon_coffe_fl2.addMesh('Icon_coffe_fl2_tpath.md2')
                                           .setName('Icon_coffe_fl2_tpath')
                                           .setHidden(true)
                                           .setSides('both');
  exportObject.Icon_coffe_fl2_linked = exportObject.Icon_coffe_fl2_tpath.addMesh('Icon_coffe_fl2.md2')
                                                  .setName('Icon_coffe_fl2_linked')
                                                  .setLinkToParentGeometry('all')
                                                  .setTexture('2ndFloor.jpg')
                                                  .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_computer_fl2 = exportObject.Fl02_group_linked.addTransform('Icon_computer_fl2')
                                           .setTranslation(1764.459595, -906.837402, -128.08252)
                                           .setRotation(90.000008, 0, -0);
  exportObject.Icon_computer_fl2_tpath = exportObject.Icon_computer_fl2.addMesh('Icon_computer_fl2_tpath.md2')
                                                 .setName('Icon_computer_fl2_tpath')
                                                 .setHidden(true)
                                                 .setSides('both');
  exportObject.Icon_computer_fl2_linked = exportObject.Icon_computer_fl2_tpath.addMesh('Icon_computer_fl2.md2')
                                                        .setName('Icon_computer_fl2_linked')
                                                        .setLinkToParentGeometry('all')
                                                        .setTexture('LightGrey.jpg')
                                                        .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_question_fl2 = exportObject.Fl02_group_linked.addTransform('Icon_question_fl2')
                                           .setTranslation(-392.09082, -390.175903, -117.958496)
                                           .setRotation(90.000008, 0, -0);
  exportObject.Icon_question_fl2_tpath = exportObject.Icon_question_fl2.addMesh('Icon_question_fl2_tpath.md2')
                                                 .setName('Icon_question_fl2_tpath')
                                                 .setHidden(true)
                                                 .setSides('both');
  exportObject.Icon_question_fl2_linked = exportObject.Icon_question_fl2_tpath.addMesh('Icon_question_fl2.md2')
                                                        .setName('Icon_question_fl2_linked')
                                                        .setLinkToParentGeometry('all')
                                                        .setTexture('LightGrey.jpg')
                                                        .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_toilets003 = exportObject.Fl02_group_linked.addTransform('Icon_toilets003')
                                         .setTranslation(402.720215, -1002.262085, -128.08252)
                                         .setRotation(90.000008, 0, -0);
  exportObject.Icon_toilets003_tpath = exportObject.Icon_toilets003.addMesh('Icon_toilets003_tpath.md2')
                                             .setName('Icon_toilets003_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.Icon_toilets003_linked = exportObject.Icon_toilets003_tpath.addMesh('Icon_toilets003.md2')
                                                    .setName('Icon_toilets003_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setTexture('LightGrey.jpg')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_toilets_fl2 = exportObject.Fl02_group_linked.addTransform('Icon_toilets_fl2')
                                          .setTranslation(767.946777, -704.115601, -128.08252)
                                          .setRotation(90.000008, 0, -0);
  exportObject.Icon_toilets_fl2_tpath = exportObject.Icon_toilets_fl2.addMesh('Icon_toilets_fl2_tpath.md2')
                                               .setName('Icon_toilets_fl2_tpath')
                                               .setHidden(true)
                                               .setSides('both');
  exportObject.Icon_toilets_fl2_linked = exportObject.Icon_toilets_fl2_tpath.addMesh('Icon_toilets_fl2.md2')
                                                      .setName('Icon_toilets_fl2_linked')
                                                      .setLinkToParentGeometry('all')
                                                      .setTexture('2ndFloor.jpg')
                                                      .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_toilets_fl2b = exportObject.Fl02_group_linked.addTransform('Icon_toilets_fl2b')
                                           .setTranslation(402.720215, -1002.262085, -128.08252)
                                           .setRotation(90.000008, 0, -0);
  exportObject.Icon_toilets_fl2b_tpath = exportObject.Icon_toilets_fl2b.addMesh('Icon_toilets_fl2b_tpath.md2')
                                                 .setName('Icon_toilets_fl2b_tpath')
                                                 .setHidden(true)
                                                 .setSides('both');
  exportObject.Icon_toilets_fl2b_linked = exportObject.Icon_toilets_fl2b_tpath.addMesh('Icon_toilets_fl2b.md2')
                                                        .setName('Icon_toilets_fl2b_linked')
                                                        .setLinkToParentGeometry('all')
                                                        .setTexture('LightGrey.jpg')
                                                        .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.iconGirl = exportObject.Fl02_group_linked.addMesh('iconGirl.md2')
                                  .setName('iconGirl')
                                  .setTranslation(-2444.586426, -1209.091919, 58.322754)
                                  .setRotation(90.000008, 0, -0)
                                  .setScale(1.058144, 1.058144, 1.058144)
                                  .setTexture('iconGirl.png')
                                  .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor02 = exportObject.Fl02_group_linked.addTransform('MainFloor02')
                                     .setTranslation(-2399.474121, -507.058716, -304.265137);
  exportObject.MainFloor02_tpath = exportObject.MainFloor02.addMesh('MainFloor02_tpath.md2')
                                     .setName('MainFloor02_tpath')
                                     .setHidden(true)
                                     .setSides('both');
  exportObject.MainFloor02_linked = exportObject.MainFloor02_tpath.addMesh('MainFloor02.md2')
                                            .setName('MainFloor02_linked')
                                            .setLinkToParentGeometry('all')
                                            .setTexture('2ndFloor.jpg')
                                            .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor02b = exportObject.Fl02_group_linked.addTransform('MainFloor02b')
                                      .setTranslation(-739.358887, -465.764465, -304.265137);
  exportObject.MainFloor02b_tpath = exportObject.MainFloor02b.addMesh('MainFloor02b_tpath.md2')
                                       .setName('MainFloor02b_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.MainFloor02b_linked = exportObject.MainFloor02b_tpath.addMesh('MainFloor02b.md2')
                                              .setName('MainFloor02b_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('2ndFloor.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor02c = exportObject.Fl02_group_linked.addTransform('MainFloor02c')
                                      .setTranslation(1450.875488, -1191.005005, -354.265137);
  exportObject.MainFloor02c_tpath = exportObject.MainFloor02c.addMesh('MainFloor02c_tpath.md2')
                                       .setName('MainFloor02c_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.MainFloor02c_linked = exportObject.MainFloor02c_tpath.addMesh('MainFloor02c.md2')
                                              .setName('MainFloor02c_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('2ndFloor.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor02d = exportObject.Fl02_group_linked.addTransform('MainFloor02d')
                                      .setTranslation(-739.358887, -465.764465, -354.265137);
  exportObject.MainFloor02d_tpath = exportObject.MainFloor02d.addMesh('MainFloor02d_tpath.md2')
                                       .setName('MainFloor02d_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.MainFloor02d_linked = exportObject.MainFloor02d_tpath.addMesh('MainFloor02d.md2')
                                              .setName('MainFloor02d_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('2ndFloor.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor02e = exportObject.Fl02_group_linked.addTransform('MainFloor02e')
                                      .setTranslation(1577.540649, -761.849976, -354.265137);
  exportObject.MainFloor02e_tpath = exportObject.MainFloor02e.addMesh('MainFloor02e_tpath.md2')
                                       .setName('MainFloor02e_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.MainFloor02e_linked = exportObject.MainFloor02e_tpath.addMesh('MainFloor02e.md2')
                                              .setName('MainFloor02e_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('2ndFloor.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.number2 = exportObject.Fl02_group_linked.addTransform('number2')
                                 .setTranslation(-3683.530273, 75.890015, -304.265137)
                                 .setRotation(90.000008, 0, -0)
                                 .setScale(7.50415, 7.50415, 7.50415);
  exportObject.number2_tpath = exportObject.number2.addMesh('number2_tpath.md2')
                             .setName('number2_tpath')
                             .setHidden(true)
                             .setSides('both');
  exportObject.number2_linked = exportObject.number2_tpath.addMesh('number2.md2')
                                    .setName('number2_linked')
                                    .setLinkToParentGeometry('all')
                                    .setColor([0.000, 0.000, 0.000])

  exportObject.scalator_fl001b002 = exportObject.Fl02_group_linked.addTransform('scalator_fl001b002')
                                            .setTranslation(-423.301086, -812.643066, -15.176758)
                                            .setRotation(90.000008, 0, -0)
                                            .setScale(2.83825, 2.83825, 2.83825);
  exportObject.scalator_fl001b002_tpath = exportObject.scalator_fl001b002.addMesh('scalator_fl001b002_tpath.md2')
                                                   .setName('scalator_fl001b002_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.scalator_fl001b002_linked = exportObject.scalator_fl001b002_tpath.addMesh('scalator_fl001b002.md2')
                                                          .setName('scalator_fl001b002_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setAlpha(0.650)
                                                          .setTexture('grey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StairBtn_fl2 = exportObject.Fl02_group_linked.addTransform('StairBtn_fl2')
                                      .setTranslation(-321.235352, 357.225983, -221.813477);
  exportObject.StairBtn_fl2_tpath = exportObject.StairBtn_fl2.addMesh('StairBtn_fl2_tpath.md2')
                                       .setName('StairBtn_fl2_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.StairBtn_fl2_linked = exportObject.StairBtn_fl2_tpath.addMesh('StairBtn_fl2.md2')
                                              .setName('StairBtn_fl2_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('2ndFloor.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StraightStair_fl_002c = exportObject.Fl02_group_linked.addTransform('StraightStair_fl_002c')
                                               .setTranslation(3665.181152, 121.298782, -256.297852)
                                               .setRotation(-0, 0, 90.575806);
  exportObject.StraightStair_fl_002c_tpath = exportObject.StraightStair_fl_002c.addMesh('StraightStair_fl_002c_tpath.md2')
                                                         .setName('StraightStair_fl_002c_tpath')
                                                         .setHidden(true)
                                                         .setSides('both');
  exportObject.StraightStair_fl_002c_linked = exportObject.StraightStair_fl_002c_tpath.addMesh('StraightStair_fl_002c.md2')
                                                                .setName('StraightStair_fl_002c_linked')
                                                                .setLinkToParentGeometry('all')
                                                                .setAlpha(0.650)
                                                                .setTexture('grey.jpg')
                                                                .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StraightStair_fl_02_c = exportObject.Fl02_group_linked.addTransform('StraightStair_fl_02_c')
                                               .setTranslation(231.932983, -77.686859, -278.475098)
                                               .setRotation(-0, 0, 90.575806);
  exportObject.StraightStair_fl_02_c_tpath = exportObject.StraightStair_fl_02_c.addMesh('StraightStair_fl_02_c_tpath.md2')
                                                         .setName('StraightStair_fl_02_c_tpath')
                                                         .setHidden(true)
                                                         .setSides('both');
  exportObject.StraightStair_fl_02_c_linked = exportObject.StraightStair_fl_02_c_tpath.addMesh('StraightStair_fl_02_c.md2')
                                                                .setName('StraightStair_fl_02_c_linked')
                                                                .setLinkToParentGeometry('all')
                                                                .setAlpha(0.650)
                                                                .setTexture('grey.jpg')
                                                                .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Fl03_group = exportObject.root.addTransform('Fl03_group')
                       .setTranslation(-144.832855, -103.36084, -957.189636)
                       .setScale(0.2794, 0.2794, 0.2794);
  exportObject.Fl03_group_tpath = exportObject.Fl03_group.addMesh('Fl03_group_tpath.md2')
                                   .setName('Fl03_group_tpath')
                                   .setHidden(true)
                                   .setSides('both');
  exportObject.Fl03_group_linked = exportObject.Fl03_group_tpath.addTransform('Fl03_group_linked')
                                          .setLinkToParentGeometry('all');

  exportObject.FloorPlane03 = exportObject.Fl03_group_linked.addTransform('FloorPlane03')
                                      .setTranslation(456.278778, 0.000397, -320.996582);
  exportObject.FloorPlane03_tpath = exportObject.FloorPlane03.addMesh('FloorPlane03_tpath.md2')
                                       .setName('FloorPlane03_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.FloorPlane03_linked = exportObject.FloorPlane03_tpath.addMesh('FloorPlane03.md2')
                                              .setName('FloorPlane03_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('diagonallines.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_question_fl3 = exportObject.Fl03_group_linked.addTransform('Icon_question_fl3')
                                           .setTranslation(-415.561462, -429.203705, -83.974121)
                                           .setRotation(90.000008, 0, -0);
  exportObject.Icon_question_fl3_tpath = exportObject.Icon_question_fl3.addMesh('Icon_question_fl3_tpath.md2')
                                                 .setName('Icon_question_fl3_tpath')
                                                 .setHidden(true)
                                                 .setSides('both');
  exportObject.Icon_question_fl3_linked = exportObject.Icon_question_fl3_tpath.addMesh('Icon_question_fl3.md2')
                                                        .setName('Icon_question_fl3_linked')
                                                        .setLinkToParentGeometry('all')
                                                        .setTexture('LightGrey.jpg')
                                                        .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor_fl300 = exportObject.Fl03_group_linked.addTransform('MainFloor_fl300')
                                         .setTranslation(-267.913086, 129.093155, -320.996582);
  exportObject.MainFloor_fl300_tpath = exportObject.MainFloor_fl300.addMesh('MainFloor_fl300_tpath.md2')
                                             .setName('MainFloor_fl300_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.MainFloor_fl300_linked = exportObject.MainFloor_fl300_tpath.addMesh('MainFloor_fl300.md2')
                                                    .setName('MainFloor_fl300_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setTexture('3rdFloor.png')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor_fl301 = exportObject.Fl03_group_linked.addTransform('MainFloor_fl301')
                                         .setTranslation(1149.408691, -926.692017, -320.996582);
  exportObject.MainFloor_fl301_tpath = exportObject.MainFloor_fl301.addMesh('MainFloor_fl301_tpath.md2')
                                             .setName('MainFloor_fl301_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.MainFloor_fl301_linked = exportObject.MainFloor_fl301_tpath.addMesh('MainFloor_fl301.md2')
                                                    .setName('MainFloor_fl301_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setTexture('3rdFloor.png')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor_fl302 = exportObject.Fl03_group_linked.addTransform('MainFloor_fl302')
                                         .setTranslation(1871.544556, -926.692017, -320.996582);
  exportObject.MainFloor_fl302_tpath = exportObject.MainFloor_fl302.addMesh('MainFloor_fl302_tpath.md2')
                                             .setName('MainFloor_fl302_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.MainFloor_fl302_linked = exportObject.MainFloor_fl302_tpath.addMesh('MainFloor_fl302.md2')
                                                    .setName('MainFloor_fl302_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setTexture('3rdFloor.png')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor_fl303 = exportObject.Fl03_group_linked.addTransform('MainFloor_fl303')
                                         .setTranslation(1149.408691, -926.692017, -320.996582);
  exportObject.MainFloor_fl303_tpath = exportObject.MainFloor_fl303.addMesh('MainFloor_fl303_tpath.md2')
                                             .setName('MainFloor_fl303_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.MainFloor_fl303_linked = exportObject.MainFloor_fl303_tpath.addMesh('MainFloor_fl303.md2')
                                                    .setName('MainFloor_fl303_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setTexture('3rdFloor.png')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.number3 = exportObject.Fl03_group_linked.addTransform('number3')
                                 .setTranslation(-3684.555176, 187.638077, -320.996582)
                                 .setRotation(90.000008, 0, -0)
                                 .setScale(7.504149, 7.504149, 7.504149);
  exportObject.number3_tpath = exportObject.number3.addMesh('number3_tpath.md2')
                             .setName('number3_tpath')
                             .setHidden(true)
                             .setSides('both');
  exportObject.number3_linked = exportObject.number3_tpath.addMesh('number3.md2')
                                    .setName('number3_linked')
                                    .setLinkToParentGeometry('all')
                                    .setColor([0.000, 0.000, 0.000])

  exportObject.scalator_fl001b003 = exportObject.Fl03_group_linked.addTransform('scalator_fl001b003')
                                            .setTranslation(-423.30011, -812.641968, -22.686279)
                                            .setRotation(90.000008, 0, -0)
                                            .setScale(2.83825, 2.83825, 2.83825);
  exportObject.scalator_fl001b003_tpath = exportObject.scalator_fl001b003.addMesh('scalator_fl001b003_tpath.md2')
                                                   .setName('scalator_fl001b003_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.scalator_fl001b003_linked = exportObject.scalator_fl001b003_tpath.addMesh('scalator_fl001b003.md2')
                                                          .setName('scalator_fl001b003_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setAlpha(0.650)
                                                          .setTexture('grey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StairBtn_fl3 = exportObject.Fl03_group_linked.addTransform('StairBtn_fl3')
                                      .setTranslation(6.537567, -241.467377, -238.545166);
  exportObject.StairBtn_fl3_tpath = exportObject.StairBtn_fl3.addMesh('StairBtn_fl3_tpath.md2')
                                       .setName('StairBtn_fl3_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.StairBtn_fl3_linked = exportObject.StairBtn_fl3_tpath.addMesh('StairBtn_fl3.md2')
                                              .setName('StairBtn_fl3_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('2ndFloor.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StraightStair_fl_003 = exportObject.Fl03_group_linked.addTransform('StraightStair_fl_003')
                                              .setTranslation(275.459412, -341.709503, -214.566406)
                                              .setRotation(-0, 0, 90.575806);
  exportObject.StraightStair_fl_003_tpath = exportObject.StraightStair_fl_003.addMesh('StraightStair_fl_003_tpath.md2')
                                                       .setName('StraightStair_fl_003_tpath')
                                                       .setHidden(true)
                                                       .setSides('both');
  exportObject.StraightStair_fl_003_linked = exportObject.StraightStair_fl_003_tpath.addMesh('StraightStair_fl_003.md2')
                                                              .setName('StraightStair_fl_003_linked')
                                                              .setLinkToParentGeometry('all')
                                                              .setAlpha(0.650)
                                                              .setTexture('grey.jpg')
                                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Fl04_group = exportObject.root.addTransform('Fl04_group')
                       .setTranslation(-144.832733, -103.36084, -720.105835)
                       .setScale(0.2794, 0.2794, 0.2794);
  exportObject.Fl04_group_tpath = exportObject.Fl04_group.addMesh('Fl04_group_tpath.md2')
                                   .setName('Fl04_group_tpath')
                                   .setHidden(true)
                                   .setSides('both');
  exportObject.Fl04_group_linked = exportObject.Fl04_group_tpath.addTransform('Fl04_group_linked')
                                          .setLinkToParentGeometry('all');

  exportObject.FloorPlane04 = exportObject.Fl04_group_linked.addTransform('FloorPlane04')
                                      .setTranslation(472.362305, 0.000397, -325.95459);
  exportObject.FloorPlane04_tpath = exportObject.FloorPlane04.addMesh('FloorPlane04_tpath.md2')
                                       .setName('FloorPlane04_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.FloorPlane04_linked = exportObject.FloorPlane04_tpath.addMesh('FloorPlane04.md2')
                                              .setName('FloorPlane04_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('diagonallines.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_question_fl004 = exportObject.Fl04_group_linked.addTransform('Icon_question_fl004')
                                             .setTranslation(-399.444336, -637.788574, -139.647949)
                                             .setRotation(90.000008, 0, -0);
  exportObject.Icon_question_fl004_tpath = exportObject.Icon_question_fl004.addMesh('Icon_question_fl004_tpath.md2')
                                                     .setName('Icon_question_fl004_tpath')
                                                     .setHidden(true)
                                                     .setSides('both');
  exportObject.Icon_question_fl004_linked = exportObject.Icon_question_fl004_tpath.addMesh('Icon_question_fl004.md2')
                                                            .setName('Icon_question_fl004_linked')
                                                            .setLinkToParentGeometry('all')
                                                            .setTexture('LightGrey.jpg')
                                                            .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_toilets004_fl004 = exportObject.Fl04_group_linked.addTransform('Icon_toilets004_fl004')
                                               .setTranslation(395.367188, -263.65976, -149.771973)
                                               .setRotation(90.000008, 0, -0);
  exportObject.Icon_toilets004_fl004_tpath = exportObject.Icon_toilets004_fl004.addMesh('Icon_toilets004_fl004_tpath.md2')
                                                         .setName('Icon_toilets004_fl004_tpath')
                                                         .setHidden(true)
                                                         .setSides('both');
  exportObject.Icon_toilets004_fl004_linked = exportObject.Icon_toilets004_fl004_tpath.addMesh('Icon_toilets004_fl004.md2')
                                                                .setName('Icon_toilets004_fl004_linked')
                                                                .setLinkToParentGeometry('all')
                                                                .setTexture('LightGrey.jpg')
                                                                .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor_fl400 = exportObject.Fl04_group_linked.addTransform('MainFloor_fl400')
                                         .setTranslation(-715.143982, -99.321869, -325.95459);
  exportObject.MainFloor_fl400_tpath = exportObject.MainFloor_fl400.addMesh('MainFloor_fl400_tpath.md2')
                                             .setName('MainFloor_fl400_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.MainFloor_fl400_linked = exportObject.MainFloor_fl400_tpath.addMesh('MainFloor_fl400.md2')
                                                    .setName('MainFloor_fl400_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setTexture('4fl.png')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor_fl401 = exportObject.Fl04_group_linked.addTransform('MainFloor_fl401')
                                         .setTranslation(-184.665283, -255.058197, -325.95459);
  exportObject.MainFloor_fl401_tpath = exportObject.MainFloor_fl401.addMesh('MainFloor_fl401_tpath.md2')
                                             .setName('MainFloor_fl401_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.MainFloor_fl401_linked = exportObject.MainFloor_fl401_tpath.addMesh('MainFloor_fl401.md2')
                                                    .setName('MainFloor_fl401_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setTexture('4fl.png')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor_fl402 = exportObject.Fl04_group_linked.addTransform('MainFloor_fl402')
                                         .setTranslation(-1504.292725, 694.77771, -375.95459);
  exportObject.MainFloor_fl402_tpath = exportObject.MainFloor_fl402.addMesh('MainFloor_fl402_tpath.md2')
                                             .setName('MainFloor_fl402_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.MainFloor_fl402_linked = exportObject.MainFloor_fl402_tpath.addMesh('MainFloor_fl402.md2')
                                                    .setName('MainFloor_fl402_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setTexture('4fl.png')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.MainFloor_fl403 = exportObject.Fl04_group_linked.addTransform('MainFloor_fl403')
                                         .setTranslation(-1495.571045, -1028.72229, -325.95459);
  exportObject.MainFloor_fl403_tpath = exportObject.MainFloor_fl403.addMesh('MainFloor_fl403_tpath.md2')
                                             .setName('MainFloor_fl403_tpath')
                                             .setHidden(true)
                                             .setSides('both');
  exportObject.MainFloor_fl403_linked = exportObject.MainFloor_fl403_tpath.addMesh('MainFloor_fl403.md2')
                                                    .setName('MainFloor_fl403_linked')
                                                    .setLinkToParentGeometry('all')
                                                    .setTexture('4fl.png')
                                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.number4 = exportObject.Fl04_group_linked.addTransform('number4')
                                 .setTranslation(-3690.883057, 340.449615, -325.95459)
                                 .setRotation(90.000008, 0, -0)
                                 .setScale(7.504149, 7.504149, 7.504149);
  exportObject.number4_tpath = exportObject.number4.addMesh('number4_tpath.md2')
                             .setName('number4_tpath')
                             .setHidden(true)
                             .setSides('both');
  exportObject.number4_linked = exportObject.number4_tpath.addMesh('number4.md2')
                                    .setName('number4_linked')
                                    .setLinkToParentGeometry('all')
                                    .setColor([0.000, 0.000, 0.000])

  exportObject.scalator_fl001b004 = exportObject.Fl04_group_linked.addTransform('scalator_fl001b004')
                                            .setTranslation(-423.300537, -812.641968, -38.583008)
                                            .setRotation(90.000008, 0, -0)
                                            .setScale(2.83825, 2.83825, 2.83825);
  exportObject.scalator_fl001b004_tpath = exportObject.scalator_fl001b004.addMesh('scalator_fl001b004_tpath.md2')
                                                   .setName('scalator_fl001b004_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.scalator_fl001b004_linked = exportObject.scalator_fl001b004_tpath.addMesh('scalator_fl001b004.md2')
                                                          .setName('scalator_fl001b004_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setAlpha(0.650)
                                                          .setTexture('grey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StairBtn_fl004 = exportObject.Fl04_group_linked.addTransform('StairBtn_fl004')
                                        .setTranslation(0.208984, -747.898193, -243.503174);
  exportObject.StairBtn_fl004_tpath = exportObject.StairBtn_fl004.addMesh('StairBtn_fl004_tpath.md2')
                                           .setName('StairBtn_fl004_tpath')
                                           .setHidden(true)
                                           .setSides('both');
  exportObject.StairBtn_fl004_linked = exportObject.StairBtn_fl004_tpath.addMesh('StairBtn_fl004.md2')
                                                  .setName('StairBtn_fl004_linked')
                                                  .setLinkToParentGeometry('all')
                                                  .setTexture('2ndFloor.jpg')
                                                  .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.StraightStair_fl_004 = exportObject.Fl04_group_linked.addTransform('StraightStair_fl_004')
                                              .setTranslation(275.458954, -588.616211, -209.608398)
                                              .setRotation(-0, 0, 90.575806);
  exportObject.StraightStair_fl_004_tpath = exportObject.StraightStair_fl_004.addMesh('StraightStair_fl_004_tpath.md2')
                                                       .setName('StraightStair_fl_004_tpath')
                                                       .setHidden(true)
                                                       .setSides('both');
  exportObject.StraightStair_fl_004_linked = exportObject.StraightStair_fl_004_tpath.addMesh('StraightStair_fl_004.md2')
                                                              .setName('StraightStair_fl_004_linked')
                                                              .setLinkToParentGeometry('all')
                                                              .setAlpha(0.650)
                                                              .setTexture('grey.jpg')
                                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Fl05_group = exportObject.root.addTransform('Fl05_group')
                       .setTranslation(-144.832703, -103.36084, -450.402161)
                       .setScale(0.2794, 0.2794, 0.2794);
  exportObject.Fl05_group_tpath = exportObject.Fl05_group.addMesh('Fl05_group_tpath.md2')
                                   .setName('Fl05_group_tpath')
                                   .setHidden(true)
                                   .setSides('both');
  exportObject.Fl05_group_linked = exportObject.Fl05_group_tpath.addTransform('Fl05_group_linked')
                                          .setLinkToParentGeometry('all');

  exportObject.floor5 = exportObject.Fl05_group_linked.addTransform('floor5')
                                .setTranslation(-755.979675, -235.898041, -301.944458);
  exportObject.floor5_tpath = exportObject.floor5.addMesh('floor5_tpath.md2')
                           .setName('floor5_tpath')
                           .setHidden(true)
                           .setSides('both');
  exportObject.floor5_linked = exportObject.floor5_tpath.addMesh('floor5.md2')
                                  .setName('floor5_linked')
                                  .setLinkToParentGeometry('all')
                                  .setTexture('5Thfloor.png')
                                  .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.floor5b = exportObject.Fl05_group_linked.addTransform('floor5b')
                                 .setTranslation(-282.924377, -236.042572, -251.944214);
  exportObject.floor5b_tpath = exportObject.floor5b.addMesh('floor5b_tpath.md2')
                             .setName('floor5b_tpath')
                             .setHidden(true)
                             .setSides('both');
  exportObject.floor5b_linked = exportObject.floor5b_tpath.addMesh('floor5b.md2')
                                    .setName('floor5b_linked')
                                    .setLinkToParentGeometry('all')
                                    .setTexture('5Thfloor.png')
                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.floor5c = exportObject.Fl05_group_linked.addTransform('floor5c')
                                 .setTranslation(-2039.59375, 58.723053, -301.944458);
  exportObject.floor5c_tpath = exportObject.floor5c.addMesh('floor5c_tpath.md2')
                             .setName('floor5c_tpath')
                             .setHidden(true)
                             .setSides('both');
  exportObject.floor5c_linked = exportObject.floor5c_tpath.addMesh('floor5c.md2')
                                    .setName('floor5c_linked')
                                    .setLinkToParentGeometry('all')
                                    .setTexture('5Thfloor.png')
                                    .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.FloorPlane05 = exportObject.Fl05_group_linked.addTransform('FloorPlane05')
                                      .setTranslation(468.610229, 0.000397, -276.944458);
  exportObject.FloorPlane05_tpath = exportObject.FloorPlane05.addMesh('FloorPlane05_tpath.md2')
                                       .setName('FloorPlane05_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.FloorPlane05_linked = exportObject.FloorPlane05_tpath.addMesh('FloorPlane05.md2')
                                              .setName('FloorPlane05_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('diagonallines.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_coffe_fl003 = exportObject.Fl05_group_linked.addTransform('Icon_coffe_fl003')
                                          .setTranslation(-219.747192, 847.445679, -125.761841)
                                          .setRotation(90.000008, 0, -0);
  exportObject.Icon_coffe_fl003_tpath = exportObject.Icon_coffe_fl003.addMesh('Icon_coffe_fl003_tpath.md2')
                                               .setName('Icon_coffe_fl003_tpath')
                                               .setHidden(true)
                                               .setSides('both');
  exportObject.Icon_coffe_fl003_linked = exportObject.Icon_coffe_fl003_tpath.addMesh('Icon_coffe_fl003.md2')
                                                      .setName('Icon_coffe_fl003_linked')
                                                      .setLinkToParentGeometry('all')
                                                      .setTexture('2ndFloor.jpg')
                                                      .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_question_fl005 = exportObject.Fl05_group_linked.addTransform('Icon_question_fl005')
                                             .setTranslation(-403.19635, -530.179321, -115.637695)
                                             .setRotation(90.000008, 0, -0);
  exportObject.Icon_question_fl005_tpath = exportObject.Icon_question_fl005.addMesh('Icon_question_fl005_tpath.md2')
                                                     .setName('Icon_question_fl005_tpath')
                                                     .setHidden(true)
                                                     .setSides('both');
  exportObject.Icon_question_fl005_linked = exportObject.Icon_question_fl005_tpath.addMesh('Icon_question_fl005.md2')
                                                            .setName('Icon_question_fl005_linked')
                                                            .setLinkToParentGeometry('all')
                                                            .setTexture('LightGrey.jpg')
                                                            .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_toilets004_fl005 = exportObject.Fl05_group_linked.addTransform('Icon_toilets004_fl005')
                                               .setTranslation(391.615112, -1311.093384, -125.761841)
                                               .setRotation(90.000008, 0, -0);
  exportObject.Icon_toilets004_fl005_tpath = exportObject.Icon_toilets004_fl005.addMesh('Icon_toilets004_fl005_tpath.md2')
                                                         .setName('Icon_toilets004_fl005_tpath')
                                                         .setHidden(true)
                                                         .setSides('both');
  exportObject.Icon_toilets004_fl005_linked = exportObject.Icon_toilets004_fl005_tpath.addMesh('Icon_toilets004_fl005.md2')
                                                                .setName('Icon_toilets004_fl005_linked')
                                                                .setLinkToParentGeometry('all')
                                                                .setTexture('LightGrey.jpg')
                                                                .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_toilets_fl005 = exportObject.Fl05_group_linked.addTransform('Icon_toilets_fl005')
                                            .setTranslation(405.661957, -684.960571, -125.761841)
                                            .setRotation(90.000008, 0, -0);
  exportObject.Icon_toilets_fl005_tpath = exportObject.Icon_toilets_fl005.addMesh('Icon_toilets_fl005_tpath.md2')
                                                   .setName('Icon_toilets_fl005_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.Icon_toilets_fl005_linked = exportObject.Icon_toilets_fl005_tpath.addMesh('Icon_toilets_fl005.md2')
                                                          .setName('Icon_toilets_fl005_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setTexture('2ndFloor.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.iconVanGogh = exportObject.Fl05_group_linked.addMesh('iconVanGogh.md2')
                                     .setName('iconVanGogh')
                                     .setTranslation(-2725.199219, -724.210205, 219.007446)
                                     .setRotation(90.000008, 0, -0)
                                     .setScale(1.347469, 1.347469, 1.347469)
                                     .setTexture('iconVangogh.png')
                                     .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.number5 = exportObject.Fl05_group_linked.addTransform('number5')
                                 .setTranslation(-3694.635254, 484.37738, -301.944458)
                                 .setRotation(90.000008, 0, -0)
                                 .setScale(7.504149, 7.504149, 7.504149);
  exportObject.number5_tpath = exportObject.number5.addMesh('number5_tpath.md2')
                             .setName('number5_tpath')
                             .setHidden(true)
                             .setSides('both');
  exportObject.number5_linked = exportObject.number5_tpath.addMesh('number5.md2')
                                    .setName('number5_linked')
                                    .setLinkToParentGeometry('all')
                                    .setColor([0.000, 0.000, 0.000])

  exportObject.scalator_fl001b005 = exportObject.Fl05_group_linked.addTransform('scalator_fl001b005')
                                            .setTranslation(-423.300659, -812.641968, 8.909546)
                                            .setRotation(90.000008, 0, -0)
                                            .setScale(2.83825, 2.83825, 2.83825);
  exportObject.scalator_fl001b005_tpath = exportObject.scalator_fl001b005.addMesh('scalator_fl001b005_tpath.md2')
                                                   .setName('scalator_fl001b005_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.scalator_fl001b005_linked = exportObject.scalator_fl001b005_tpath.addMesh('scalator_fl001b005.md2')
                                                          .setName('scalator_fl001b005_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setAlpha(0.650)
                                                          .setTexture('grey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.scalator_fl001b008 = exportObject.Fl05_group_linked.addTransform('scalator_fl001b008')
                                            .setTranslation(-423.300659, 838.102173, 58.065796)
                                            .setRotation(90.000008, 0, -0)
                                            .setScale(2.83825, 2.83825, 2.83825);
  exportObject.scalator_fl001b008_tpath = exportObject.scalator_fl001b008.addMesh('scalator_fl001b008_tpath.md2')
                                                   .setName('scalator_fl001b008_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.scalator_fl001b008_linked = exportObject.scalator_fl001b008_tpath.addMesh('scalator_fl001b008.md2')
                                                          .setName('scalator_fl001b008_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setAlpha(0.650)
                                                          .setTexture('grey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Fl06_group = exportObject.root.addTransform('Fl06_group')
                       .setTranslation(-144.832733, -103.360565, -211.446289)
                       .setScale(0.2794, 0.2794, 0.2794);
  exportObject.Fl06_group_tpath = exportObject.Fl06_group.addMesh('Fl06_group_tpath.md2')
                                   .setName('Fl06_group_tpath')
                                   .setHidden(true)
                                   .setSides('both');
  exportObject.Fl06_group_linked = exportObject.Fl06_group_tpath.addTransform('Fl06_group_linked')
                                          .setLinkToParentGeometry('all');

  exportObject.FloorPlane06 = exportObject.Fl06_group_linked.addTransform('FloorPlane06')
                                      .setTranslation(458.515625, -0.00058, -278.039307);
  exportObject.FloorPlane06_tpath = exportObject.FloorPlane06.addMesh('FloorPlane06_tpath.md2')
                                       .setName('FloorPlane06_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.FloorPlane06_linked = exportObject.FloorPlane06_tpath.addMesh('FloorPlane06.md2')
                                              .setName('FloorPlane06_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('diagonallines.jpg')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_bookStore_fl006 = exportObject.Fl06_group_linked.addTransform('Icon_bookStore_fl006')
                                              .setTranslation(-352.939453, 1040.604858, -50.047852)
                                              .setRotation(90.000008, 0, -0);
  exportObject.Icon_bookStore_fl006_tpath = exportObject.Icon_bookStore_fl006.addMesh('Icon_bookStore_fl006_tpath.md2')
                                                       .setName('Icon_bookStore_fl006_tpath')
                                                       .setHidden(true)
                                                       .setSides('both');
  exportObject.Icon_bookStore_fl006_linked = exportObject.Icon_bookStore_fl006_tpath.addMesh('Icon_bookStore_fl006.md2')
                                                              .setName('Icon_bookStore_fl006_linked')
                                                              .setLinkToParentGeometry('all')
                                                              .setTexture('LightGrey.jpg')
                                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_toilets004_fl006 = exportObject.Fl06_group_linked.addTransform('Icon_toilets004_fl006')
                                               .setTranslation(400.958984, -1424.270142, -101.856445)
                                               .setRotation(90.000008, 0, -0);
  exportObject.Icon_toilets004_fl006_tpath = exportObject.Icon_toilets004_fl006.addMesh('Icon_toilets004_fl006_tpath.md2')
                                                         .setName('Icon_toilets004_fl006_tpath')
                                                         .setHidden(true)
                                                         .setSides('both');
  exportObject.Icon_toilets004_fl006_linked = exportObject.Icon_toilets004_fl006_tpath.addMesh('Icon_toilets004_fl006.md2')
                                                                .setName('Icon_toilets004_fl006_linked')
                                                                .setLinkToParentGeometry('all')
                                                                .setTexture('LightGrey.jpg')
                                                                .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Icon_wireless_fl006 = exportObject.Fl06_group_linked.addTransform('Icon_wireless_fl006')
                                             .setTranslation(-926.596252, 583.347046, -101.856445)
                                             .setRotation(90.000008, 0, -0);
  exportObject.Icon_wireless_fl006_tpath = exportObject.Icon_wireless_fl006.addMesh('Icon_wireless_fl006_tpath.md2')
                                                     .setName('Icon_wireless_fl006_tpath')
                                                     .setHidden(true)
                                                     .setSides('both');
  exportObject.Icon_wireless_fl006_linked = exportObject.Icon_wireless_fl006_tpath.addMesh('Icon_wireless_fl006.md2')
                                                            .setName('Icon_wireless_fl006_linked')
                                                            .setLinkToParentGeometry('all')
                                                            .setTexture('LightGrey.jpg')
                                                            .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.number6 = exportObject.Fl06_group_linked.addTransform('number6')
                                 .setTranslation(-3685.290771, 634.057983, -278.039307)
                                 .setRotation(90.000008, 0, -0)
                                 .setScale(7.504149, 7.504149, 7.504149);
  exportObject.number6_tpath = exportObject.number6.addMesh('number6_tpath.md2')
                             .setName('number6_tpath')
                             .setHidden(true)
                             .setSides('both');
  exportObject.number6_linked = exportObject.number6_tpath.addMesh('number6.md2')
                                    .setName('number6_linked')
                                    .setLinkToParentGeometry('all')
                                    .setColor([0.000, 0.000, 0.000])

  exportObject.Rectangle033 = exportObject.Fl06_group_linked.addTransform('Rectangle033')
                                      .setTranslation(-753.168884, -1038.12561, -278.039307);
  exportObject.Rectangle033_tpath = exportObject.Rectangle033.addMesh('Rectangle033_tpath.md2')
                                       .setName('Rectangle033_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.Rectangle033_linked = exportObject.Rectangle033_tpath.addMesh('Rectangle033.md2')
                                              .setName('Rectangle033_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('6fl.png')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Rectangle038 = exportObject.Fl06_group_linked.addTransform('Rectangle038')
                                      .setTranslation(-428.300293, 338.315826, -328.039307);
  exportObject.Rectangle038_tpath = exportObject.Rectangle038.addMesh('Rectangle038_tpath.md2')
                                       .setName('Rectangle038_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.Rectangle038_linked = exportObject.Rectangle038_tpath.addMesh('Rectangle038.md2')
                                              .setName('Rectangle038_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('6fl.png')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.Rectangle041 = exportObject.Fl06_group_linked.addTransform('Rectangle041')
                                      .setTranslation(-1515.227539, -290.676361, -278.039307);
  exportObject.Rectangle041_tpath = exportObject.Rectangle041.addMesh('Rectangle041_tpath.md2')
                                       .setName('Rectangle041_tpath')
                                       .setHidden(true)
                                       .setSides('both');
  exportObject.Rectangle041_linked = exportObject.Rectangle041_tpath.addMesh('Rectangle041.md2')
                                              .setName('Rectangle041_linked')
                                              .setLinkToParentGeometry('all')
                                              .setTexture('6fl.png')
                                              .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.scalator_fl001b006 = exportObject.Fl06_group_linked.addTransform('scalator_fl001b006')
                                            .setTranslation(-423.300537, -812.642944, 42.324219)
                                            .setRotation(90.000008, 0, -0)
                                            .setScale(2.83825, 2.83825, 2.83825);
  exportObject.scalator_fl001b006_tpath = exportObject.scalator_fl001b006.addMesh('scalator_fl001b006_tpath.md2')
                                                   .setName('scalator_fl001b006_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.scalator_fl001b006_linked = exportObject.scalator_fl001b006_tpath.addMesh('scalator_fl001b006.md2')
                                                          .setName('scalator_fl001b006_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setAlpha(0.650)
                                                          .setTexture('grey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.scalator_fl001b007 = exportObject.Fl06_group_linked.addTransform('scalator_fl001b007')
                                            .setTranslation(-423.300537, 838.101196, 50.906311)
                                            .setRotation(90.000008, 0, -0)
                                            .setScale(2.83825, 2.83825, 2.83825);
  exportObject.scalator_fl001b007_tpath = exportObject.scalator_fl001b007.addMesh('scalator_fl001b007_tpath.md2')
                                                   .setName('scalator_fl001b007_tpath')
                                                   .setHidden(true)
                                                   .setSides('both');
  exportObject.scalator_fl001b007_linked = exportObject.scalator_fl001b007_tpath.addMesh('scalator_fl001b007.md2')
                                                          .setName('scalator_fl001b007_linked')
                                                          .setLinkToParentGeometry('all')
                                                          .setAlpha(0.650)
                                                          .setTexture('grey.jpg')
                                                          .setTextureEdges(['hWrap', 'vWrap']);

  exportObject.hider = exportObject.root.addMesh('hider.md2')
                  .setName('hider');



  return exportObject;
};

exports.animateScene = function() {
  exportObject.elevatorL_tpath.setActiveMesh(0).animate()
                                  .activeMesh(51)
                                  .duration(1666.88);
  exportObject.elevatorR_tpath.setActiveMesh(0).animate()
                                  .activeMesh(51)
                                  .duration(1666.88);
  exportObject.Fl01_group_tpath.setActiveMesh(0).animate()
                                   .activeMesh(51)
                                   .duration(1666.88);
  exportObject.elevatorSign_fl1_tpath.setActiveMesh(0).animate()
                                         .activeMesh(1)
                                         .duration(0.208333)
                                         .delay(1666);
  exportObject.FloorPlane01_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.Foliage002_tpath.setActiveMesh(0).animate()
                                   .activeMesh(1)
                                   .duration(0.208333)
                                   .delay(1666);
  exportObject.Icon_bookStore_fl1_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.Icon_coatcheck_fl1_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.Icon_computer_fl1_tpath.setActiveMesh(0).animate()
                                          .activeMesh(1)
                                          .duration(0.208333)
                                          .delay(1666);
  exportObject.Icon_disable_fl1_tpath.setActiveMesh(0).animate()
                                         .activeMesh(1)
                                         .duration(0.208333)
                                         .delay(1666);
  exportObject.Icon_food_fl1_tpath.setActiveMesh(0).animate()
                                      .activeMesh(1)
                                      .duration(0.208333)
                                      .delay(1666);
  exportObject.Icon_phone_fl1_tpath.setActiveMesh(0).animate()
                                       .activeMesh(1)
                                       .duration(0.208333)
                                       .delay(1666);
  exportObject.Icon_question_tpath.setActiveMesh(0).animate()
                                      .activeMesh(1)
                                      .duration(0.208333)
                                      .delay(1666);
  exportObject.Icon_table_fl1_tpath.setActiveMesh(0).animate()
                                       .activeMesh(1)
                                       .duration(0.208333)
                                       .delay(1666);
  exportObject.Icon_theather_fl1_tpath.setActiveMesh(0).animate()
                                          .activeMesh(1)
                                          .duration(0.208333)
                                          .delay(1666);
  exportObject.Icon_toilets_fl1_tpath.setActiveMesh(0).animate()
                                         .activeMesh(1)
                                         .duration(0.208333)
                                         .delay(1666);
  exportObject.Icon_wireless_fl1_tpath.setActiveMesh(0).animate()
                                          .activeMesh(1)
                                          .duration(0.208333)
                                          .delay(1666);
  exportObject.MainFloor01_tpath.setActiveMesh(0).animate()
                                    .activeMesh(1)
                                    .duration(0.208333)
                                    .delay(1666);
  exportObject.mainFloorGarden_fl1_tpath.setActiveMesh(0).animate()
                                            .activeMesh(1)
                                            .duration(0.208333)
                                            .delay(1666);
  exportObject.number1_tpath.setActiveMesh(0).animate()
                                .activeMesh(1)
                                .duration(0.208333)
                                .delay(1666);
  exportObject.scalator_fl001b_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.scalator_fl001b001_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.StraightStair_fl_001b_tpath.setActiveMesh(0).animate()
                                              .activeMesh(1)
                                              .duration(0.208333)
                                              .delay(1666);
  exportObject.StraightStair_fl_001c_tpath.setActiveMesh(0).animate()
                                              .activeMesh(1)
                                              .duration(0.208333)
                                              .delay(1666);
  exportObject.StraightStair_fl_01_tpath.setActiveMesh(0).animate()
                                            .activeMesh(1)
                                            .duration(0.208333)
                                            .delay(1666);
  exportObject.treeBush_tpath.setActiveMesh(0).animate()
                                 .activeMesh(1)
                                 .duration(0.208333)
                                 .delay(1666);
  exportObject.Fl02_group_tpath.setActiveMesh(0).animate()
                                   .activeMesh(51)
                                   .duration(1666.88);
  exportObject.FloorPlane02_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.Icon_bookStore_fl2_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.Icon_coffe_fl2_tpath.setActiveMesh(0).animate()
                                       .activeMesh(1)
                                       .duration(0.208333)
                                       .delay(1666);
  exportObject.Icon_computer_fl2_tpath.setActiveMesh(0).animate()
                                          .activeMesh(1)
                                          .duration(0.208333)
                                          .delay(1666);
  exportObject.Icon_question_fl2_tpath.setActiveMesh(0).animate()
                                          .activeMesh(1)
                                          .duration(0.208333)
                                          .delay(1666);
  exportObject.Icon_toilets003_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.Icon_toilets_fl2_tpath.setActiveMesh(0).animate()
                                         .activeMesh(1)
                                         .duration(0.208333)
                                         .delay(1666);
  exportObject.Icon_toilets_fl2b_tpath.setActiveMesh(0).animate()
                                          .activeMesh(1)
                                          .duration(0.208333)
                                          .delay(1666);
  exportObject.MainFloor02_tpath.setActiveMesh(0).animate()
                                    .activeMesh(1)
                                    .duration(0.208333)
                                    .delay(1666);
  exportObject.MainFloor02b_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.MainFloor02c_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.MainFloor02d_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.MainFloor02e_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.number2_tpath.setActiveMesh(0).animate()
                                .activeMesh(1)
                                .duration(0.208333)
                                .delay(1666);
  exportObject.scalator_fl001b002_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.StairBtn_fl2_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.StraightStair_fl_002c_tpath.setActiveMesh(0).animate()
                                              .activeMesh(1)
                                              .duration(0.208333)
                                              .delay(1666);
  exportObject.StraightStair_fl_02_c_tpath.setActiveMesh(0).animate()
                                              .activeMesh(1)
                                              .duration(0.208333)
                                              .delay(1666);
  exportObject.Fl03_group_tpath.setActiveMesh(0).animate()
                                   .activeMesh(51)
                                   .duration(1666.88);
  exportObject.FloorPlane03_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.Icon_question_fl3_tpath.setActiveMesh(0).animate()
                                          .activeMesh(1)
                                          .duration(0.208333)
                                          .delay(1666);
  exportObject.MainFloor_fl300_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.MainFloor_fl301_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.MainFloor_fl302_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.MainFloor_fl303_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.number3_tpath.setActiveMesh(0).animate()
                                .activeMesh(1)
                                .duration(0.208333)
                                .delay(1666);
  exportObject.scalator_fl001b003_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.StairBtn_fl3_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.StraightStair_fl_003_tpath.setActiveMesh(0).animate()
                                             .activeMesh(1)
                                             .duration(0.208333)
                                             .delay(1666);
  exportObject.Fl04_group_tpath.setActiveMesh(0).animate()
                                   .activeMesh(51)
                                   .duration(1666.88);
  exportObject.FloorPlane04_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.Icon_question_fl004_tpath.setActiveMesh(0).animate()
                                            .activeMesh(1)
                                            .duration(0.208333)
                                            .delay(1666);
  exportObject.Icon_toilets004_fl004_tpath.setActiveMesh(0).animate()
                                              .activeMesh(1)
                                              .duration(0.208333)
                                              .delay(1666);
  exportObject.MainFloor_fl400_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.MainFloor_fl401_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.MainFloor_fl402_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.MainFloor_fl403_tpath.setActiveMesh(0).animate()
                                        .activeMesh(1)
                                        .duration(0.208333)
                                        .delay(1666);
  exportObject.number4_tpath.setActiveMesh(0).animate()
                                .activeMesh(1)
                                .duration(0.208333)
                                .delay(1666);
  exportObject.scalator_fl001b004_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.StairBtn_fl004_tpath.setActiveMesh(0).animate()
                                       .activeMesh(1)
                                       .duration(0.208333)
                                       .delay(1666);
  exportObject.StraightStair_fl_004_tpath.setActiveMesh(0).animate()
                                             .activeMesh(1)
                                             .duration(0.208333)
                                             .delay(1666);
  exportObject.Fl05_group_tpath.setActiveMesh(0).animate()
                                   .activeMesh(51)
                                   .duration(1666.88);
  exportObject.floor5_tpath.setActiveMesh(0).animate()
                               .activeMesh(1)
                               .duration(0.208333)
                               .delay(1666);
  exportObject.floor5b_tpath.setActiveMesh(0).animate()
                                .activeMesh(1)
                                .duration(0.208333)
                                .delay(1666);
  exportObject.floor5c_tpath.setActiveMesh(0).animate()
                                .activeMesh(1)
                                .duration(0.208333)
                                .delay(1666);
  exportObject.FloorPlane05_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.Icon_coffe_fl003_tpath.setActiveMesh(0).animate()
                                         .activeMesh(1)
                                         .duration(0.208333)
                                         .delay(1666);
  exportObject.Icon_question_fl005_tpath.setActiveMesh(0).animate()
                                            .activeMesh(1)
                                            .duration(0.208333)
                                            .delay(1666);
  exportObject.Icon_toilets004_fl005_tpath.setActiveMesh(0).animate()
                                              .activeMesh(1)
                                              .duration(0.208333)
                                              .delay(1666);
  exportObject.Icon_toilets_fl005_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.number5_tpath.setActiveMesh(0).animate()
                                .activeMesh(1)
                                .duration(0.208333)
                                .delay(1666);
  exportObject.scalator_fl001b005_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.scalator_fl001b008_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.Fl06_group_tpath.setActiveMesh(0).animate()
                                   .activeMesh(51)
                                   .duration(1666.88);
  exportObject.FloorPlane06_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.Icon_bookStore_fl006_tpath.setActiveMesh(0).animate()
                                             .activeMesh(1)
                                             .duration(0.208333)
                                             .delay(1666);
  exportObject.Icon_toilets004_fl006_tpath.setActiveMesh(0).animate()
                                              .activeMesh(1)
                                              .duration(0.208333)
                                              .delay(1666);
  exportObject.Icon_wireless_fl006_tpath.setActiveMesh(0).animate()
                                            .activeMesh(1)
                                            .duration(0.208333)
                                            .delay(1666);
  exportObject.number6_tpath.setActiveMesh(0).animate()
                                .activeMesh(1)
                                .duration(0.208333)
                                .delay(1666);
  exportObject.Rectangle033_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.Rectangle038_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.Rectangle041_tpath.setActiveMesh(0).animate()
                                     .activeMesh(1)
                                     .duration(0.208333)
                                     .delay(1666);
  exportObject.scalator_fl001b006_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
  exportObject.scalator_fl001b007_tpath.setActiveMesh(0).animate()
                                           .activeMesh(1)
                                           .duration(0.208333)
                                           .delay(1666);
};
