var msjstation;

function threeStart() {
    var _0xa5dex3 = {
        antialias: true,
        showHelpGrid: false,
        //clearCoolr: 0x4e72b8
        clearCoolr:0x2F4F4F
        //clearCoolr:0x39609B
    };
    msjstation = new Digital3D();
    var _0xa5dex4 = {
        objects: [
            {
                show: true,
                uuid: '',
                name: 'floor',
                objType: 'floor',
                length: 2080,//2080
                width: 1300,//1300
                height: 10,
                rotation: [{
                    direction: 'x',
                    degree: 0
                }],
                x: 0,
                y: 0,
                z: 0,
                style: {
                    skinColor: 0x00B2EE,
                    skin: {
                        skin_up: {
                            skinColor: 0x00B2EE,
                            imgurl: './res/floor.jpg',
                            repeatx: true,
                            repeaty: true,
                            width: 64,
                            height: 64
                        },
                        skin_down: {
                            skinColor: 0x00B2EE
                        },
                        skin_fore: {
                            skinColor: 0x00B2EE
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'area1',
                objType: 'floor',
                length: 860,//2080
                width: 750,//1300
                height: 0.2,
                rotation: [{
                    direction: 'x',
                    degree: 0
                }],
                x: -430,
                y: 5.5,
                z: -110,
                style: {
                    skinColor: 0x6699ff,
                }
            },
            {
                show: true,
                uuid: '',
                name: 'area2',
                objType: 'floor',
                length: 540,//2080
                width: 750,//1300
                height: 0.2,
                rotation: [{
                    direction: 'x',
                    degree: 0
                }],
                x: 270,
                y: 5.5,
                z: -110,
                style: {
                    skinColor: 0x9933cc,
                }
            },
            {
                show: true,
                uuid: '',
                name: 'area3',
                objType: 'floor',
                length: 300,//2080
                width: 750,//1300
                height: 0.2,
                rotation: [{
                    direction: 'x',
                    degree: 0
                }],
                x: 690,
                y: 5.5,
                z: -110,
                style: {
                    skinColor: 0xFF7F00,
                }
            },
            {
                show: true,
                uuid: '',
                name: 'area_de',
                objType: 'floor',
                length: 210,//2080
                width: 656,//1300
                height: 0.2,
                rotation: [{
                    direction: 'x',
                    degree: 0
                }],
                x: 262,
                y: 6.5,
                z: -108,
                style: {
                    skinColor: 0xFF7F00,
                    skin: {
                        skin_up: {
                            skinColor: 0x00B2EE,
                            imgurl: './res/grid_floor.png',
                            repeatx: true,
                            repeaty: true,
                            width: 64,
                            height: 64
                        },
                        skin_down: {
                            skinColor: 0x00B2EE,
                            imgurl: './res/grid_floor.png',
                            repeatx: true,
                            repeaty: true,
                            width: 64,
                            height: 64
                        },
                        skin_fore: {
                            skinColor: 0x00B2EE,
                            imgurl: './res/grid_floor.png',
                            repeatx: true,
                            repeaty: true,
                            width: 64,
                            height: 64
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'area_bc',
                objType: 'floor',
                length: 210,//2080
                width: 656,//1300
                height: 0.2,
                rotation: [{
                    direction: 'x',
                    degree: 0
                }],
                x: -300,
                y: 6.5,
                z: -108,
                style: {
                    skinColor: 0xFF7F00,
                    skin: {
                        skin_up: {
                            skinColor: 0x00B2EE,
                            imgurl: './res/grid_floor.png',
                            repeatx: true,
                            repeaty: true,
                            width: 64,
                            height: 64
                        },
                        skin_down: {
                            skinColor: 0x00B2EE,
                            imgurl: './res/grid_floor.png',
                            repeatx: true,
                            repeaty: true,
                            width: 64,
                            height: 64
                        },
                        skin_fore: {
                            skinColor: 0x00B2EE,
                            imgurl: './res/grid_floor.png',
                            repeatx: true,
                            repeaty: true,
                            width: 64,
                            height: 64
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'wall',
                objType: 'wall',
                thick: 20,
                length: 100,
                height: 240,

                wallData: [
                    {
                    uuid: '',
                    name: 'wall1',
                    thick: 20,
                    height: 240,

                    skin: {
                        skin_up: {
                            skinColor: 0xdddddd,
                            imgurl: './res/outside_lightmap.jpg'
                        },
                        skin_down: {
                            skinColor: 0xdddddd,
                            imgurl: './res/outside_lightmap.jpg'
                        },
                        skin_fore: {
                            skinColor: 0xb0cee0,
                            imgurl: './res/outside_lightmap.jpg'
                        },
                        skin_behind: {
                            skinColor: 0xb0cee0,
                            imgurl: './res/outside_lightmap.jpg'
                        },
                        skin_left: {
                            skinColor: 0xdeeeee,
                            imgurl: './res/outside_lightmap.jpg'
                        },
                        skin_right: {
                            skinColor: 0xb0cee0,
                            imgurl: './res/outside_lightmap.jpg'
                        }
                    },
                    startDot: {
                        x: -1030,
                        y: 120,
                        z: -640
                    },
                    endDot: {
                        x: 1030,
                        y: 120,
                        z: -640
                    },
                    rotation: [{
                        direction: 'x',
                        degree: 0
                    }],
                    childrens: [
                        {
                            op: '-',
                            show: true,
                            uuid: '',
                            name: 'windowHole1',
                            objType: 'windowHole',
                            thick: 20,
                            height: 160,
                            startDot: {
                                x: -818,
                                y: 130,
                                z: -640
                            },
                            endDot: {
                                x: -568,
                                y: 130,
                                z: -640
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: '',
                            name: 'windowHole2',
                            objType: 'windowHole',
                            thick: 20,
                            height: 160,
                            startDot: {
                                x: -356,
                                y: 130,
                                z: -640
                            },
                            endDot: {
                                x: -106,
                                y: 130,
                                z: -640
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: '',
                            name: 'windowHole3',
                            objType: 'windowHole',
                            thick: 20,
                            height: 160,
                            startDot: {
                                x: 106,
                                y: 130,
                                z: -640
                            },
                            endDot: {
                                x: 356,
                                y: 130,
                                z: -640
                            }
                        },
                        {
                            op: '-',
                            show: true,
                            uuid: '',
                            name: 'windowHole4',
                            objType: 'windowHole',
                            thick: 20,
                            height: 160,
                            startDot: {
                                x: 568,
                                y: 130,
                                z: -640
                            },
                            endDot: {
                                x: 818,
                                y: 130,
                                z: -640
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom1',
                            uuid: '',
                            objType: 'cube',
                            thick: 30,
                            height: 10,
                            startDot: {
                                x: -818,
                                y: 50,
                                z: -640
                            },
                            endDot: {
                                x: -568,
                                y: 50,
                                z: -640
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0x00B2EE
                                },
                                skin_down: {
                                    skinColor: 0x00B2EE
                                },
                                skin_fore: {
                                    skinColor: 0x00B2EE
                                },
                                skin_behind: {
                                    skinColor: 0x00B2EE
                                },
                                skin_left: {
                                    skinColor: 0x00B2EE
                                },
                                skin_right: {
                                    skinColor: 0x00B2EE
                                }
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom2',
                            uuid: '',
                            objType: 'cube',
                            thick: 30,
                            height: 10,
                            startDot: {
                                x: -356,
                                y: 50,
                                z: -640
                            },
                            endDot: {
                                x: -106,
                                y: 50,
                                z: -640
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0x00B2EE
                                },
                                skin_down: {
                                    skinColor: 0x00B2EE
                                },
                                skin_fore: {
                                    skinColor: 0x00B2EE
                                },
                                skin_behind: {
                                    skinColor: 0x00B2EE
                                },
                                skin_left: {
                                    skinColor: 0x00B2EE
                                },
                                skin_right: {
                                    skinColor: 0x00B2EE
                                }
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom3',
                            uuid: '',
                            objType: 'cube',
                            thick: 30,
                            height: 10,
                            startDot: {
                                x: 106,
                                y: 50,
                                z: -640
                            },
                            endDot: {
                                x: 356,
                                y: 50,
                                z: -640
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0x00B2EE
                                },
                                skin_down: {
                                    skinColor: 0x00B2EE
                                },
                                skin_fore: {
                                    skinColor: 0x00B2EE
                                },
                                skin_behind: {
                                    skinColor: 0x00B2EE
                                },
                                skin_left: {
                                    skinColor: 0x00B2EE
                                },
                                skin_right: {
                                    skinColor: 0x00B2EE
                                }
                            }
                        },
                        {
                            show: true,
                            name: 'windowCaseBottom4',
                            uuid: '',
                            objType: 'cube',
                            thick: 30,
                            height: 10,
                            startDot: {
                                x: 568,
                                y: 50,
                                z: -640
                            },
                            endDot: {
                                x: 818,
                                y: 50,
                                z: -640
                            },
                            skin: {
                                skin_up: {
                                    skinColor: 0x00B2EE
                                },
                                skin_down: {
                                    skinColor: 0x00B2EE
                                },
                                skin_fore: {
                                    skinColor: 0x00B2EE
                                },
                                skin_behind: {
                                    skinColor: 0x00B2EE
                                },
                                skin_left: {
                                    skinColor: 0x00B2EE
                                },
                                skin_right: {
                                    skinColor: 0x00B2EE
                                }
                            }
                        }

                        ]
                },
                    {
                        uuid: '',
                        name: 'wall2',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_fore: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_right: {
                                skinColor: 0xdeeeee,
                                imgurl: './res/outside_lightmap.jpg'
                            }
                        },
                        startDot: {
                            x: -1030,
                            y: 120,
                            z: 640
                        },
                        endDot: {
                            x: 1030,
                            y: 120,
                            z: 640
                        },
                       childrens:[
                           {
                               op: '-',
                               show: true,
                               uuid: '',
                               name: 'doorhole',
                               objType: 'doorhole',
                               thick: 20,
                               height: 220,
                               startDot: {
                                   x: 461,
                                   y: 110,
                                   z: 640
                               },
                               endDot: {
                                   x: 669,
                                   y: 110,
                                   z: 640
                               },
                               skin: {
                                   skin_up: {
                                       skinColor: 0xffdddd
                                   },
                                   skin_down: {
                                       skinColor: 0xdddddd
                                   },
                                   skin_fore: {
                                       skinColor: 0xffdddd
                                   },
                                   skin_behind: {
                                       skinColor: 0xffdddd
                                   },
                                   skin_left: {
                                       skinColor: 0xffdddd
                                   },
                                   skin_right: {
                                       skinColor: 0xffdddd
                                   }
                               }
                           },
                           {
                               show: true,
                               name: 'doorLeft',
                               uuid: '',
                               objType: 'cube',
                               thick: 4,
                               height: 210,
                               startDot: {
                                   x: 565,
                                   y: 112,
                                   z: 640
                               },
                               endDot: {
                                   x: 669,
                                   y: 112,
                                   z: 640
                               },
                               skin: {
                                   opacity: 0.1,
                                   skin_up: {
                                       skinColor: 0x51443e
                                   },
                                   skin_down: {
                                       skinColor: 0x51443e
                                   },
                                   skin_fore: {
                                       skinColor: 0x51443e
                                   },
                                   skin_behind: {
                                       skinColor: 0x51443e
                                   },
                                   skin_left: {
                                       skinColor: 0x51443e,
                                       imgurl: './res/doorone_in.png'
                                   },
                                   skin_right: {
                                       skinColor: 0x51443e,
                                       imgurl: './res/doorone_in_right.png'
                                   }
                               }
                           },
                           {
                               show: true,
                               name: 'doorRight',
                               uuid: '',
                               objType: 'cube',
                               thick: 4,
                               height: 210,
                               startDot: {
                                   x: 461,
                                   y: 112,
                                   z: 640
                               },
                               endDot: {
                                   x: 565,
                                   y: 112,
                                   z: 640
                               },
                               skin: {
                                   opacity: 0.1,
                                   skin_up: {
                                       skinColor: 0x51443e
                                   },
                                   skin_down: {
                                       skinColor: 0x51443e
                                   },
                                   skin_fore: {
                                       skinColor: 0x51443e
                                   },
                                   skin_behind: {
                                       skinColor: 0x51443e
                                   },
                                   skin_left: {
                                       skinColor: 0x51443e,
                                       imgurl: './res/doorone_in_right.png'
                                   },
                                   skin_right: {
                                       skinColor: 0x51443e,
                                       imgurl: './res/doorone_in.png'
                                   }
                               }
                           },
                           {
                               op: '-',
                               show: true,
                               uuid: '',
                               name: 'windowHole',
                               objType: 'windowHole',
                               thick: 20,
                               height: 160,
                               startDot: {
                                   x: -356,
                                   y: 130,
                                   z: 640
                               },
                               endDot: {
                                   x: -106,
                                   y: 130,
                                   z: 640
                               }
                           },
                           {
                               show: true,
                               name: 'windowCaseBottom2',
                               uuid: '',
                               objType: 'cube',
                               thick: 30,
                               height: 10,
                               startDot: {
                                   x: -356,
                                   y: 50,
                                   z: 640
                               },
                               endDot: {
                                   x: -106,
                                   y: 50,
                                   z: 640
                               },
                               skin: {
                                   skin_up: {
                                       skinColor: 0x00B2EE
                                   },
                                   skin_down: {
                                       skinColor: 0x00B2EE
                                   },
                                   skin_fore: {
                                       skinColor: 0x00B2EE
                                   },
                                   skin_behind: {
                                       skinColor: 0x00B2EE
                                   },
                                   skin_left: {
                                       skinColor: 0x00B2EE
                                   },
                                   skin_right: {
                                       skinColor: 0x00B2EE
                                   }
                               }
                           }
                       ]
                    },
                    {
                        uuid: '',
                        name: 'wall3',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_fore: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_behind: {
                                skinColor: 0xdeeeee,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            }
                        },
                        startDot: {
                            x: 1030,
                            y: 120,
                            z: -650
                        },
                        endDot: {
                            x: 1030,
                            y: 120,
                            z: 650
                        },
                        childrens:[
                            {
                                op: '-',
                                show: true,
                                uuid: '',
                                name: 'doorhole',
                                objType: 'doorhole',
                                thick: 20,
                                height: 220,
                                startDot: {
                                    x: 1030,
                                    y: 110,
                                    z: 382
                                },
                                endDot: {
                                    x: 1030,
                                    y: 110,
                                    z: 590
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_down: {
                                        skinColor: 0xdddddd
                                    },
                                    skin_fore: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_behind: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_left: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_right: {
                                        skinColor: 0xffdddd
                                    }
                                }
                            },
                            {
                                show: true,
                                name: 'doorRight_ZLeft_ToMinus',
                                uuid: '',
                                objType: 'cube',
                                thick: 4,
                                height: 216,
                                rotation: [{
                                    direction: 'y',
                                    degree:-Math['PI']/2
                                }],
                                startDot: {
                                    x: 1030,
                                    y: 112,
                                    z: 590
                                },
                                endDot: {
                                    x: 1035,
                                    y: 112,
                                    z: 486
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x51443e
                                    },
                                    skin_down: {
                                        skinColor: 0x51443e
                                    },
                                    skin_fore: {
                                        skinColor: 0x51443e
                                    },
                                    skin_behind: {
                                        skinColor: 0x51443e
                                    },
                                    skin_left: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/door_left.png'
                                    },
                                    skin_right: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/door_right.png'
                                    }
                                }
                            },
                            {
                                show: true,
                                name: 'doorRight_ZRight_ToMinus',
                                uuid: '',
                                objType: 'cube',
                                thick: 4,
                                height: 216,
                                rotation: [{
                                    direction: 'y',
                                    degree:-Math['PI']/2
                                }],
                                startDot: {
                                    x: 1030,
                                    y: 112,
                                    z: 486
                                },
                                endDot: {
                                    x: 1035,
                                    y: 112,
                                    z: 382
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x51443e
                                    },
                                    skin_down: {
                                        skinColor: 0x51443e
                                    },
                                    skin_fore: {
                                        skinColor: 0x51443e
                                    },
                                    skin_behind: {
                                        skinColor: 0x51443e
                                    },
                                    skin_left: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/door_right.png'
                                    },
                                    skin_right: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/door_left.png'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        uuid: '',
                        name: 'wall4',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_fore: {
                                skinColor: 0xdeeeee,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            }
                        },
                        startDot: {
                            x: -1030,
                            y: 120,
                            z: 650
                        },
                        endDot: {
                            x: -1030,
                            y: 120,
                            z: -650
                        },
                        childrens:[
                            {
                                op: '-',
                                show: true,
                                uuid: '',
                                name: 'doorhole',
                                objType: 'doorhole',
                                thick: 20,
                                height: 220,
                                startDot: {
                                    x: -1030,
                                    y: 110,
                                    z: 570
                                },
                                endDot: {
                                    x: -1030,
                                    y: 110,
                                    z: 466
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_down: {
                                        skinColor: 0xdddddd
                                    },
                                    skin_fore: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_behind: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_left: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_right: {
                                        skinColor: 0xffdddd
                                    }
                                }
                            },
                            {
                                show: true,
                                uuid: '',
                                name: 'doorCaseRight',
                                objType: 'cube',
                                thick: 5,
                                height: 220,
                                startDot: {
                                    x: -1040,
                                    y: 110,
                                    z: 570
                                },
                                endDot: {
                                    x: -1020,
                                    y: 110,
                                    z: 570
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_down: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_fore: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_behind: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_left: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_right: {
                                        skinColor: 0x00B2EE
                                    }
                                }
                            },
                            {
                                show: true,
                                name: 'doorCaseLeft',
                                uuid: '',
                                objType: 'cube',
                                thick: 5,
                                height: 220,
                                startDot: {
                                    x: -1040,
                                    y: 110,
                                    z: 466
                                },
                                endDot: {
                                    x: -1020,
                                    y: 110,
                                    z: 466
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_down: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_fore: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_behind: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_left: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_right: {
                                        skinColor: 0x00B2EE
                                    }
                                }
                            },
                            {
                                show: true,
                                name: 'doorCaseTop',
                                uuid: '',
                                objType: 'cube',
                                thick: 108,
                                height: 5,
                                startDot: {
                                    x: -1040,
                                    y: 220,
                                    z: 518
                                },
                                endDot: {
                                    x: -1020,
                                    y: 220,
                                    z: 518
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_down: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_fore: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_behind: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_left: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_right: {
                                        skinColor: 0x00B2EE
                                    }
                                }
                            },
                            {
                                show: true,
                                name: 'doorCaseBottom',
                                uuid: '',
                                objType: 'cube',
                                thick: 170,
                                height: 5,
                                startDot: {
                                    x: -1040,
                                    y: 5,
                                    z: 485
                                },
                                endDot: {
                                    x: -1020,
                                    y: 5,
                                    z: 485
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_down: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_fore: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_behind: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_left: {
                                        skinColor: 0x00B2EE
                                    },
                                    skin_right: {
                                        skinColor: 0x00B2EE
                                    }
                                }
                            },
                            {
                                show: true,
                                name: 'doorRight_ZRight_ToPlus',
                                uuid: '',
                                objType: 'cube',
                                thick: 4,
                                height: 210,
                                rotation: [{
                                    direction: 'y',
                                    degree:Math['PI']/2
                                }],
                                startDot: {
                                    x: -1030,
                                    y: 112,
                                    z: 570
                                },
                                endDot: {
                                    x: -1035,
                                    y: 112,
                                    z: 466
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x51443e
                                    },
                                    skin_down: {
                                        skinColor: 0x51443e
                                    },
                                    skin_fore: {
                                        skinColor: 0x51443e
                                    },
                                    skin_behind: {
                                        skinColor: 0x51443e
                                    },
                                    skin_left: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/doorone_in.png'
                                    },
                                    skin_right: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/doorone_in.png'
                                    }
                                }
                            },
                            {
                                op: '-',
                                show: true,
                                uuid: '',
                                name: 'wall4-windowHole1',
                                objType: 'windowHole',
                                thick: 20,
                                height: 200,
                                startDot: {
                                    x: -1030,
                                    y: 120,
                                    z: -630
                                },
                                endDot: {
                                    x: -1030,
                                    y: 120,
                                    z: 465
                                }
                            }
                        ]
                    },
                    {
                        uuid: '',
                        name: 'wall5-small',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_fore: {
                                skinColor: 0xdeeeee,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            }
                        },
                        startDot: {
                            x: 1030,
                            y: 120,
                            z: 370
                        },
                        endDot: {
                            x: 410,
                            y: 120,
                            z: 370
                        },
                        childrens: [
                            {
                                op: '-',
                                show: true,
                                uuid: '',
                                name: 'doorhole',
                                objType: 'doorhole',
                                thick: 20,
                                height: 220,
                                startDot: {
                                    x: 460,
                                    y: 110,
                                    z: 370
                                },
                                endDot: {
                                    x: 670,
                                    y: 110,
                                    z: 370
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_down: {
                                        skinColor: 0xdddddd
                                    },
                                    skin_fore: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_behind: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_left: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_right: {
                                        skinColor: 0xffdddd
                                    }
                                }
                            },
                            {
                                show: true,
                                name: 'doorLeft',
                                uuid: '',
                                objType: 'cube',
                                thick: 4,
                                height: 210,
                                startDot: {
                                    x: 565,
                                    y: 112,
                                    z: 370
                                },
                                endDot: {
                                    x: 669,
                                    y: 112,
                                    z: 370
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x51443e
                                    },
                                    skin_down: {
                                        skinColor: 0x51443e
                                    },
                                    skin_fore: {
                                        skinColor: 0x51443e
                                    },
                                    skin_behind: {
                                        skinColor: 0x51443e
                                    },
                                    skin_left: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/doorone_in.png'
                                    },
                                    skin_right: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/doorone_in_right.png'
                                    }
                                }
                            },
                            {
                                show: true,
                                name: 'doorRight',
                                uuid: '',
                                objType: 'cube',
                                thick: 4,
                                height: 210,
                                startDot: {
                                    x: 461,
                                    y: 112,
                                    z: 370
                                },
                                endDot: {
                                    x: 565,
                                    y: 112,
                                    z: 370
                                },
                                skin: {
                                    opacity: 0.1,
                                    skin_up: {
                                        skinColor: 0x51443e
                                    },
                                    skin_down: {
                                        skinColor: 0x51443e
                                    },
                                    skin_fore: {
                                        skinColor: 0x51443e
                                    },
                                    skin_behind: {
                                        skinColor: 0x51443e
                                    },
                                    skin_left: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/doorone_in_right.png'
                                    },
                                    skin_right: {
                                        skinColor: 0x51443e,
                                        imgurl: './res/doorone_in.png'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        uuid: '',
                        name: 'wall6-small',
                        thick: 20,
                        height: 240,
                        skin: {
                            skin_up: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_down: {
                                skinColor: 0xdddddd,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_fore: {
                                skinColor: 0xdeeeee,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_behind: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_left: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            },
                            skin_right: {
                                skinColor: 0xb0cee0,
                                imgurl: './res/outside_lightmap.jpg'
                            }
                        },
                        startDot: {
                            x: 400,
                            y: 120,
                            z: 360
                        },
                        endDot: {
                            x: 400,
                            y: 120,
                            z: 650
                        },
                        childrens:[
                            {
                                op: '-',
                                show: true,
                                uuid: '',
                                name: 'doorhole',
                                objType: 'doorhole',
                                thick: 2,
                                height: 2,
                                startDot: {
                                    x: 400,
                                    y: 110,
                                    z: 640
                                },
                                endDot: {
                                    x: 400,
                                    y: 110,
                                    z: 640
                                },
                                skin: {
                                    skin_up: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_down: {
                                        skinColor: 0xdddddd
                                    },
                                    skin_fore: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_behind: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_left: {
                                        skinColor: 0xffdddd
                                    },
                                    skin_right: {
                                        skinColor: 0xffdddd
                                    }
                                }
                            },
                        ]
                    }
                    ],
                style: {
                    //skinColor: 0x8ac9e2
                    skinColor:0x00B2EE
                }
            },
            {
                show: true,
                name: 'windowGlass1',
                uuid: '',
                objType: 'glasses',
                width: 250,
                height: 160,
                pic: './res/glass.png',
                transparent: true,
                opacity: 1,
                position: {
                    x: -693,
                    y: 130,
                    z: -640
                },
                rotation: {
                    x: 0,
                    y: 0 * Math['PI'],
                    z: 0
                },
                blending: false
            },
            {
                show: true,
                name: 'windowGlass2',
                uuid: '',
                objType: 'glasses',
                width: 250,
                height: 160,
                pic: './res/glass.png',
                transparent: true,
                opacity: 1,
                position: {
                    x: -231,
                    y: 130,
                    z: -640
                },
                rotation: {
                    x: 0,
                    y: 0 * Math['PI'],
                    z: 0
                },
                blending: false
            },
            {
                show: true,
                name: 'windowGlass3',
                uuid: '',
                objType: 'glasses',
                width: 250,
                height: 160,
                pic: './res/glass.png',
                transparent: true,
                opacity: 1,
                position: {
                    x: 231,
                    y: 130,
                    z: -640
                },
                rotation: {
                    x: 0,
                    y: 0 * Math['PI'],
                    z: 0
                },
                blending: false
            },
            {
                show: true,
                name: 'wall4-windowGlass',
                uuid: '',
                objType: 'glasses',
                width: 1095,
                height: 200,
                pic: './res/glass.png',
                transparent: true,
                opacity: 1,
                position: {
                    x: -1030,
                    y: 120,
                    z: -93
                },
                rotation: {
                    x: 0,
                    y: 0.5 * Math['PI'],
                    z: 0
                },
                blending: false
            },
            {
                show: true,
                name: 'wall2-windowGlass',
                uuid: '',
                objType: 'glasses',
                width: 250,
                height: 160,
                pic: './res/glass.png',
                transparent: true,
                opacity: 1,
                position: {
                    x: -231,
                    y: 130,
                    z: 640
                },
                rotation: {
                    x: 0,
                    y: 0 * Math['PI'],
                    z: 0
                },
                blending: false
            },
            {
                show: true,
                name: 'windowGlass4',
                uuid: '',
                objType: 'glasses',
                width: 250,
                height: 160,
                pic: './res/glass.png',
                transparent: true,
                opacity: 1,
                position: {
                    x: 693,
                    y: 130,
                    z: -640
                },
                rotation: {
                    x: 0,
                    y: 0 * Math['PI'],
                    z: 0
                },
                blending: false
            },
            {
                show: true,
                uuid: '',
                name: 'aircondition1',
                objType: 'cube',
                length: 60,
                width: 150,
                height: 220,
                rotation: [{
                    direction: 'y',
                    degree: -Math['PI']/2
                }],
                x: -450,
                y: 110,
                z: -595,
                style: {
                    skinColor: 0xfefefe,
                    skin: {
                        skin_fore: {
                            imgurl: './res/aircondition_front.png'
                        },
                        skin_left: {
                            imgurl: './res/aircondition_side.png'
                        },
                        skin_right: {
                            imgurl: './res/aircondition_side.png'
                        },
                        skin_up: {
                            imgurl: './res/aircondition_side.png'
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'aircondition2',
                objType: 'cube',
                length: 60,
                width: 150,
                height: 220,
                rotation: [{
                    direction: 'y',
                    degree:-Math['PI']/2
                }],
                x: 450,
                y: 110,
                z: -595,
                style: {
                    skinColor: 0xfefefe,
                    skin: {
                        skin_fore: {
                            imgurl: './res/aircondition_front.png'
                        },
                        skin_left: {
                            imgurl: './res/aircondition_side.png'
                        },
                        skin_right: {
                            imgurl: './res/aircondition_side.png'
                        },
                        skin_up: {
                            imgurl: './res/aircondition_side.png'
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'aircondition3_min',
                objType: 'cube',
                length: 60,
                width: 60,
                height: 220,
                rotation: [{
                    direction: 'y',
                    degree:-Math['PI']/2
                }],
                x: -880,
                y: 110,
                z: -595,
                style: {
                    skinColor: 0xfefefe,
                    skin: {
                        skin_fore: {
                            imgurl: './res/aircondition.jpg'
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'firedevice1',
                objType: 'cube',
                length: 60,
                width: 80,
                height: 220,
                rotation: [{
                    direction: 'y',
                    degree: -Math['PI']/2
                }],
                x: -650,
                y: 110,
                z: -595,
                style: {
                    skinColor: 0xfefefe,
                    skin: {
                        skin_fore: {
                            imgurl: './res/firedevice.png'
                        },
                        skin_left:{
                            imgurl: './res/firedevice_side.png'
                        },
                        skin_right:{
                            imgurl: './res/firedevice_side.png'
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'firedevice2',
                objType: 'cube',
                length: 60,
                width: 80,
                height: 220,
                rotation: [{
                    direction: 'y',
                    degree: Math['PI']/2
                }],
                x: -650,
                y: 110,
                z: 600,
                style: {
                    skinColor: 0xfefefe,
                    skin: {
                        skin_fore: {
                            imgurl: './res/firedevice.png'
                        },
                        skin_left:{
                            imgurl: './res/firedevice_side.png'
                        },
                        skin_right:{
                            imgurl: './res/firedevice_side.png'
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'firedevice3',
                objType: 'cube',
                length: 60,
                width: 80,
                height: 220,
                rotation: [{
                    direction: 'y',
                    degree: Math['PI']/2
                }],
                x: 980,
                y: 110,
                z: 330,
                style: {
                    skinColor: 0xfefefe,
                    skin: {
                        skin_fore: {
                            imgurl: './res/firedevice.png'
                        },
                        skin_left:{
                            imgurl: './res/firedevice_side.png'
                        },
                        skin_right:{
                            imgurl: './res/firedevice_side.png'
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'firedevice4',
                objType: 'cube',
                length: 60,
                width: 80,
                height: 220,
                rotation: [{
                    direction: 'y',
                    degree: -Math['PI']/2
                }],
                x: 950,
                y: 110,
                z: -595,
                style: {
                    skinColor: 0xfefefe,
                    skin: {
                        skin_fore: {
                            imgurl: './res/firedevice.png'
                        },
                        skin_left:{
                            imgurl: './res/firedevice_side.png'
                        },
                        skin_right:{
                            imgurl: './res/firedevice_side.png'
                        }
                    }
                }
            },
            {
                show: true,
                name: 'messagePanel',
                uuid: '',
                objType: 'plane',
                width: 100,
                height: 160,
                pic: './res/message.jpg',
                transparent: true,
                opacity: 1,
                position: {
                    x: 388,
                    y: 150,
                    z: 495
                },
                rotation: {
                    x: 0,
                    y: -Math['PI']/2,
                    z: 0
                },
                blending: false
            },
            {
                show: true,
                uuid: '',
                name: 'cylinder21',
                objType: 'cube',
                length: 100,
                width: 50,
                height: 242,
                x: 0,
                y: 120,
                z: 656,
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_up: {
                            skinColor: 0x8ac9e2
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'cylinder22',
                objType: 'cube',
                length: 100,
                width: 50,
                height: 241,
                x: -950,
                y: 120,
                z: 656,
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_up: {
                            skinColor: 0x8ac9e2
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'cylinder11',
                objType: 'cube',
                length: 50,
                width: 50,
                height: 241,
                x: 0,
                y: 120,
                z: -624,
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_up: {
                            skinColor: 0x8ac9e2
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'cylinder12',
                objType: 'cube',
                length: 50,
                width: 50,
                height: 241,
                x: -950,
                y: 120,
                z: -624,
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_up: {
                            skinColor: 0x8ac9e2
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'cylinder13',
                objType: 'cube',
                length: 50,
                width: 50,
                height: 241,
                x: 1014,
                y: 120,
                z: -624,
                style: {
                    skinColor: 0x8ac9e2,
                    skin: {
                        skin_up: {
                            skinColor: 0x8ac9e2
                        }
                    }
                }
            },
            {
                card:null,
                show: true,
                name: 'cabinet1_1',
                shellname: 'cabinet1_1_shell',
                uuid: '',
                objType: 'emptyCabinet',
                transparent: true,
                size: {
                    length: 80,//66
                    width: 70,
                    height: 200,
                    thick: 2
                },
                position: {
                    x: 680,
                    y: 105,
                    z: -400
                },
                doors: {
                    doorType: 'lr',
                    doorSize: [1],
                    doorname: ['cabinet1_1_door_01'/*,'cabinet1_1_door_02'*/],
                    rotation:[{
                        direction: 'x',
                        degree: -Math.PI
                    }
                    ],
                    skins: [
                        {
                        skinColor: 0x333333,
                        skin_fore: {
                            imgurl: './res/rack_door_back.jpg'
                        },
                        skin_behind: {
                            imgurl: './res/cabinet_door2.png'
                        }
                    }]
                },
                skin: {
                    skinColor: 0xffff00,
                    skin_up: {
                        skin: {
                            skinColor: 0xff0000,
                            skin_up: {
                                imgurl: './res/rack_door_back.jpg'
                            },
                            skin_down: {
                                imgurl: './res/rack_door_back.jpg'
                            },
                            skin_fore: {
                                skinColor: 0xff0000,
                                //imgurl: './res/rack_door_back.jpg'
                                imgurl: './res/rack_door_back.jpg'//机柜后面
                            },
                            skin_behind: {
                                skinColor: 0xff0000,
                                imgurl: './res/rack_door_back.jpg'
                            },
                            skin_left: {
                                imgurl: './res/cabinet_side.png'
                            },
                            skin_right: {
                                imgurl: './res/cabinet_side.png'
                            }
                        }
                    },
                    skin_down: {
                        skin: {
                            skinColor: 0x333333
                        }
                    },
                    skin_left: {
                        skin: {
                            skinColor: 0x333333
                        }
                    },
                    skin_right: {
                        skin: {
                            skinColor: 0x333333
                        }
                    },
                    skin_behind: {
                        skin: {
                            skinColor: 0x333333
                        }
                    }
                }
            },
            {
                show: true,
                uuid: '',
                name: 'cabinet4_9_equipment_card_11',
                objType: 'cube',
                length: 60,
                width: 65,
                height: 20,
                parent:'cabinet4_9',
                x: -160,
                y: 80,
                z: 185,
                style: {
                    skinColor: 0x92630b,
                    skin: {
                        skin_up: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_down: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_fore: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_behind: {
                            skinColor: 0x92630b,
                            imgurl: './res/server2.jpg'
                        },
                        skin_left: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_right: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        }
                    }
                }
            },
            {
                parent:'cabinet4_9',
                show: true,
                uuid: '',
                name: 'cabinet4_9_equipment_card_21',
                objType: 'cube',
                length: 60,
                width: 65,
                height: 20,
                x: -160,
                y: 60,
                z: 185,
                style: {
                    skinColor: 0x92630b,
                    skin: {
                        skin_up: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_down: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_fore: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_behind: {
                            skinColor: 0x92630b,
                            imgurl: './res/server2.jpg'
                        },
                        skin_left: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_right: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        }
                    }
                }
            },
            {
                parent:'cabinet4_9',
                show: true,
                uuid: '',
                name: 'cabinet4_9_equipment_card_22',
                objType: 'cube',
                length: 60,
                width: 65,
                height: 20,
                x: -160,
                y: 40,
                z: 185,
                style: {
                    skinColor: 0x92630b,
                    skin: {
                        skin_up: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_down: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_fore: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_behind: {
                            skinColor: 0x92630b,
                            imgurl: './res/server2.jpg'
                        },
                        skin_left: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_right: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        }
                    }
                }
            },
            {
                parent:'cabinet4_9',
                show: true,
                uuid: '',
                name: 'cabinet4_9_equipment_card_52',
                objType: 'cube',
                length: 60,
                width: 65,
                height: 20,
                x: -160,
                y: 170,
                z: 185,
                style: {
                    skinColor: 0x92630b,
                    skin: {
                        skin_up: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_down: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_fore: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_behind: {
                            skinColor: 0x92630b,
                            imgurl: './res/server2.jpg'
                        },
                        skin_left: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_right: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        }
                    }
                }
            },
            {
                parent:'cabinet4_9',
                show: true,
                uuid: '',
                name: 'cabinet4_9_equipment_card_1',
                objType: 'cube',
                length: 60,
                width: 65,
                height: 20,
                x: -160,
                y: 100,
                z: 185,
                style: {
                    skinColor: 0x92630b,
                    skin: {
                        skin_up: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_down: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_fore: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_behind: {
                            skinColor: 0x92630b,
                            imgurl: './res/server2.jpg'
                        },
                        skin_left: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_right: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        }
                    }
                }
            },
            {
                parent:'cabinet4_9',
                show: true,
                uuid: '',
                name: 'cabinet4_9_equipment_card_2',
                objType: 'cube',
                length: 60,
                width: 65,
                height: 20,
                x: -160,
                y: 120,
                z: 185,
                style: {
                    skinColor: 0x92630b,
                    skin: {
                        skin_up: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_down: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_fore: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_behind: {
                            skinColor: 0x92630b,
                            imgurl: './res/server2.jpg'
                        },
                        skin_left: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_right: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        }
                    }
                }
            },
            {
                parent:'cabinet4_9',
                show: true,
                uuid: '',
                name: 'cabinet4_9_equipment_card_4',
                objType: 'bladeServer',
                length: 60,
                width: 65,
                height: 30,
                x: -160,
                y: 145,
                z: 185,
                style: {
                    skinColor: 0x92630b,
                    skin: {
                        skin_up: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_down: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_fore: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_behind: {
                            skinColor: 0x92630b,
                            imgurl: './res/server3.png'
                        },
                        skin_left: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        },
                        skin_right: {
                            skinColor: 0x92630b,
                            imgurl: './res/rack_inside.jpg'
                        }
                    }
                },
                childrens: [{
                    show: true,
                    uuid: '',
                    name: 'cabinet4_9_equipment_card_4_12',
                    objType: 'cube',
                    length: 58,
                    width: 3,
                    height: 28.5,
                    x: -2,
                    y: 0,
                    z: -3,
                    style: {
                        skinColor: 0x92630b,
                        skin: {
                            skin_up: {
                                skinColor: 0x92630b,
                                imgurl: ''
                            },
                            skin_down: {
                                skinColor: 0x92630b,
                                imgurl: ''
                            },
                            skin_fore: {
                                skinColor: 0x92630b,
                                imgurl: ''
                            },
                            skin_behind: {
                                skinColor: 0x92630b,
                                imgurl: './res/card4.png'
                            },
                            skin_left: {
                                skinColor: 0x92630b,
                                imgurl: './res/card_body.png'
                            },
                            skin_right: {
                                skinColor: 0x92630b,
                                imgurl: './res/card_body.png'
                            }
                        }
                    }
                },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_13',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: -6,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_14',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: -9,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_15',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: -12,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_16',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: -15,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_17',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: -18,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_18',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: -21,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card2.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_19',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: -24,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card2.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_20',
                        objType: 'cube',
                        length: 58,
                        width: 5,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: -28,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card1.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_01',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 0,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_02',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 3,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_03',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 6,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_04',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 9,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_05',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 12,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_06',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 15,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_07',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 18,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card4.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_08',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 21,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card5.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_09',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 24,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card5.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    },
                    {
                        show: true,
                        uuid: '',
                        name: 'cabinet4_9_equipment_card_4_10',
                        objType: 'cube',
                        length: 58,
                        width: 3,
                        height: 28.5,
                        x: -2,
                        y: 0,
                        z: 27,
                        style: {
                            skinColor: 0x92630b,
                            skin: {
                                skin_up: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_down: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_fore: {
                                    skinColor: 0x92630b,
                                    imgurl: ''
                                },
                                skin_behind: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card5.png'
                                },
                                skin_left: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                },
                                skin_right: {
                                    skinColor: 0x92630b,
                                    imgurl: './res/card_body.png'
                                }
                            }
                        }
                    }]
            }
        ],
        events: {
            dbclick: [
                {
                    obj_name: 'doorRight',
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        openRightDoor(_0xa5dex5, function () {})
                    }
                },
                {
                    obj_name: 'doorRight_ZRight_ToPlus',
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        doorRight_ZRight_ToPlus(_0xa5dex5, function () {})
                    }
                },
                {
                    obj_name: 'doorRight_ZRight_ToMinus',
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        doorRight_ZRight_ToMinus(_0xa5dex5, function () {})
                    }
                },
                {
                    obj_name: 'doorRight_ZLeft_ToMinus',
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        doorRight_ZLeft_ToMinus(_0xa5dex5, function () {})
                    }
                },
                {
                    obj_name: 'doorLeft',
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        var _0xa5dex7 = 'close';
                        var _0xa5dex8 = null;
                        if (_0xa5dex5['doorState'] != null && typeof(_0xa5dex5['doorState']) != 'undefined') {
                            _0xa5dex7 = _0xa5dex5['doorState'];
                            _0xa5dex8 = _0xa5dex5['parent']
                        } else {
                            console['log']('add parent');
                            var _0xa5dex9 = _0xa5dex5['parent'];
                            _0xa5dex8 = new THREE.Object3D();
                            _0xa5dex8['position']['set'](_0xa5dex5['position']['x'] + _0xa5dex5['geometry']['parameters']['width'] / 2, _0xa5dex5['position']['y'], _0xa5dex5['position']['z']);
                            _0xa5dex5['position']['set'](-_0xa5dex5['geometry']['parameters']['width'] / 2, 0, 0);
                            _0xa5dex8['add'](_0xa5dex5);
                            _0xa5dex9['add'](_0xa5dex8)
                        };
                        _0xa5dex5['doorState'] = (_0xa5dex7 == 'close' ? 'open' : 'close');
                        new TWEEN.Tween(_0xa5dex8['rotation'])['to']({
                            y: (_0xa5dex7 == 'close' ? -0.25 * 2 * Math['PI'] : 0 * 2 * Math['PI'])
                        }, 2000)['start']()
                    }
                },
                {
                    obj_name: 'cabinetdoor3_1',
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        opcabinetdoor(_0xa5dex5)
                    }
                },
                {

                    findObject: function (_0xa5dexa) {
                        console.log('_0xa5dexa',_0xa5dexa);
                        if (_0xa5dexa['indexOf']('cabinet') >= 0 && _0xa5dexa['indexOf']('door') >= 0) {
                            return true
                        } else {
                            return false
                        }
                    },
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        opcabinetdoor(_0xa5dex5)
                    }
                },
                {
                    findObject: function (_0xa5dexa) {
                        if (_0xa5dexa['indexOf']('cabinet') >= 0 && (_0xa5dexa['indexOf']('shell') >= 0||_0xa5dexa['indexOf']('_box_box')>=0)) {
                            return true
                        } else {
                            return false
                        }
                    },
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        cabinetdbclick(_0xa5dex5,msj3DObj,_0xa5dex4);
                    }
                },
                {
                    findObject: function (_0xa5dexa) {
                        if (_0xa5dexa['indexOf']('equipment') >= 0 && _0xa5dexa['indexOf']('card') >= 0) {
                            return true
                        } else {
                            return false
                        }
                    },
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        var _0xa5dexb = 'in';
                        if (_0xa5dex5['cardstate'] != null && typeof(_0xa5dex5['cardstate']) != 'undefined') {
                            _0xa5dexb = _0xa5dex5['cardstate']
                        } else {
                            _0xa5dex5['cardstate'] = 'out'
                        };
                        new TWEEN.Tween(_0xa5dex5['position'])['to']({
                            x: (_0xa5dexb == 'in' ? _0xa5dex5['position']['x'] - 50 : _0xa5dex5['position']['x'] + 50)
                        }, 1000)['onComplete'](function () {
                            _0xa5dex5['cardstate'] = _0xa5dexb == 'in' ? 'out' : 'in'
                        })['start']()
                    }
                }],
            mouseDown: [
                {
                    findObject: function (_0xa5dexa) {
                        if (_0xa5dexa['indexOf']('equipment') >= 0 && _0xa5dexa['indexOf']('card') >= 0) {
                            return true
                        } else {
                            return false
                        }
                    },
                    obj_uuid: '',
                    obj_event: function (_0xa5dex5, _0xa5dex6) {
                        var _0xa5dexc = [{
                            id: 'devname',
                            name: '\u8BBE\u5907\u540D\u79F0\uFF1A',
                            type: '',
                            value: 'huawei\u4EA4\u6362\u673A'
                        },
                            {
                                id: 'devtype',
                                name: '\u7C7B\u578B\uFF1A',
                                type: '',
                                value: '\u4EA4\u6362\u673A'
                            },
                            {
                                id: 'devip',
                                name: 'IP\uFF1A',
                                type: '',
                                value: '192.168.0.1'
                            },
                            {
                                id: 'upbw',
                                name: '\u4E0A\u884C\u5E26\u5BBD\uFF1A',
                                type: '',
                                value: '191'
                            },
                            {
                                id: 'downbw',
                                name: '\u4E0B\u884C\u5E26\u5BBD\uFF1A',
                                type: '',
                                value: '168'
                            }];
                        showDiv('main', false, false, _0xa5dex6, _0xa5dexc);
                        if (t1 > 0) {
                            clearInterval(t1)
                        };
                        t1 = window['setInterval'](updateDivItemVaule, 1000)
                    }
                },
                {
                        findObject: function (_0xa5dexa) {
                            if (_0xa5dexa['indexOf']('camera') >= 0) {
                                return true
                            } else {
                                return false
                            }
                        },
                        obj_uuid: '',
                        obj_event: function (_0xa5dex5, _0xa5dex6) {
                            showVideoDiv('main', false, false, _0xa5dex6, null)
                        }
                }
            ],
            mouseUp: {},
            mouseMove: {}
        },
        btns: [
            {
                btnid: 'btn_reset',
                btnTitle: '\u573A\u666F\u590D\u4F4D',
                btnimg: './res/menus/reset.png',
                event: function () {
                    $('#canvas-frame')['empty']();
                    msj3DObj = null;
                    msjstation = null;
                    msjstation = new Digital3D();
                    msjstation['initmsj3D']('canvas-frame', _0xa5dex3, _0xa5dex4);
                    msjstation['start']()
                    for(var i=0;i<_0xa5dex4.rowLabels.length;i++){
                        msjstation['scene']['add'](makeText(_0xa5dex4.rowLabels[i]));
                    }
                    for(var i=0;i<_0xa5dex4.rowLabelsBack.length;i++){
                        msjstation['scene']['add'](makeText(_0xa5dex4.rowLabelsBack[i]));
                    }
                    for(var i=0;i< _0xa5dex4.columnsLabels.length;i++){
                        msjstation['scene']['add'](makeText( _0xa5dex4.columnsLabels[i]));
                    }
                    drawCabinetCards(msjstation['scene'],_0xa5dex4.cabinetCards);

                    drawAreas(msjstation);
                    createCabinetBox(_0xa5dex4);
                }
            },
            {
                btnid: 'btn_power',
                btnTitle: '\u4F9B\u7535\u7535\u7F06',
                btnimg: './res/menus/power.png',
                event: function () {
                   if(!msjstation['mpower'])
                   {
                       var yHeight=20;
                        for(var c=0;c<4;c++){
                            for(var line=0;line<13;line++ ){
                                var e9linename='e9_line_'+c+'_'+line;
                                var _0xa5dexf = {
                                    name: e9linename,
                                    type: 'beeline',
                                    visible: true,
                                    imgurl: 'res/UV_Red.png',
                                    radiu: 0.5,
                                    scene: true
                                };
                                var _0xa5dex10 = [
                                    {
                                        x: 410,
                                        y: 50+c*10,
                                        z: 165+3*line
                                    },
                                    {
                                        x: 465+c*5,
                                        y: 50+c*10,
                                        z: 165+3*line
                                    },
                                    {
                                        x: 465+c*5,
                                        y: 16-c*2,
                                        z: 165+3*line
                                    }];
                                if(c==0){
                                    //F
                                    if(line>=4){
                                        var index=line-4;
                                        _0xa5dex10.push({
                                            x: 730+index*2,
                                            y: 16-c*2,
                                            z: 165+3*line
                                        });
                                        _0xa5dex10.push({
                                            x: 730+index*2,
                                            y: 16-c*2,
                                            z: 165+3*line-index*73
                                        });
                                        _0xa5dex10.push({
                                            x: 730+index*2,
                                            y: yHeight,
                                            z: 165+3*line-index*73
                                        });
                                        _0xa5dex10.push({
                                            x: 700+index*2,
                                            y: yHeight,
                                            z: 165+3*line-index*73
                                        });
                                    }
                                    //E
                                    if(line<4){
                                        var index=line;
                                        _0xa5dex10.push({
                                            x: 464-index*2,
                                            y: 16-c*2,
                                            z: 165+3*line
                                        });
                                        _0xa5dex10.push({
                                            x: 464-index*2,
                                            y: 16-c*2,
                                            z: 30-70*index
                                        });
                                        _0xa5dex10.push({
                                            x: 464-index*2,
                                            y: yHeight,
                                            z: 30-70*index
                                        });
                                        _0xa5dex10.push({
                                            x: 430,
                                            y: yHeight,
                                            z: 30-70*index
                                        });
                                    }
                                }
                                if(c==1){
                                    if(line<3){
                                        _0xa5dex10.push({
                                            x: 465-c*5-1-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line
                                        });
                                        _0xa5dex10.push({
                                            x: 465-c*5-1-line*2,
                                            y: 16-c*2,
                                            z: -260-70*line
                                        });
                                        _0xa5dex10.push({
                                            x: 465-c*5-1-line*2,
                                            y: yHeight,
                                            z: -260-70*line
                                        });
                                        _0xa5dex10.push({
                                            x: 430,
                                            y: yHeight,
                                            z: -260-70*line
                                        });
                                    }
                                    if(line>=3&&line<=11){
                                        var index=line-3;
                                        _0xa5dex10.push({
                                            x: 195-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line
                                        });
                                        _0xa5dex10.push({
                                            x: 195-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line-75*index
                                        });
                                        _0xa5dex10.push({
                                            x: 195-line*2,
                                            y: yHeight,
                                            z: 165+3*line-75*index
                                        });
                                        _0xa5dex10.push({
                                            x: 160,
                                            y: yHeight,
                                            z: 165+3*line-75*index
                                        });
                                    }
                                    if(line>11){
                                        var index=line-11;
                                        _0xa5dex10.push({
                                            x: -85-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line
                                        });
                                        _0xa5dex10.push({
                                            x: -85-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line-20*index
                                        });
                                        _0xa5dex10.push({
                                            x: -85-line*2,
                                            y: yHeight,
                                            z: 165+3*line-20*index
                                        });
                                        _0xa5dex10.push({
                                            x: -85-line*2-20,
                                            y: yHeight,
                                            z: 165+3*line-20*index
                                        });
                                    }
                                }
                                if(c==2){
                                    if(line<=7){
                                        _0xa5dex10.push({
                                            x: -85-c*5-1-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line
                                        });
                                        _0xa5dex10.push({
                                            x: -85-c*5-1-line*2,
                                            y: 16-c*2,
                                            z: 105+3*line-75*line
                                        });
                                        _0xa5dex10.push({
                                            x: -85-c*5-1-line*2,
                                            y: yHeight,
                                            z: 105+3*line-75*line
                                        });
                                        _0xa5dex10.push({
                                            x: -85-c*5-1-line*2-20,
                                            y: yHeight,
                                            z: 105+3*line-75*line
                                        });
                                    }
                                    if(line>7){
                                        var index=line-8;
                                        _0xa5dex10.push({
                                            x: -355-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line
                                        });

                                        _0xa5dex10.push({
                                            x: -355-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line-78*index
                                        });
                                        _0xa5dex10.push({
                                            x: -355-line*2,
                                            y: yHeight,
                                            z: 165+3*line-78*index
                                        });
                                        _0xa5dex10.push({
                                            x: -355-line*2-30,
                                            y: yHeight,
                                            z: 165+3*line-78*index
                                        });
                                    }
                                }
                                if(c==3){
                                    if(line<=3){
                                        _0xa5dex10.push({
                                            x: -365-c*5-1-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line
                                        });
                                        _0xa5dex10.push({
                                            x: -365-c*5-1-line*2,
                                            y: 16-c*2,
                                            z: -180-73*line
                                        });
                                        _0xa5dex10.push({
                                            x: -365-c*5-1-line*2,
                                            y: yHeight,
                                            z: -180-73*line
                                        });
                                        _0xa5dex10.push({
                                            x: -365-c*5-1-line*2-20,
                                            y: yHeight,
                                            z: -180-73*line
                                        });
                                    }
                                    if(line>3){
                                        var index=line-4;
                                        _0xa5dex10.push({
                                            x: -645-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line
                                        });

                                        _0xa5dex10.push({
                                            x: -645-line*2,
                                            y: 16-c*2,
                                            z: 165+3*line-73*index
                                        });
                                        _0xa5dex10.push({
                                            x: -645-line*2,
                                            y: yHeight,
                                            z: 165+3*line-73*index
                                        });
                                        _0xa5dex10.push({
                                            x: -645-line*2-30,
                                            y: yHeight,
                                            z: 165+3*line-73*index
                                        });
                                    }
                                }
                                var tunnel=msj3DObj['addTunnel'](_0xa5dexf, _0xa5dex10);
                                //tunnel.visible=false;
                                _0xa5dex4.ups1.push(tunnel);
                            }
                        }
                        window.setTimeout(function () {
                            //yHeight=yHeight+2;
                            for(var c=0;c<4;c++){
                                for(var line=0;line<13;line++ ){
                                    var e8linename='e8_line_'+c+'_'+line;
                                     _0xa5dexf = {
                                        name: e8linename,
                                        type: 'beeline',
                                        visible: true,
                                        imgurl: 'res/UV_Green.png',
                                        radiu: 0.5,
                                        scene: true
                                    };
                                     _0xa5dex10 = [
                                        {
                                            x: 410,
                                            y: 50+c*10,
                                            z: 95+3*line
                                        },
                                        {
                                            x: 465+c*5,
                                            y: 50+c*10,
                                            z: 95+3*line
                                        },
                                        {
                                            x: 465+c*5,
                                            y: 14-c*2,
                                            z: 95+3*line
                                        },
                                         {
                                             x: 465+c*5-line,
                                             y: 14-c*2,
                                             z: 95+3*line
                                         },
                                         {
                                             x: 465+c*5-line,
                                             y: 14-c*2,
                                             z: 160+3*line
                                         }];

                                    if(c==0){
                                        //F
                                        if(line>=4){
                                            var index=line-4;
                                            _0xa5dex10.push({
                                                x: 730+index*2,
                                                y: 14-c*2,
                                                z: 165+3*line
                                            });
                                            _0xa5dex10.push({
                                                x: 730+index*2,
                                                y: 14-c*2,
                                                z: 165+3*line-index*73-2
                                            });
                                            _0xa5dex10.push({
                                                x: 730+index*2,
                                                y: yHeight,
                                                z: 165+3*line-index*73-2
                                            });
                                            _0xa5dex10.push({
                                                x: 700+index*2,
                                                y: yHeight,
                                                z: 165+3*line-index*73-2
                                            });
                                        }
                                        //E
                                        if(line<4){
                                            var index=line;
                                            _0xa5dex10.push({
                                                x: 464-index*2,
                                                y: 14-c*2,
                                                z: 165+3*line
                                            });
                                            _0xa5dex10.push({
                                                x: 464-index*2,
                                                y: 14-c*2,
                                                z: 30-70*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: 464-index*2,
                                                y: yHeight,
                                                z: 30-70*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: 430,
                                                y: yHeight,
                                                z: 30-70*index-2
                                            });
                                        }
                                    }
                                    if(c==1){
                                        if(line<3){
                                            _0xa5dex10.push({
                                                x: 465-c*5-1-line*2,
                                                y: 14-c*2,
                                                z: 165+3*line
                                            });
                                            _0xa5dex10.push({
                                                x: 465-c*5-1-line*2,
                                                y: 14-c*2,
                                                z: -260-70*line-2
                                            });
                                            _0xa5dex10.push({
                                                x: 465-c*5-1-line*2,
                                                y: yHeight,
                                                z: -260-70*line-2
                                            });
                                            _0xa5dex10.push({
                                                x: 430,
                                                y: yHeight,
                                                z: -260-70*line-2
                                            });
                                        }
                                        if(line>=3&&line<=11){
                                            var index=line-3;
                                            _0xa5dex10.push({
                                                x: 195-line*2,
                                                y: 16-c*2,
                                                z: 165+3*line
                                            });
                                            _0xa5dex10.push({
                                                x: 195-line*2,
                                                y: 14-c*2,
                                                z: 165+3*line-75*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: 195-line*2,
                                                y: yHeight,
                                                z: 165+3*line-75*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: 160,
                                                y: yHeight,
                                                z: 165+3*line-75*index-2
                                            });
                                        }
                                        if(line>11){
                                            var index=line-11;
                                            _0xa5dex10.push({
                                                x: -85-line*2,
                                                y: 14-c*2,
                                                z: 165+3*line
                                            });
                                            _0xa5dex10.push({
                                                x: -85-line*2,
                                                y: 14-c*2,
                                                z: 165+3*line-20*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: -85-line*2,
                                                y: yHeight,
                                                z: 165+3*line-20*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: -85-line*2-20,
                                                y: yHeight,
                                                z: 165+3*line-20*index-2
                                            });
                                        }
                                    }
                                    if(c==2){
                                        if(line<=7){
                                            _0xa5dex10.push({
                                                x: -85-c*5-1-line*2,
                                                y: 16-c*2,
                                                z: 165+3*line
                                            });
                                            _0xa5dex10.push({
                                                x: -85-c*5-1-line*2,
                                                y: 14-c*2,
                                                z: 105+3*line-75*line-2
                                            });
                                            _0xa5dex10.push({
                                                x: -85-c*5-1-line*2,
                                                y: yHeight,
                                                z: 105+3*line-75*line-2
                                            });
                                            _0xa5dex10.push({
                                                x: -85-c*5-1-line*2-20,
                                                y: yHeight,
                                                z: 105+3*line-75*line-2
                                            });
                                        }
                                        if(line>7){
                                            var index=line-8;
                                            _0xa5dex10.push({
                                                x: -355-line*2,
                                                y: 14-c*2,
                                                z: 165+3*line
                                            });

                                            _0xa5dex10.push({
                                                x: -355-line*2,
                                                y: 14-c*2,
                                                z: 165+3*line-78*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: -355-line*2,
                                                y: yHeight,
                                                z: 165+3*line-78*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: -355-line*2-30,
                                                y: yHeight,
                                                z: 165+3*line-78*index-2
                                            });
                                        }
                                    }
                                    if(c==3){
                                        if(line<=3){
                                            _0xa5dex10.push({
                                                x: -365-c*5-1-line*2,
                                                y: 14-c*2,
                                                z: 165+3*line
                                            });
                                            _0xa5dex10.push({
                                                x: -365-c*5-1-line*2,
                                                y: 14-c*2,
                                                z: -180-73*line-2
                                            });
                                            _0xa5dex10.push({
                                                x: -365-c*5-1-line*2,
                                                y: yHeight,
                                                z: -180-73*line-2
                                            });
                                            _0xa5dex10.push({
                                                x: -365-c*5-1-line*2-20,
                                                y: yHeight,
                                                z: -180-73*line-2
                                            });
                                        }
                                        if(line>3){
                                            var index=line-4;
                                            _0xa5dex10.push({
                                                x: -645-line*2,
                                                y: 14-c*2,
                                                z: 165+3*line
                                            });

                                            _0xa5dex10.push({
                                                x: -645-line*2,
                                                y: 14-c*2,
                                                z: 165+3*line-73*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: -645-line*2,
                                                y: yHeight,
                                                z: 165+3*line-73*index-2
                                            });
                                            _0xa5dex10.push({
                                                x: -645-line*2-30,
                                                y: yHeight,
                                                z: 165+3*line-73*index-2
                                            });
                                        }
                                    }
                                    msj3DObj['addTunnel'](_0xa5dexf, _0xa5dex10);
                                }
                            }
                        },2000);
                       /*
                       for(var i=0;i<_0xa5dex4.ups1.length;i++){
                           _0xa5dex4.ups1[i].visible=true;
                       }
                       window.setTimeout(function(){
                           for(var i=0;i<_0xa5dex4.ups2.length;i++){
                               _0xa5dex4.ups2[i].visible=true;
                           }
                       },3000);
                        */
                    }
                    else
                   {
                       /*
                       for(var i=0;i<_0xa5dex4.ups1.length;i++){
                           _0xa5dex4.ups1[i].visible=false;
                       }
                       for(var i=0;i<_0xa5dex4.ups2.length;i++){
                           _0xa5dex4.ups2[i].visible=false;
                       }
                       */
                       for(var c=0;c<4;c++){
                           for(var line=0;line<13;line++ ){
                               var e9linename = 'e9_line_' + c + '_' + line;
                               msj3DObj['delSenceObject'](e9linename, true);
                           }
                       }
                       for(var c=0;c<4;c++){
                           for(var line=0;line<13;line++ ){
                               var e8linename = 'e8_line_' + c + '_' + line;
                               msj3DObj['delSenceObject'](e8linename, true);
                           }
                       }

                    }

                    msjstation['mpower'] = !msjstation['mpower']
                }
            },
            {
                btnid: 'btn_person',
                btnTitle: '\u544A\u8B66\u5DE1\u822A',
                btnimg: './res/menus/person.png',
                event: function () {
                    var _0xa5dex2b = 'dynamicPath001';
                    if (!msjstation['mperson']) {
                        var _0xa5dex2c = {
                            name: _0xa5dex2b,
                            type: 'beeline',
                            visible: true,
                            radiu: 1.0,
                            imgurl: 'res/roughness_map.jpg',
                            scene: true
                        };
                        var _0xa5dex10 = [{
                            x: -550,
                            y: 120,
                            z: -480
                        },
                            {
                                x: -550,
                                y: 120,
                                z: 310
                            },
                            {
                                x: 220,
                                y: 120,
                                z: 310
                            },
                            {
                                x: 220,
                                y: 120,
                                z: -480
                            },{
                                x: -550,
                                y: 120,
                                z: -480
                            }];
                        msj3DObj['dynamicPath'](_0xa5dex2c, _0xa5dex10)
                    } else {
                        msj3DObj['stopDynamicPath'](_0xa5dex2b)
                    };
                    msjstation['mperson'] = !msjstation['mperson']
                }
            },
            {
                btnid: 'btn_connection',
                btnTitle: '\u8D70\u7EBF\u7BA1\u7406',
                btnimg: './res/menus/connection.png',
                event: function () {
                    var _0xa5dexd = 'line0001';
                    var _0xa5dexe = 'nettext';
                    if (!msjstation['mconnection']) {
                        var _0xa5dexf = {
                            name: _0xa5dexd,
                            type: 'beeline',
                            visible: true,
                            imgurl: 'res/UV_Grid_Sm.jpg',
                            radiu: 0.5,
                            scene: true
                        };
                        var _0xa5dex10 = [
                            /*{
                            x: -150,
                            y: 145,
                            z: -430
                        },*/
                            {
                                x: -150,
                                y: 100,
                                z: 180
                            },
                            {
                                x: -100,
                                y: 100,
                                z: 180
                            },
                            {
                                x: -100,
                                y: 240,
                                z: 180
                            },
                            {
                                x: -130,
                                y: 240,
                                z: 180
                            },
                            {
                                x: -130,
                                y: 240,
                                z: 250
                            },
                            {
                                x: 70,
                                y: 240,
                                z: 250
                            },
                            {
                                x: 70,
                                y: 240,
                                z: 20
                            },
                            {
                                x: 70,
                                y: 210,
                                z: 20
                            },
                            {
                                x: 100,
                                y: 210,
                                z: 20
                            },
                            {
                                x: 100,
                                y: 160,
                                z: 20
                            }];
                        msj3DObj['addTunnel'](_0xa5dexf, _0xa5dex10);
                        var _0xa5dex11 = {
                            name: _0xa5dexe,
                            position: {
                                x: 60,
                                y: 85,
                                z: 0
                            },
                            size: {
                                x: 256,
                                y: 128,
                                z: 60
                            },
                            color: {
                                r: 244,
                                g: 120,
                                b: 32,
                                a: 0.4
                            },
                            imgurl: 'res/textmark.jpg',
                            rows: [{
                                name: 'item1',
                                fontface: 'Arial',
                                fontsize: 20,
                                borderThickness: 32,
                                textColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 1.0
                                },
                                text: '\u5F53\u524D\u7F51\u7EDC\u6D41\u91CF',
                                size: {
                                    x: 20,
                                    y: 20
                                },
                                position: {
                                    x: 10,
                                    y: 30,
                                    z: 0
                                }
                            },
                                {
                                    name: 'item2',
                                    fontface: 'Arial',
                                    fontsize: 60,
                                    borderThickness: 14,
                                    textColor: {
                                        r: 255,
                                        g: 255,
                                        b: 255,
                                        a: 1.0
                                    },
                                    text: '170.8',
                                    size: {
                                        x: 20,
                                        y: 20
                                    },
                                    position: {
                                        x: 10,
                                        y: 80,
                                        z: 0
                                    }
                                },
                                {
                                    name: 'item3',
                                    fontface: 'Arial',
                                    fontsize: 24,
                                    borderThickness: 14,
                                    textColor: {
                                        r: 255,
                                        g: 255,
                                        b: 255,
                                        a: 1.0
                                    },
                                    text: 'Mb/s',
                                    size: {
                                        x: 20,
                                        y: 20
                                    },
                                    position: {
                                        x: 190,
                                        y: 90,
                                        z: 0
                                    }
                                }]
                        };
                        var _0xa5dex12 = {
                            name: _0xa5dexe,
                            position: {
                                x: 110,
                                y: 260,
                                z: 20
                            },
                            size: {
                                x: 256,
                                y: 128,
                                z: 80
                            },
                            color: {
                                r: 34,
                                g: 76,
                                b: 143,
                                a: 0.8
                            },
                            imgurl: '',
                            rows: [{
                                name: 'item1',
                                fontface: 'Arial',
                                fontsize: 20,
                                borderThickness: 32,
                                textColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 1.0
                                },
                                text: '\u5F53\u524D\u4E0A\u884C\u5E26\u5BBD',
                                size: {
                                    x: 20,
                                    y: 20
                                },
                                position: {
                                    x: 10,
                                    y: 30,
                                    z: 0
                                }
                            },
                                {
                                    name: 'item2',
                                    fontface: 'Arial',
                                    fontsize: 60,
                                    borderThickness: 14,
                                    textColor: {
                                        r: 255,
                                        g: 255,
                                        b: 255,
                                        a: 1.0
                                    },
                                    text: '345.8',
                                    size: {
                                        x: 20,
                                        y: 20
                                    },
                                    position: {
                                        x: 10,
                                        y: 80,
                                        z: 0
                                    }
                                },
                                {
                                    name: 'item3',
                                    fontface: 'Arial',
                                    fontsize: 24,
                                    borderThickness: 14,
                                    textColor: {
                                        r: 255,
                                        g: 255,
                                        b: 255,
                                        a: 1.0
                                    },
                                    text: 'Mb/s',
                                    size: {
                                        x: 20,
                                        y: 20
                                    },
                                    position: {
                                        x: 190,
                                        y: 90,
                                        z: 0
                                    }
                                }]
                        };
                        msj3DObj['commonFunc']['makeDynamicTextSprite']('equipment_card_23', _0xa5dex12);
                        msj3DObj['commonFunc']['makeDynamicTextSprite']('equipment_card_52', _0xa5dex11)
                    } else {
                        msj3DObj['delSenceObject'](_0xa5dexe, true);
                        msj3DObj['delSenceObject'](_0xa5dexd, false)
                    };
                    msjstation['mconnection'] = !msjstation['mconnection']
                }
            },
            {
                btnid: 'btn_temperature',
                btnTitle: '\u6E29\u5EA6\u76D1\u63A7',
                btnimg: './res/menus/temperature.png',
                event: function () {
                    var _0xa5dex13 = 'temperature2001';
                    if (!msjstation['mtemperature']) {
                        var _0xa5dexf = {
                            name: _0xa5dex13,
                            width: 2040,
                            height: 220,
                            pic: './res/temp1.jpg',
                            transparent: true,
                            opacity: 1,
                            blending: false,
                            color: {
                                r: 255,
                                g: 255,
                                b: 255,
                                a: 1.0
                            },
                            position: {
                                x: 0,
                                y: 120,
                                z: -500
                            },
                            rotation: {
                                x: Math.PI,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addPlane'](_0xa5dexf)
                    } else {
                        msj3DObj['delSenceObject'](_0xa5dex13, false)
                    };
                    msjstation['mtemperature'] = !msjstation['mtemperature']
                }
            },
            /*{
                btnid: 'btn_usage',
                btnTitle: '\u673A\u67DC\u5229\u7528\u7387',
                btnimg: './res/menus/usage.png',
                event: function () {
                    var _0xa5dex13 = 'space5401';
                    var _0xa5dex14, _0xa5dex15, _0xa5dex16;
                    var _0xa5dex17, _0xa5dex18, _0xa5dex19;
                    var _0xa5dex1a, _0xa5dex1b, _0xa5dex1c;
                    var _0xa5dex1d = 5;
                    var _0xa5dex1e = 200;
                    var _0xa5dex1f = [0xf8aba6, 0xfaa755, 0x78a355, 0x45b97c, 0x7fb80e, 0xd93a49];
                    var _0xa5dex20 = 1;
                    if (!msjstation['musage']) {
                        $['each'](_0xa5dex4['objects'], function (_0xa5dex21, _0xa5dex5) {
                            if (_0xa5dex5['show'] == null || typeof(_0xa5dex5['show']) == 'undefined' || _0xa5dex5['show']) {
                                switch (_0xa5dex5['objType']) {
                                    case 'emptyCabinet':
                                        ;
                                    case 'cloneObj':
                                        var _0xa5dex22 = (Math['random']() * (_0xa5dex1e - _0xa5dex1d + 1) + _0xa5dex1d);
                                        var _0xa5dex23 = Math['floor'](Math['random']() * 6);
                                        if ('emptyCabinet' == _0xa5dex5['objType']) {
                                            _0xa5dex14 = _0xa5dex5['size']['width'];
                                            _0xa5dex15 = _0xa5dex5['size']['height'];
                                            _0xa5dex16 = _0xa5dex5['size']['length'];
                                            _0xa5dex17 = _0xa5dex5['position']['x'];
                                            _0xa5dex18 = _0xa5dex5['position']['y'];
                                            _0xa5dex19 = _0xa5dex5['position']['z'];
                                            _0xa5dex1a = _0xa5dex17;
                                            _0xa5dex1b = _0xa5dex18;
                                            _0xa5dex1c = _0xa5dex19
                                        } else {
                                            _0xa5dex1a = _0xa5dex17 + _0xa5dex5['position']['x'];
                                            _0xa5dex1b = _0xa5dex18 + _0xa5dex5['position']['y'];
                                            _0xa5dex1c = _0xa5dex19 + _0xa5dex5['position']['z'];
                                            _0xa5dex20++
                                        };
                                        var _0xa5dex24 = {
                                            name: _0xa5dex13,
                                            transparent: true,
                                            opacity: 0.8,
                                            blending: false,
                                            wireframe: false,
                                            tween: 0,
                                            color: _0xa5dex1f[_0xa5dex23],
                                            size: {
                                                l: _0xa5dex16,
                                                w: _0xa5dex14,
                                                h: _0xa5dex15
                                            },
                                            position: {
                                                x: _0xa5dex1a,
                                                y: _0xa5dex1b,
                                                z: _0xa5dex1c
                                            },
                                            rotation: {
                                                x: 0.0,
                                                y: 0.0,
                                                z: 0.0
                                            }
                                        };
                                        if (39 != _0xa5dex20) {
                                            msj3DObj['addBox'](_0xa5dex24)
                                        };
                                        break
                                }
                            }
                        });
                        vobjinfo = {
                            name: _0xa5dex13,
                            transparent: false,
                            opacity: 0.8,
                            blending: false,
                            wireframe: false,
                            tween: 0,
                            color: 0xffffff,
                            size: {
                                l: 60,
                                w: 65,
                                h: 18
                            },
                            position: {
                                x: -150,
                                y: 100,
                                z: -430
                            },
                            rotation: {
                                x: 0.0,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addBox'](vobjinfo);
                        vobjinfo = {
                            name: _0xa5dex13,
                            transparent: false,
                            opacity: 0.8,
                            blending: false,
                            wireframe: false,
                            tween: 0,
                            color: 0xffffff,
                            size: {
                                l: 60,
                                w: 65,
                                h: 18
                            },
                            position: {
                                x: -150,
                                y: 120,
                                z: -430
                            },
                            rotation: {
                                x: 0.0,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addBox'](vobjinfo);
                        vobjinfo = {
                            name: _0xa5dex13,
                            transparent: false,
                            opacity: 0.8,
                            blending: false,
                            wireframe: false,
                            tween: 0,
                            color: 0xffffff,
                            size: {
                                l: 60,
                                w: 65,
                                h: 28
                            },
                            position: {
                                x: -150,
                                y: 145,
                                z: -430
                            },
                            rotation: {
                                x: 0.0,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addBox'](vobjinfo);
                        vobjinfo = {
                            name: _0xa5dex13,
                            transparent: false,
                            opacity: 0.8,
                            blending: false,
                            wireframe: false,
                            tween: 0,
                            color: 0xffffff,
                            size: {
                                l: 60,
                                w: 65,
                                h: 18
                            },
                            position: {
                                x: -150,
                                y: 170,
                                z: -430
                            },
                            rotation: {
                                x: 0.0,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addBox'](vobjinfo);
                        vobjinfo = {
                            name: _0xa5dex13,
                            transparent: false,
                            opacity: 0.8,
                            blending: false,
                            wireframe: false,
                            tween: 0,
                            color: 0xffffff,
                            size: {
                                l: 60,
                                w: 65,
                                h: 18
                            },
                            position: {
                                x: -150,
                                y: 80,
                                z: -430
                            },
                            rotation: {
                                x: 0.0,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addBox'](vobjinfo);
                        vobjinfo = {
                            name: _0xa5dex13,
                            transparent: false,
                            opacity: 0.8,
                            blending: false,
                            wireframe: false,
                            tween: 0,
                            color: 0xffffff,
                            size: {
                                l: 60,
                                w: 65,
                                h: 18
                            },
                            position: {
                                x: -150,
                                y: 60,
                                z: -430
                            },
                            rotation: {
                                x: 0.0,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addBox'](vobjinfo);
                        vobjinfo = {
                            name: _0xa5dex13,
                            transparent: false,
                            opacity: 0.8,
                            blending: false,
                            wireframe: false,
                            tween: 0,
                            color: 0xffffff,
                            size: {
                                l: 60,
                                w: 65,
                                h: 18
                            },
                            position: {
                                x: -150,
                                y: 40,
                                z: -430
                            },
                            rotation: {
                                x: 0.0,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addBox'](vobjinfo);
                        vobjinfo = {
                            name: _0xa5dex13,
                            transparent: true,
                            opacity: 0.8,
                            blending: false,
                            wireframe: false,
                            tween: 0,
                            color: _0xa5dex1f[0],
                            size: {
                                l: 60,
                                w: 65,
                                h: 22
                            },
                            position: {
                                x: -150,
                                y: 193,
                                z: -430
                            },
                            rotation: {
                                x: 0.0,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addBox'](vobjinfo);
                        vobjinfo = {
                            name: _0xa5dex13,
                            transparent: true,
                            opacity: 0.8,
                            blending: false,
                            wireframe: false,
                            tween: 0,
                            color: _0xa5dex1f[1],
                            size: {
                                l: 60,
                                w: 65,
                                h: 26
                            },
                            position: {
                                x: -150,
                                y: 16,
                                z: -430
                            },
                            rotation: {
                                x: 0.0,
                                y: 0.0,
                                z: 0.0
                            }
                        };
                        msj3DObj['addBox'](vobjinfo);
                        msj3DObj['showObject']('cabinet', false, true);
                        msj3DObj['showObject']('equipment', false, true)
                    } else {
                        msj3DObj['delSenceObject'](_0xa5dex13, true);
                        msj3DObj['showObject']('cabinet', true, true);
                        msj3DObj['showObject']('equipment', true, true)
                    };
                    msjstation['musage'] = !msjstation['musage']
                }
            },*/
            {
                btnid: 'btn_space',
                //btnTitle: '\u673a\u67dc\u5229\u7528\u7387',
                btnTitle: '\u673A\u67DC\u5229\u7528\u7387',
                //btnimg: './res/menus/space.png',
                btnimg: './res/menus/usage.png',
                event: function () {
                    var _0xa5dex13 = 'space4401';
                    var _0xa5dex14, _0xa5dex15, _0xa5dex16;
                    var _0xa5dex17, _0xa5dex18, _0xa5dex19;
                    var _0xa5dex1a, _0xa5dex1b, _0xa5dex1c;
                    var _0xa5dex1d = 5;
                    var _0xa5dex1e = 200;
                    var _0xa5dex1f = [0xf8aba6, 0xfaa755, 0x78a355, 0x45b97c, 0x7fb80e, 0xd93a49];
                    if (!msjstation['mspace']) {
                        $['each'](_0xa5dex4['objects'], function (_0xa5dex21, _0xa5dex5) {
                            if (_0xa5dex5['show'] == null || typeof(_0xa5dex5['show']) == 'undefined' || _0xa5dex5['show']) {
                                switch (_0xa5dex5['objType']) {
                                    case 'emptyCabinet':
                                        ;
                                    case 'cloneObj':
                                        if ('emptyCabinet' == _0xa5dex5['objType']) {
                                            _0xa5dex14 = _0xa5dex5['size']['width'];
                                            _0xa5dex15 = _0xa5dex5['size']['height'];
                                            _0xa5dex16 = _0xa5dex5['size']['length'];
                                            _0xa5dex17 = _0xa5dex5['position']['x'];
                                            _0xa5dex18 = _0xa5dex5['position']['y'];
                                            _0xa5dex19 = _0xa5dex5['position']['z'];
                                            _0xa5dex1a = _0xa5dex17;
                                            _0xa5dex1b = _0xa5dex18;
                                            _0xa5dex1c = _0xa5dex19
                                        } else {
                                            _0xa5dex1a = _0xa5dex17 + _0xa5dex5['position']['x'];
                                            _0xa5dex1b = _0xa5dex18 + _0xa5dex5['position']['y'];
                                            _0xa5dex1c = _0xa5dex19 + _0xa5dex5['position']['z']
                                        };
                                        var _0xa5dex24 = {
                                            name: _0xa5dex13,
                                            transparent: false,
                                            opacity: 0.8,
                                            blending: false,
                                            wireframe: true,
                                            tween: 0,
                                            color: 0xffffff,
                                            size: {
                                                l: _0xa5dex16,
                                                w: _0xa5dex14,
                                                h: _0xa5dex15
                                            },
                                            position: {
                                                x: _0xa5dex1a,
                                                y: _0xa5dex1b,
                                                z: _0xa5dex1c
                                            },
                                            rotation: {
                                                x: 0.0,
                                                y: 0.0,
                                                z: 0.0
                                            }
                                        };
                                        msj3DObj['addBox'](_0xa5dex24);
                                        var _0xa5dex22 = (Math['random']() * (_0xa5dex1e - _0xa5dex1d + 1) + _0xa5dex1d);
                                        var _0xa5dex23 = Math['floor'](Math['random']() * 6);
                                        var _0xa5dexf = {
                                            name: _0xa5dex13,
                                            transparent: false,
                                            opacity: 0.8,
                                            blending: false,
                                            wireframe: false,
                                            tween: 2500,
                                            color: _0xa5dex1f[_0xa5dex23],
                                            size: {
                                                l: _0xa5dex16 - 0.5,
                                                w: _0xa5dex14 - 0.5,
                                                h: _0xa5dex22
                                            },
                                            position: {
                                                x: _0xa5dex1a,
                                                y: 1,
                                                z: _0xa5dex1c
                                            },
                                            rotation: {
                                                x: 0.0,
                                                y: 0.0,
                                                z: 0.0
                                            }
                                        };
                                        msj3DObj['addBox'](_0xa5dexf);
                                        break
                                }
                            }
                        });
                        msj3DObj['showObject']('cabinet', false, true);
                        msj3DObj['showObject']('equipment', false, true)
                    } else {
                        msj3DObj['delSenceObject'](_0xa5dex13, true);
                        msj3DObj['showObject']('cabinet', true, true);
                        msj3DObj['showObject']('equipment', true, true);
                        msj3DObj['showObject']('_box_box', false, true);

                    };
                    msjstation['mspace'] = !msjstation['mspace']
                }
            },
            {
                btnid: 'btn_air',
                btnTitle: '\u7A7A\u8C03\u98CE\u5411',
                btnimg: './res/menus/air.png',
                event: function () {
                    var _0xa5dexd = 'nurbs1001';
                    if (!msjstation['mair']) {
                        var _0xa5dexf = {
                            name: _0xa5dexd,
                            type: 'nurbs',
                            position: {
                                x: -820,
                                y: 100,
                                z: -280
                            },
                            size: {
                                x: 300,
                                y: 80
                            },
                            color: {
                                r: 255,
                                g: 255,
                                b: 255,
                                a: 1.0
                            },
                            imgurl: './res/arrow.png'
                        };
                        msj3DObj['addNurbs'](_0xa5dexf, null)
                    } else {
                        msj3DObj['delSenceObject'](_0xa5dexd, false);

                    };
                    msjstation['mair'] = !msjstation['mair']
                }
            },
            {
                btnid: 'btn_smoke',
                btnTitle: '\u70DF\u96FE\u76D1\u6D4B',
                btnimg: './res/menus/smoke.png',
                event: function () {
                    var _0xa5dexd = 'nurbs1001';
                    var _0xa5dex25 = 'nurbs1002';
                    var _0xa5dexe2 = 'smokingtext';
                    if (!msjstation['msmoke']) {
                        var _0xa5dexf = {
                            name: _0xa5dexd,
                            type: 'nurbs',
                            position: {
                                x: -150,
                                y: 210,
                                z: -280,
                                w: 3
                            },
                            size: {
                                x: 150,
                                y: 300,
                                z: 150
                            },
                            number: 350,
                            color: 0xd71345,
                            imgurl: './res/smoking.png'
                        };
                        msj3DObj['addSprite'](_0xa5dexf);
                        var _0xa5dex26 = {
                            name: _0xa5dex25,
                            type: 'nurbs',
                            position: {
                                x: 120,
                                y: 210,
                                z: 0,
                                w: 5
                            },
                            size: {
                                x: 150,
                                y: 300,
                                z: 150
                            },
                            number: 350,
                            color: 0xf47920,
                            imgurl: './res/smoking.png'
                        };
                        msj3DObj['addSprite'](_0xa5dex26)

                        var _0xa5dex122 = {
                            name: _0xa5dexe2,
                            position: {
                                x: 0,
                                y: 60,
                                z: -430
                            },
                            size: {
                                x: 256,
                                y: 128,
                                z: 80
                            },
                            color: {
                                r: 34,
                                g: 76,
                                b: 143,
                                a: 0.8
                            },
                            imgurl: '',
                            fontsize:18,
                            message:'烟雾报警'
                        };
                        msj3DObj['commonFunc']['makeTextSprite']('equipment_card_52', _0xa5dex122);
                    } else {
                        msj3DObj['delSenceObject'](_0xa5dexd, true);
                        msj3DObj['delSenceObject'](_0xa5dex25, true)
                        msj3DObj['delSenceObject'](_0xa5dexe2, true)
                    };
                    msjstation['msmoke'] = !msjstation['msmoke']
                }
            },
            {
                btnid: 'btn_water',
                btnTitle: '\u6F0F\u6C34\u76D1\u6D4B',
                btnimg: './res/menus/water.png',
                event: function () {
                    var _0xa5dexd = 'loushuitunnel01';
                    var _0xa5dex25 = 'loushuitunnel02';

                    if (!msjstation['mwater']) {
                        msj3DObj['showObject']('equipment', false, true);
                        msj3DObj['showObjectOpacity']('cabinet', 0.05, true);

                        var _0xa5dexf = {
                            name: _0xa5dexd,
                            type: 'beeline',
                            visible: true,
                            radiu: 5.0,
                            imgurl: 'res/metal.png',
                            scene: true
                        };
                        var _0xa5dex10 = [
                            {
                            x: -650,
                            y: 10,
                            z: -550
                        },
                            {
                                x: -650,
                                y: 10,
                                z: 330
                            },
                            {
                                x: 130,
                                y: 10,
                                z: 330
                            },
                            {
                                x: 130,
                                y: 10,
                                z: 600
                            },
                            {
                                x: 540,
                                y: 10,
                                z: 600
                            },
                            {
                                x: 540,
                                y: 10,
                                z: -550
                            },
                            {
                                x: -650,
                                y: 10,
                                z: -550
                            }];
                        msj3DObj['addTunnel'](_0xa5dexf, _0xa5dex10);
                        _0xa5dexf = {
                            name: _0xa5dex25,
                            type: 'beeline',
                            visible: true,
                            radiu: 5.0,
                            imgurl: 'res/UV_Grid_Sm.jpg',
                            scene: true
                        };

                        _0xa5dex10 = [{
                            x: -400,
                            y: 10,
                            z: -400
                        },
                            {
                                x: -400,
                                y: 10,
                                z: 210
                            },
                            {
                                x: 80,
                                y: 10,
                                z: 210
                            },
                            {
                                x: 80,
                                y: 10,
                                z: -350
                            },
                            {
                                x: 250,
                                y: 10,
                                z: -350
                            },
                            {
                                x: 250,
                                y: 10,
                                z: 130
                            },
                            {
                                x: 160,
                                y: 10,
                                z: 130
                            }];
                        msj3DObj['addTunnel'](_0xa5dexf, _0xa5dex10);
                    } else {
                        msj3DObj['showObject']('equipment', true, true);
                        msj3DObj['showObjectOpacity']('cabinet', 1.0, true);
                        msj3DObj['delSenceObject'](_0xa5dexd, false);
                        msj3DObj['delSenceObject'](_0xa5dex25, false)
                    };
                    msjstation['mwater'] = !msjstation['mwater']
                }
            },
            {
                btnid: 'btn_security',
                btnTitle: '\u9632\u76D7\u76D1\u6D4B',
                btnimg: './res/menus/security.png',
                event: function () {
                    var _0xa5dex17 = 5;
                    var _0xa5dex18 = 30;
                    var _0xa5dex19 = 5;
                    for (var _0xa5dex27 = 0; _0xa5dex27 < 5; _0xa5dex27++) {
                        var _0xa5dexd = 'securityline01' + _0xa5dex27;
                        var _0xa5dex25 = 'securityline21' + _0xa5dex27;
                        if (!msjstation['msecurity']) {
                            var _0xa5dex28 = {
                                name: _0xa5dexd,
                                type: '',
                                position: {
                                    x: 0,
                                    y: 0,
                                    z: 0
                                },
                                size: {
                                    x: 20,
                                    y: 20
                                },
                                colortype: 'gradient3',
                                color: 0xff00ff,
                                imgurl: '../res/arrow.png'
                            };
                            var _0xa5dex10 = [{
                                x: -1020,
                                y: 30 + (_0xa5dex27 * _0xa5dex18),
                                z: -500
                            },
                                {
                                    x: 1020,
                                    y: 30 + (_0xa5dex27 * _0xa5dex18),
                                    z: -500
                                }];
                            msj3DObj['addLine'](_0xa5dex28, _0xa5dex10);
                            var _0xa5dex29 = {
                                name: _0xa5dex25,
                                type: '',
                                position: {
                                    x: 0,
                                    y: 0,
                                    z: 0
                                },
                                size: {
                                    x: 20,
                                    y: 20
                                },
                                colortype: 'gradient3',
                                color: 0xff00ff,
                                imgurl: '../res/arrow.png'
                            };
                            var _0xa5dex2a = [{
                                x: -900,
                                y: 30 + (_0xa5dex27 * _0xa5dex18),
                                z: 630
                            },
                                {
                                    x: -900,
                                    y: 30 + (_0xa5dex27 * _0xa5dex18),
                                    z: -630
                                }];
                            msj3DObj['addLine'](_0xa5dex29, _0xa5dex2a)
                        } else {
                            msj3DObj['delSenceObject'](_0xa5dexd, false);
                            msj3DObj['delSenceObject'](_0xa5dex25, false)
                        }
                    };
                    msjstation['msecurity'] = !msjstation['msecurity']
                }
            },
            {
                btnid: 'btn_alarm',
                btnTitle: '\u62A5\u8B66\u7BA1\u7406',
                btnimg: './res/menus/alarm.png',
                event: function () {
                    var _0xa5dex2d = 'equipment_card_52_alarm';
                    var alarm_2='server-alarm';
                    var _0xa5dex2e = {
                        name: _0xa5dex2d,
                        size: {
                            x: 32,
                            y: 32
                        },
                        position: {
                            x: 0,
                            y: 70,
                            z: 0
                        },
                        imgurl: './res/alarm_image_1.png'
                    };

                    var _0xa5dex122 = {
                        name: alarm_2,
                        position: {
                            x: 0,
                            y: 110,
                            z: 0
                        },
                        size: {
                            x: 256,
                            y: 128,
                            z: 80
                        },
                        color: {
                            r: 34,
                            g: 76,
                            b: 143,
                            a: 0.8
                        },
                        imgurl: '',
                        fontsize:18,
                        message:'CPU温度过热'
                    };
                    if (msjstation['malarm']) {
                        msj3DObj['commonFunc']['setSkinColor']('equipment_card_52', 0x000000);
                        msj3DObj['delSenceObject'](_0xa5dex2d, false);
                        msj3DObj['delSenceObject'](alarm_2, false);
                    } else {
                        msj3DObj['commonFunc']['setSkinColor']('equipment_card_52', 0xff0000);
                        msj3DObj['commonFunc']['addIdentification']('equipment_card_52', _0xa5dex2e)
                        msj3DObj['commonFunc']['makeTextSprite']('equipment_card_52', _0xa5dex122);
                    };
                    msjstation['malarm'] = !msjstation['malarm']
                }
            }],
        rowLabels:[],
        columnsLabels:[],
        rowLabelsBack:[],
        cabinetCards:[],
        ups1:[],
        ups2:[]
    };
    msjstation['malarm'] = false;
    msjstation['mconnection'] = false;
    msjstation['mpower'] = false;
    msjstation['msecurity'] = false;
    msjstation['mair'] = false;
    msjstation['msmoke'] = false;
    msjstation['mspace'] = false;
    msjstation['musage'] = false;
    msjstation['mperson'] = false;
    msjstation['mwater'] = false;
    var _0xa5dex2f = 9,rowsInterval=280,cabinet_width=73;
    var seq=['F','E','D','C','B','A'];
    var cabinetcards=[
        {row:'F',cabinets:[{
            position:null,rotation:null,texts:[
                {text:'F-1',size:24,bold:true}
            ]
        },{
            position:null,rotation:null,texts:[
                {text:'F-2',size:24,bold:true}
            ]
        },{
            position:null,rotation:null,texts:[
                {text:'F-3',size:24,bold:true}
            ]
        },{
            position:null,rotation:null,texts:[
                {text:'F-4',size:24,bold:true}
            ]
        },{
            position:null,rotation:null,texts:[
                {text:'F-5',size:24,bold:true}
            ]
        },{
            position:null,rotation:null,texts:[
                {text:'F-6',size:24,bold:true}
            ]
        },{
            position:null,rotation:null,texts:[
                {text:'F-7',size:24,bold:true}
            ]
        },{
            position:null,rotation:null,texts:[
                {text:'F-8',size:24,bold:true}
            ]
        },
            {
                position:null,rotation:null,texts:[
                {text:'F-9',size:24,bold:true},
                {text:'市电配电柜',size:30,bold:true}
                ]
            }
            ]
        },
        {row:'E',cabinets:[{
            position:null,rotation:null,texts:[
                {text:'E-1',size:24,bold:true}
            ]
        },
            {
                position:null,rotation:null,
                texts:[
                {text:'E-2',size:24,bold:true},
                {text:'新能源数据采集',size:30,bold:true},
                    {text:'安全接入区',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
                {text:'E-3',size:24,bold:true},
                {text:'监控安全防护I',size:30,bold:true},
                {text:'内网监控平台',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
                {text:'E-4',size:26,bold:true},
                {text:'监控安全防护II',size:30,bold:true},
                {text:'入侵、加密',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
                {text:'E-5',size:24,bold:true}
            ]
            },{
                position:null,rotation:null,texts:[
                    {text:'E-6',size:24,bold:true}
                ]
            },{
                position:null,rotation:null,texts:[
                    {text:'E-7',size:24,bold:true}
                ]
            },
            {
                position:null,rotation:null,texts:[
                {text:'E-8',size:24,bold:true},
                {text:'1#UPS配电柜',size:30,bold:true}
            ]},
            {
                position:null,rotation:null,texts:[
            {text:'E-9',size:24,bold:true},
            {text:'2#UPS配电柜',size:30,bold:true}
            ]}
        ]
        },
        {row:'D',cabinets:[{
            position:null,rotation:null,texts:[
                {text:'D-1',size:24,bold:true}
            ]
        },
            {position:null,rotation:null,
            texts:[
                {text:'D-2',size:24,bold:true},
                {text:'配自服务器柜I',size:30,bold:true},
                {text:'管理信息大区',size:24,bold:true}
            ]},
            {position:null,rotation:null,
                texts:[
                    {text:'D-3',size:24,bold:true},
                    {text:'配自服务器柜II',size:30,bold:true},
                    {text:'管理信息大区',size:24,bold:true}
                ]},
            {position:null,rotation:null,
                texts:[
                    {text:'D-4',size:24,bold:true},
                    {text:'配自安全接入柜I',size:30,bold:true},
                    {text:'管理信息大区',size:24,bold:true}
                ]},
            {position:null,rotation:null,
                texts:[
                    {text:'D-5',size:24,bold:true},
                    {text:'配自安全接入柜II',size:28,bold:true},
                    {text:'管理信息大区',size:24,bold:true}
                ]},
            {position:null,rotation:null,
                texts:[
                    {text:'D-6',size:24,bold:true},
                    {text:'配自服务器柜III',size:30,bold:true},
                    {text:'管理信息大区',size:24,bold:true}
                ]},
            {
                position:null,rotation:null,texts:[
                {text:'D-7',size:24,bold:true}
            ]
            },{
                position:null,rotation:null,texts:[
                    {text:'D-8',size:24,bold:true}
                ]
            },{
                position:null,rotation:null,texts:[
                    {text:'D-9',size:24,bold:true}
                ]
            }
        ]
        },
        {row:'C',cabinets:[{
            position:null,rotation:null,texts:[
                {text:'C-1',size:24,bold:true}
            ]
        },
            {
                position:null,rotation:null,texts:[
                {text:'C-2',size:24,bold:true},
                {text:'配自网络机柜I',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
                {text:'C-3',size:24,bold:true},
                {text:'配自网络机柜II',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
                    {text:'C-4',size:24,bold:true},
                    {text:'配自安全接入I',size:30,bold:true},
                    {text:'生成控制大区',size:24,bold:false}
                ]},
            {
                position:null,rotation:null,texts:[
                {text:'C-5',size:24,bold:true},
                {text:'配自安全接入II',size:28,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
                {text:'C-6',size:24,bold:true},
                {text:'配自工作站柜',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
                {text:'C-7',size:24,bold:true},
                {text:'配自安全防护',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
                {text:'C-8',size:24,bold:true},
                {text:'配自服务器柜I',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
            {text:'C-9',size:24,bold:true},
            {text:'配自服务器柜II',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
        ],qrcode:{imageUrl:'./res/C9_cabinet_qrcode.png'}
            }
        ]
        },
        {row:'B',cabinets:[
            {
                position:null,rotation:null,texts:[
                {text:'B-1',size:24,bold:true}
            ]
            },{
                position:null,rotation:null,texts:[
                    {text:'B-2',size:24,bold:true}
                ]
            },{
                position:null,rotation:null,texts:[
                    {text:'B-3',size:24,bold:true}
                ]
            },{
                position:null,rotation:null,texts:[
                    {text:'B-4',size:24,bold:true}
                ]
            },{
                position:null,rotation:null,texts:[
                    {text:'B-5',size:24,bold:true}
                ]
            },{
                position:null,rotation:null,texts:[
                    {text:'B-6',size:24,bold:true}
                ]
            },{
                position:null,rotation:null,texts:[
                    {text:'A-7',size:24,bold:true}
                ]
            },{
                position:null,rotation:null,texts:[
                    {text:'B-8',size:24,bold:true}
                ]
            },{
                position:null,rotation:null,texts:[
                    {text:'B-9',size:24,bold:true}
                ]
            },
        ]},
        {row:'A',cabinets:[
            {position:null,rotation:null,texts:[
                {text:'A-1',size:24,bold:true},
                {text:'网络列头柜1',size:30,bold:true}
            ]},
            {position:null,rotation:null,texts:[
                {text:'A-2',size:24,bold:true},
                {text:'D5000网络柜I',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {
                position:null,rotation:null,texts:[
                {text:'A-3',size:24,bold:true}
            ]
            },
            {position:null,rotation:null,texts:[
                {text:'A-4',size:24,bold:true},
                {text:'D5000网络柜III',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {position:null,rotation:null,texts:[
                {text:'A-5',size:24,bold:true},
                {text:'D5000网络柜IV',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {position:null,rotation:null,texts:[
                {text:'A-6',size:24,bold:true},
                {text:'D5000服务器柜I',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {position:null,rotation:null,texts:[
                {text:'A-7',size:24,bold:true},
                {text:'D5000服务器柜II',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {position:null,rotation:null,texts:[
                {text:'A-8',size:24,bold:true},
                {text:'D5000服务器柜III',size:28,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]},
            {position:null,rotation:null,texts:[
                {text:'A-9',size:24,bold:true},
                {text:'D5000服务器柜IV',size:30,bold:true},
                {text:'生成控制大区',size:24,bold:false}
            ]}
        ]
        }
    ]

    for (var _0xa5dex27 = 1; _0xa5dex27 <= 6; _0xa5dex27++) {
        _0xa5dex4.rowLabels.push({text:seq[_0xa5dex27-1],position:{x:680-rowsInterval*(_0xa5dex27-1),y:170,z:-436}});
        _0xa5dex4.rowLabelsBack.push({text:seq[_0xa5dex27-1],position:{x:680-rowsInterval*(_0xa5dex27-1),y:170,z:220}});
        for (var _0xa5dex30 = 1; _0xa5dex30 <= _0xa5dex2f; _0xa5dex30++) {
            var card
            if (_0xa5dex27 != 1 || _0xa5dex30 != 1) {
                if(cabinetcards[_0xa5dex27-1].cabinets.length>0){
                    if(cabinetcards[_0xa5dex27-1].cabinets[_0xa5dex30-1]!=null){
                        cabinetcards[_0xa5dex27-1].cabinets[_0xa5dex30-1].position={x:-2,y:80,z:0};
                        cabinetcards[_0xa5dex27-1].cabinets[_0xa5dex30-1].rotation=[{direction:'y',degree:Math.PI/2}];
                        card=cabinetcards[_0xa5dex27-1].cabinets[_0xa5dex30-1];
                    }
                }
                _0xa5dex4['objects']['push']({
                    show: true,
                    copyfrom: 'cabinet1_1',
                    name: 'cabinet' + _0xa5dex27 + '_' + _0xa5dex30,
                    childrenname: ['cabinet' + _0xa5dex27 + '_' + _0xa5dex30 + '_shell', 'cabinet' + _0xa5dex27 + '_' + _0xa5dex30 + '_door_01'],
                    uuid: '',
                    objType: 'cloneObj',
                    position: {
                        x: -(_0xa5dex27 - 1) * rowsInterval,
                        y: 0,
                        z: (_0xa5dex30 - 1) * cabinet_width
                    },
                    scale: {
                        x: 1,
                        y: 1,
                        z: 1
                    },
                    card:card
                })
            }
            _0xa5dex4.columnsLabels.push(
                {
                    text:seq[_0xa5dex27-1]+''+_0xa5dex30,
                    position:{x:680-rowsInterval*(_0xa5dex27-1),y:206,z:-436+(_0xa5dex30 - 1) * cabinet_width+35},
                    rotation:[{direction:'x',degree:Math.PI/2}]
                }
                );

        }
    };
    msjstation['initmsj3D']('canvas-frame', _0xa5dex3, _0xa5dex4);
    msjstation['start']();
    for(var i=0;i<_0xa5dex4.rowLabels.length;i++){
        msjstation['scene']['add'](makeText(_0xa5dex4.rowLabels[i]));
    }
    for(var i=0;i<_0xa5dex4.rowLabelsBack.length;i++){
        msjstation['scene']['add'](makeText(_0xa5dex4.rowLabelsBack[i]));
    }
    for(var i=0;i< _0xa5dex4.columnsLabels.length;i++){
        msjstation['scene']['add'](makeText( _0xa5dex4.columnsLabels[i]));
    }

    //drawCabinetCards(msjstation['scene'],_0xa5dex4.cabinetCards);

    drawAreas(msjstation);
    createCabinetBox(_0xa5dex4);
}

function opcabinetdoor(_0xa5dex5) {
    var _0xa5dex7 = 'close';
    var _0xa5dex8 = null;

    if (_0xa5dex5['doorState'] != null && typeof(_0xa5dex5['doorState']) != 'undefined') {
        _0xa5dex7 = _0xa5dex5['doorState'];
        _0xa5dex8 = _0xa5dex5['parent']
    } else {
        var _0xa5dex9 = _0xa5dex5['parent'];
        _0xa5dex8 = new THREE.Object3D();
        _0xa5dex8['position']['set'](_0xa5dex5['position']['x'], _0xa5dex5['position']['y'], _0xa5dex5['position']['z'] - _0xa5dex5['geometry']['parameters']['depth'] / 2);
        _0xa5dex5['position']['set'](0, 0, _0xa5dex5['geometry']['parameters']['depth'] / 2);
        //_0xa5dex8['position']['set'](0, 0, 0);
        //_0xa5dex5['position']['set'](0, 0, 60);
        _0xa5dex8['add'](_0xa5dex5);
        _0xa5dex9['add'](_0xa5dex8)

    };

    _0xa5dex5['doorState'] = (_0xa5dex7 == 'close' ? 'open' : 'close');
    new TWEEN.Tween(_0xa5dex8['rotation'])['to']({
        y: (_0xa5dex7 == 'close' ? -0.25 * 3 * Math['PI'] : 0 * 2 * Math['PI'])
    }, 1000)['start']()
}
function createCabinetBox(_0xa5dex4) {
    var _0xa5dex14, _0xa5dex15, _0xa5dex16;
    var _0xa5dex17, _0xa5dex18, _0xa5dex19;
    var _0xa5dex1a, _0xa5dex1b, _0xa5dex1c;
    var _0xa5dex1d = 5;
    var _0xa5dex1e = 200;
    var _0xa5dex1f = [0xf8aba6, 0xfaa755, 0x78a355, 0x45b97c, 0x7fb80e, 0xd93a49];
    $['each'](_0xa5dex4['objects'], function (_0xa5dex21, _0xa5dex5) {
        var _0xa5dex13=_0xa5dex5['name']+'_box_box';
        if (_0xa5dex5['show'] == null || typeof(_0xa5dex5['show']) == 'undefined' || _0xa5dex5['show']) {
            switch (_0xa5dex5['objType']) {
                case 'emptyCabinet':
                    ;
                case 'cloneObj':
                    if ('emptyCabinet' == _0xa5dex5['objType']) {
                        _0xa5dex14 = _0xa5dex5['size']['width'];
                        _0xa5dex15 = _0xa5dex5['size']['height'];
                        _0xa5dex16 = _0xa5dex5['size']['length'];
                        _0xa5dex17 = _0xa5dex5['position']['x'];
                        _0xa5dex18 = _0xa5dex5['position']['y'];
                        _0xa5dex19 = _0xa5dex5['position']['z'];
                        _0xa5dex1a = _0xa5dex17;
                        _0xa5dex1b = _0xa5dex18;
                        _0xa5dex1c = _0xa5dex19
                    }
                    else {
                        _0xa5dex1a = _0xa5dex17 + _0xa5dex5['position']['x'];
                        _0xa5dex1b = _0xa5dex18 + _0xa5dex5['position']['y'];
                        _0xa5dex1c = _0xa5dex19 + _0xa5dex5['position']['z']
                    };
                    var _0xa5dex24 = {
                        name: _0xa5dex13,
                        transparent: true,
                        opacity: 0.3,
                        blending: false,
                        wireframe: false,
                        tween: 0,
                        color: 0xffffff,
                        show:false,
                        size: {
                            l: _0xa5dex16,
                            w: _0xa5dex14,
                            h: _0xa5dex15
                        },
                        position: {
                            x: _0xa5dex1a,
                            y: _0xa5dex1b,
                            z: _0xa5dex1c
                        },
                        rotation: {
                            x: 0.0,
                            y: 0.0,
                            z: 0.0
                        }
                    };
                    msj3DObj['addBox2'](_0xa5dex24,false);

                    break
            }
        }
    });
}
function cabinetdbclick(obj,msj3DObj,_0xa5dex4) {
    var name=obj['name'].replace('_shell','').replace('_box_box','');
    console.log("obj['name']",obj['name']);
    console.log("name",name);
    msj3DObj['showObject']('cabinet', false, true);
    msj3DObj['showObject']('equipment', false, true)
    msj3DObj['showObject']('_box_box', true, true);

    for(var i=0;i<msj3DObj['objects'].length;i++){
        if(msj3DObj['objects'][i]['name']==name){
            msj3DObj['showObject'](name, true, true);
            msj3DObj['showObject'](name+'_box_box', false, true);
        }
    }
}
function doorRight_ZRight_ToPlus(_0xa5dex5, _0xa5dex33) {
    var _0xa5dex7 = 'close';
    var _0xa5dex8 = null;
    if (_0xa5dex5['doorState'] != null && typeof(_0xa5dex5['doorState']) != 'undefined') {
        _0xa5dex7 = _0xa5dex5['doorState'];
        _0xa5dex8 = _0xa5dex5['parent']
    } else {
        console['log']('add parent');
        var _0xa5dex9 = _0xa5dex5['parent'];
        _0xa5dex8 = new THREE.Object3D();
        _0xa5dex8['position']['set'](_0xa5dex5['position']['x'], _0xa5dex5['position']['y'], _0xa5dex5['position']['z']+_0xa5dex5['geometry']['parameters']['depth']*12);
        _0xa5dex5['position']['set'](0, 0, -_0xa5dex5['geometry']['parameters']['depth']*12);
        _0xa5dex8['add'](_0xa5dex5);
        _0xa5dex9['add'](_0xa5dex8)
    };
    _0xa5dex5['doorState'] = (_0xa5dex7 == 'close' ? 'open' : 'close');
    new TWEEN.Tween(_0xa5dex8['rotation'])['to']({
        y: (_0xa5dex7 == 'close' ? 0.25 * 2 * Math['PI'] : 0 * 2 * Math['PI'])
    }, 2000)['start']()
}
function doorRight_ZRight_ToMinus(_0xa5dex5, _0xa5dex33) {
    var _0xa5dex7 = 'close';
    var _0xa5dex8 = null;
    if (_0xa5dex5['doorState'] != null && typeof(_0xa5dex5['doorState']) != 'undefined') {
        _0xa5dex7 = _0xa5dex5['doorState'];
        _0xa5dex8 = _0xa5dex5['parent']
    } else {
        console['log']('add parent');
        var _0xa5dex9 = _0xa5dex5['parent'];
        _0xa5dex8 = new THREE.Object3D();
        _0xa5dex8['position']['set'](_0xa5dex5['position']['x'], _0xa5dex5['position']['y'], _0xa5dex5['position']['z']-_0xa5dex5['geometry']['parameters']['depth']*12);
        _0xa5dex5['position']['set'](0, 0, _0xa5dex5['geometry']['parameters']['depth']*12);
        _0xa5dex8['add'](_0xa5dex5);
        _0xa5dex9['add'](_0xa5dex8)
    };
    _0xa5dex5['doorState'] = (_0xa5dex7 == 'close' ? 'open' : 'close');
    new TWEEN.Tween(_0xa5dex8['rotation'])['to']({
        y: (_0xa5dex7 == 'close' ? 0.25 * 2 * Math['PI'] : 0 * 2 * Math['PI'])
    }, 2000)['start']()
}
function doorRight_ZLeft_ToMinus(_0xa5dex5, _0xa5dex33) {
    var _0xa5dex7 = 'close';
    var _0xa5dex8 = null;
    if (_0xa5dex5['doorState'] != null && typeof(_0xa5dex5['doorState']) != 'undefined') {
        _0xa5dex7 = _0xa5dex5['doorState'];
        _0xa5dex8 = _0xa5dex5['parent']
    } else {
        console['log']('add parent');
        var _0xa5dex9 = _0xa5dex5['parent'];
        _0xa5dex8 = new THREE.Object3D();
        _0xa5dex8['position']['set'](_0xa5dex5['position']['x'], _0xa5dex5['position']['y'], _0xa5dex5['position']['z']+_0xa5dex5['geometry']['parameters']['depth']*12);
        _0xa5dex5['position']['set'](0, 0, -_0xa5dex5['geometry']['parameters']['depth']*12);
        _0xa5dex8['add'](_0xa5dex5);
        _0xa5dex9['add'](_0xa5dex8)
    };
    _0xa5dex5['doorState'] = (_0xa5dex7 == 'close' ? 'open' : 'close');
    new TWEEN.Tween(_0xa5dex8['rotation'])['to']({
        y: (_0xa5dex7 == 'close' ? -0.25 * 2 * Math['PI'] : 0 * 2 * Math['PI'])
    }, 2000)['start']()
}
function openRightDoor(_0xa5dex5, _0xa5dex33) {
    var _0xa5dex7 = 'close';
    var _0xa5dex8 = null;
    if (_0xa5dex5['doorState'] != null && typeof(_0xa5dex5['doorState']) != 'undefined') {
        _0xa5dex7 = _0xa5dex5['doorState'];
        _0xa5dex8 = _0xa5dex5['parent']
    } else {
        console['log']('add parent');
        var _0xa5dex9 = _0xa5dex5['parent'];
        _0xa5dex8 = new THREE.Object3D();
        _0xa5dex8['position']['set'](_0xa5dex5['position']['x'] - _0xa5dex5['geometry']['parameters']['width'] / 2, _0xa5dex5['position']['y'], _0xa5dex5['position']['z']);
        _0xa5dex5['position']['set'](_0xa5dex5['geometry']['parameters']['width'] / 2, 0, 0);
        _0xa5dex8['add'](_0xa5dex5);
        _0xa5dex9['add'](_0xa5dex8)
    };
    _0xa5dex5['doorState'] = (_0xa5dex7 == 'close' ? 'open' : 'close');
    new TWEEN.Tween(_0xa5dex8['rotation'])['to']({
        y: (_0xa5dex7 == 'close' ? 0.25 * 2 * Math['PI'] : 0 * 2 * Math['PI'])
    }, 2000)['start']()
}
function showDiv(_0xa5dex35, _0xa5dex36, _0xa5dex37, _0xa5dex38, _0xa5dexc) {
    var _0xa5dex39 = document['getElementById'](_0xa5dex35);

    _0xa5dex39['style']['display'] = 'block';
    var _0xa5dex17 = (document['documentElement']['clientWidth'] - _0xa5dex39['clientWidth']) / 2 + document['documentElement']['scrollLeft'] + 'px';
    var _0xa5dex18 = (document['documentElement']['clientHeight'] - _0xa5dex39['clientHeight']) / 2 + document['documentElement']['scrollTop'] - 50 + 'px';
    var _0xa5dex3a = $('#' + _0xa5dex35);

    if (_0xa5dexc != null && _0xa5dexc['length'] > 0) {
        _0xa5dex3a['empty']();
        var _0xa5dex3b = $('<div id="title" onclick="closeDiv(\'' + _0xa5dex35 + '\')">\u8bbe\u5907\u4fe1\u606f</div>');
        _0xa5dex3a['append'](_0xa5dex3b);
        _0xa5dex3b['append']('<div id="ten" onclick="closeDiv(\'' + _0xa5dex35 + '\')"></div>');
        _0xa5dex3b['append']('<div id="img" title="\u5173\u95ED" onclick="closeDiv(\'' + _0xa5dex35 + '\')" ></div>');
        var _0xa5dex3c = $('<div id="content">');
        _0xa5dex3a['append'](_0xa5dex3c);
        $['each'](_0xa5dexc, function (_0xa5dex21, _0xa5dex5) {
            _0xa5dex3c['append'](' <div style="float:center"><div class="divitem">' + _0xa5dex5['name'] + '</div><input type="text" id="' + _0xa5dex5['id'] + '" value="' + _0xa5dex5['value'] + '" /></div>')
        })
        var qrcode = $('    <div class="qrcode" style="margin-top:5px;">\n' +
            '        <img src="res/qrcode.png" style="width: 100px;"/>\n' +
            '    </div>');
        _0xa5dex3c['append'](qrcode);
    };
    _0xa5dex39['style']['left'] = _0xa5dex17;
    _0xa5dex39['style']['top'] = _0xa5dex18;
    if (true == _0xa5dex36) {
        var _0xa5dex3d = document['createElement']('div');
        _0xa5dex3d['setAttribute']('id', 'mybg');
        _0xa5dex3d['style']['background'] = '#000000';
        _0xa5dex3d['style']['width'] = '100%';
        _0xa5dex3d['style']['height'] = '100%';
        _0xa5dex3d['style']['position'] = 'fixed';
        _0xa5dex3d['style']['top'] = '0';
        _0xa5dex3d['style']['left'] = '0';
        _0xa5dex3d['style']['zIndex'] = '500';
        _0xa5dex3d['style']['opacity'] = '0.6';
        _0xa5dex3d['style']['filter'] = 'Alpha(opacity=70)';
        document['body']['appendChild'](_0xa5dex3d)
    };
    document['body']['style']['overflow'] = 'hidden';
    if (true == _0xa5dex37) {
        var _0xa5dex3e;
        var _0xa5dex3f;
        _0xa5dex39['onmousedown'] = function (_0xa5dex40) {
            if (!_0xa5dex40) {
                _0xa5dex40 = window['event']
            };
            _0xa5dex3e = _0xa5dex40['clientX'] - parseInt(_0xa5dex39['style']['left']);
            _0xa5dex3f = _0xa5dex40['clientY'] - parseInt(_0xa5dex39['style']['top']);
            document['onmousemove'] = _0xa5dex41
        };
        document['onmouseup'] = function () {
            document['onmousemove'] = null
        };

        function _0xa5dex41(_0xa5dex42) {
            if (_0xa5dex42 == null) {
                _0xa5dex42 = window['event']
            };
            _0xa5dex39['style']['left'] = (_0xa5dex42['clientX'] - _0xa5dex3e) + 'px';
            _0xa5dex39['style']['top'] = (_0xa5dex42['clientY'] - _0xa5dex3f) + 'px'
        }
    }
}
function closeDiv(_0xa5dex35) {
    var _0xa5dex39 = document['getElementById'](_0xa5dex35);
    _0xa5dex39['style']['display'] = 'none';
    var _0xa5dex44 = document['getElementById']('mybg');
    if (_0xa5dex44 != null) {
        var _0xa5dex45 = document['getElementsByTagName']('body');
        _0xa5dex45[0]['removeChild'](_0xa5dex44)
    }
}
function showVideoDiv(_0xa5dex35, _0xa5dex36, _0xa5dex37, _0xa5dex38, _0xa5dexc) {
    var _0xa5dex39 = document['getElementById'](_0xa5dex35);
    _0xa5dex39['style']['display'] = 'block';
    var _0xa5dex17 = (document['documentElement']['clientWidth'] - _0xa5dex39['clientWidth']) / 2 + document['documentElement']['scrollLeft'] + 'px';
    var _0xa5dex18 = (document['documentElement']['clientHeight'] - _0xa5dex39['clientHeight']) / 2 + document['documentElement']['scrollTop'] - 50 + 'px';
    var _0xa5dex3a = $('#' + _0xa5dex35); {
        _0xa5dex3a['empty']();
        var _0xa5dex3b = $('<div id="vtitle" onclick="closeVideoDiv(\'' + _0xa5dex35 + '\')">\u89C6\u9891\u76D1\u63A7</div>');
        _0xa5dex3a['append'](_0xa5dex3b);
        _0xa5dex3b['append']('<div id="ten" onclick="closeVideoDiv(\'' + _0xa5dex35 + '\')"></div>');
        _0xa5dex3b['append']('<div id="img" title="\u5173\u95ED" onclick="closeVideoDiv(\'' + _0xa5dex35 + '\')" ></div>');
        var _0xa5dex3c = $('<div id="vcontent">');
        _0xa5dex3a['append'](_0xa5dex3c);
        _0xa5dex3c['append'](' <iframe src="http://easynvr.easydarwin.org:10800/play.html?channel=10" width="100%" height="100%" scrolling="yes" />')
    }
    _0xa5dex39['style']['left'] = _0xa5dex17;
    _0xa5dex39['style']['top'] = _0xa5dex18;
    if (true == _0xa5dex36) {
        var _0xa5dex3d = document['createElement']('div');
        _0xa5dex3d['setAttribute']('id', 'mybg');
        _0xa5dex3d['style']['background'] = '#000000';
        _0xa5dex3d['style']['width'] = '100%';
        _0xa5dex3d['style']['height'] = '100%';
        _0xa5dex3d['style']['position'] = 'fixed';
        _0xa5dex3d['style']['top'] = '0';
        _0xa5dex3d['style']['left'] = '0';
        _0xa5dex3d['style']['zIndex'] = '500';
        _0xa5dex3d['style']['opacity'] = '0.6';
        _0xa5dex3d['style']['filter'] = 'Alpha(opacity=70)';
        document['body']['appendChild'](_0xa5dex3d)
    };
    document['body']['style']['overflow'] = 'hidden';
    if (true == _0xa5dex37) {
        var _0xa5dex3e;
        var _0xa5dex3f;
        _0xa5dex39['onmousedown'] = function (_0xa5dex40) {
            if (!_0xa5dex40) {
                _0xa5dex40 = window['event']
            };
            _0xa5dex3e = _0xa5dex40['clientX'] - parseInt(_0xa5dex39['style']['left']);
            _0xa5dex3f = _0xa5dex40['clientY'] - parseInt(_0xa5dex39['style']['top']);
            document['onmousemove'] = _0xa5dex41
        };
        document['onmouseup'] = function () {
            document['onmousemove'] = null
        };

        function _0xa5dex41(_0xa5dex42) {
            if (_0xa5dex42 == null) {
                _0xa5dex42 = window['event']
            };
            _0xa5dex39['style']['left'] = (_0xa5dex42['clientX'] - _0xa5dex3e) + 'px';
            _0xa5dex39['style']['top'] = (_0xa5dex42['clientY'] - _0xa5dex3f) + 'px'
        }
    }
}
function closeVideoDiv(_0xa5dex35) {
    var _0xa5dex39 = document['getElementById'](_0xa5dex35);
    _0xa5dex39['style']['display'] = 'none';
    var _0xa5dex44 = document['getElementById']('mybg');
    if (_0xa5dex44 != null) {
        var _0xa5dex45 = document['getElementsByTagName']('body');
        _0xa5dex45[0]['removeChild'](_0xa5dex44)
    }
}
function updateDivItem(_0xa5dex35, _0xa5dex49) {
    var _0xa5dex4a = $('#' + _0xa5dex35);
    if (_0xa5dex4a == null) {
        return
    };
    if (_0xa5dex49 != null && _0xa5dex49['length'] > 0) {
        $['each'](_0xa5dex49, function (_0xa5dex21, _0xa5dex5) {
            var _0xa5dex4b = $('#' + _0xa5dex5['id']);
            if (_0xa5dex4b != null) {
                _0xa5dex4b['attr']('value', _0xa5dex5['value'])
            }
        })
    }
}
var t1 = 0;
var max = 367;
var min = 184;

function updateDivItemVaule() {
    var _0xa5dex49 = [{
        id: 'upbw',
        value: Math['floor'](Math['random']() * (max - min + 1) + min)
    },
        {
            id: 'downbw',
            value: Math['floor'](Math['random']() * (max - min + 1) + min)
        }];
    updateDivItem('main2', _0xa5dex49)
}
function DynamicPath2(_0xa5dex51, _0xa5dex10, _0xa5dex52) {
    if (_0xa5dex10['length'] > _0xa5dex52) {
        var _0xa5dex53 = new THREE.Vector3();
        _0xa5dex53['x'] = _0xa5dex53['y'] = _0xa5dex53['z'] = 0.01;
        _0xa5dex51['matrix']['lookAt'](_0xa5dex51['position'], _0xa5dex10[_0xa5dex52], _0xa5dex53);
        var _0xa5dex54 = new TWEEN.Tween(_0xa5dex51['position'])['to']({
            x: _0xa5dex10[_0xa5dex52]['x'],
            y: _0xa5dex10[_0xa5dex52]['y'],
            z: _0xa5dex10[_0xa5dex52]['z']
        }, 5000)['onComplete'](function () {
            DynamicPath(_0xa5dex51, _0xa5dex10, _0xa5dex52 + 1)
        })['start']()
    }
}
function makeText( message, parameters )
{
    var drawingCanvas =document.createElement('canvas');
    drawingCanvas.width=64;
    drawingCanvas.height=64;
    var drawingContext = drawingCanvas.getContext( '2d' );
    // draw white background
    drawingContext.fillStyle = "rgba(43,76,143,1)";
    drawingContext.fillRect( 0, 0,drawingCanvas.width, drawingCanvas.height );
    drawingContext.fillStyle='rgba(255,255,255,1)';
    drawingContext.font='Bold 48px serif';
    drawingContext.textAlign='center';
    drawingContext.textBaseline='middle';
    drawingContext.fillText(message.text,32,32);

    var material = new THREE.MeshBasicMaterial()
    ;
    var texture = new THREE.Texture(drawingCanvas);
    texture.needsUpdate = true;
    material.map=texture;
    //material.opacity=.5;
    //material.transparent=true;

    mesh = new THREE.Mesh( new THREE.BoxGeometry( drawingCanvas.width, drawingCanvas.height, 1 ), material );
    mesh.position.y=message.position.y;
    mesh.position.x=message.position.x;
    mesh.position.z=message.position.z;
    mesh.scale.set(0.4,0.4,0.5);

    if(message.rotation!=null&&typeof(message['rotation']) != 'undefined'&&message.rotation.length>0){
        for(var r=0;r<message.rotation.length;r++){
            mesh.rotation[message.rotation[r].direction]=message.rotation[r].degree;
        }
    }
    return mesh;
}

function drawCabinetCards(scene, cards, parameters )
{
    var image= new Image();
    image.onload=function () {
        for(var i=0;i<cards.length;i++){
            var drawingCanvas =document.createElement('canvas');
            var drawingContext = drawingCanvas.getContext( '2d' );
            drawingCanvas.width=image.width;
            drawingCanvas.height=image.height;
            drawingContext.drawImage(this,0,0,image.width,image.width);


            drawingContext.textAlign='center';
            drawingContext.textBaseline='middle';
            drawingContext.fillStyle='rgba(33,136,104,1)';
            var offX=128;
            var offY=90;

            for(var text=0;text<cards[i].texts.length;text++){
                drawingContext.font=(cards[i].texts[text].bold?'Bold ':'')+cards[i].texts[text].size+'px serif';
                var textMeasure=drawingContext.measureText(cards[i].texts[text].text);
                //console.log(textMeasure);
                drawingContext.fillText(cards[i].texts[text].text,offX,offY+text*40);
            }

            var material = new THREE.MeshBasicMaterial();
            var texture = new THREE.Texture(drawingCanvas);
            texture.needsUpdate = true;
            material.map=texture;
            //material.opacity=.5;
            //material.transparent=true;

            mesh = new THREE.Mesh( new THREE.BoxGeometry( drawingCanvas.width, drawingCanvas.height, 1 ), material );
            mesh.position.y=cards[i].position.y;
            mesh.position.x=cards[i].position.x;
            mesh.position.z=cards[i].position.z;
            mesh.scale.set(0.1,0.1,0.5);

            if(cards[i].rotation!=null&&typeof(cards[i]['rotation']) != 'undefined'&&cards[i].rotation.length>0){
                for(var r=0;r<cards[i].rotation.length;r++){
                    mesh.rotation[cards[i].rotation[r].direction]=cards[i].rotation[r].degree;
                }
            }
            scene.add(mesh);
        }
    }
    image.src='./res/cabinet_card_2.png';
}

function drawAreaLabel(parentMesh,card,parameters)
{
    var card=card;
    var image= new Image();
    image.onload=function () {
        var drawingCanvas = document.createElement('canvas');
        var drawingContext = drawingCanvas.getContext('2d');
        drawingCanvas.width = card.parameters.width;
        drawingCanvas.height = card.parameters.height;
        drawingContext.drawImage(this, 0, 0, drawingCanvas.width, drawingCanvas.width);

        drawingContext.textAlign = 'center';
        drawingContext.textBaseline = 'middle';
        drawingContext.fillStyle = card.parameters.color;

        for (var text = 0; text < card.texts.length; text++) {
            drawingContext.font = (card.texts[text].bold ? 'Bold ' : '') + card.texts[text].size + 'px serif';
            var textMeasure = drawingContext.measureText(card.texts[text].text);
            //console.log(textMeasure);
            drawingContext.fillText(card.texts[text].text, card.parameters.offX,card.parameters.offY + text * 40);
        }

        var material = new THREE.MeshBasicMaterial();
        var texture = new THREE.Texture(drawingCanvas);
        texture.needsUpdate = true;
        material.map = texture;
        //material.opacity=.5;
        //material.transparent=true;

        mesh = new THREE.Mesh(new THREE.BoxGeometry(drawingCanvas.width, drawingCanvas.height, 1), material);
        mesh.position.y = card.position.y;
        mesh.position.x = card.position.x;
        mesh.position.z = card.position.z;
        //mesh.scale.set(0.1, 0.1, 0.5);

        if (card.rotation != null && typeof(card['rotation']) != 'undefined' && card.rotation.length > 0) {
            for (var r = 0; r < card.rotation.length; r++) {
                mesh.rotation[card.rotation[r].direction] = card.rotation[r].degree;
            }
        }
        console.log('mesh',mesh);

        parentMesh.add(mesh);

    }
    image.src='./res/label_bk.png';
}

function drawAreas(msjstation) {
    drawAreaLabel(msjstation['scene'],{
        position:{x:-450,y:12,z:310},rotation:[{direction:'x',degree:Math.PI/2}],texts:[
            {text:'生产控制大区',size:60,bold:true}
        ],parameters:{width:512,height:64,offX:256,offY:32,color:'#111111'}
    });
    drawAreaLabel(msjstation['scene'],{
        position:{x:250,y:12,z:310},rotation:[{direction:'x',degree:Math.PI/2}],texts:[
            {text:'控制大区一',size:60,bold:true}
        ],parameters:{width:512,height:64,offX:256,offY:32,color:'#111111'}
    });
    drawAreaLabel(msjstation['scene'],{
        position:{x:670,y:12,z:310},rotation:[{direction:'x',degree:Math.PI/2}],texts:[
            {text:'控制大区二',size:60,bold:true}
        ],parameters:{width:512,height:64,offX:256,offY:32,color:'#111111'}
    });
}

function getLabelSize(data) {
    var labelPadding = 10;
    var width = 0, height = 0;
    for (var i = 0; i < data.rows.length; i++) {
        var row = data.rows[i];
        var rowSize = getRowSize(row);
        if (rowSize.w > width)
            width = rowSize.w;
        height += rowSize.h * 1.5
    }
    return {w: width + 2 * labelPadding, h: height + labelPadding * data.rows.length}

}

function getRowSize(row) {

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    var rowWidth = 0, rowHeight = 0;
    for (var j = 0; j < row.length; j++) {
        var t = row[j];
        ctx.font = t.size + "px bold Arial";
        if (t.size > rowHeight)
            rowHeight = t.size;
        rowWidth += ctx.measureText(t.text).width;

    }

    return {w: rowWidth, h: rowHeight};
}

function getLabelCanvas(data) {
    var labelPadding = 10;
    var size = getLabelSize(data);
    var width = size.w,
        height = size.h;
    var arrowWidth = width / 10;
    var arrowHeight = height / 10;
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = data.bg;// 'rgba(0, 191, 255, 0.6)'; //    '#FFBC00';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height - arrowHeight);
    ctx.lineTo((width - arrowWidth ) / 2, height - arrowHeight);
    ctx.lineTo((width) / 2, height);
    ctx.lineTo((width + arrowWidth ) / 2, height - arrowHeight);
    ctx.lineTo(width, height - arrowHeight);
    ctx.lineTo(width, 0);
    ctx.closePath();
    ctx.fill();

    var lastW = 0,
        lastH = 0;
    for (var i = 0; i < data.rows.length; i++) {
        var row = data.rows[i];
        var rowSize = getRowSize(row);
        lastW = 10;
        lastH += rowSize.h + labelPadding;

        for (var j = 0; j < row.length; j++) {
            var t = row[j];
            ctx.font = t.size + "px bold Arial";
            ctx.fillStyle = t.color;//'#ffffff';
            ctx.fillText(t.text, lastW, lastH);
            lastW += ctx.measureText(t.text).width;
        }
    }

    return canvas;
}

function showAlert(mesh) {
    var data2 =  {
        rows: [

            [
                {text: "CPU温度过热", size: 30, color: '#ff0000'},
            ],
            [
                {text: "端口流量超过阈值", size: 30, color: '#ff0000'}
            ]
        ],
        bg: 'rgba(0, 191, 255, 0.8)'
    }
    var img = getLabelCanvas(data2);
    var spriteMap = new THREE.CanvasTexture(img);
    var spriteMaterial = new THREE.SpriteMaterial({map: spriteMap, color: 0xffffff});
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite['name']='equipment_card_52_alarm2';
    sprite.position.x=-160;
    sprite.position.z=185;
    sprite.position.y=310;
    sprite.scale.set(100,100,100);
    mesh.objects.push(sprite);
    mesh.scene.add(sprite)
}

function showSmokeAlert(mesh) {
    var data2 =  {
        rows: [

            [
                {text: "机房监测到烟雾", size: 30, color: '#ff0000'},
            ]
        ],
        bg: 'rgba(0, 191, 255, 0.8)'
    }
    var img = getLabelCanvas(data2);
    var spriteMap = new THREE.CanvasTexture(img);
    var spriteMaterial = new THREE.SpriteMaterial({map: spriteMap, color: 0xffffff});
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite['name']='smoking_alarm';
    sprite.position.x=-160;
    sprite.position.z=-185;
    sprite.position.y=310;
    sprite.scale.set(100,100,100);
    mesh.objects.push(sprite);
    mesh.scene.add(sprite)
}

