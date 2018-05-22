function Digital3D() {}
var msj3DObj = null;
Digital3D['prototype']['start'] = function () {
    var _dg3dObj = this;
    msj3DObj = _dg3dObj;
    _dg3dObj['initThree'](_dg3dObj['fId']);
    _dg3dObj['initCamera']();
    _dg3dObj['initScene']();
    _dg3dObj['initHelpGrid']();
    _dg3dObj['initLight']();
    //_dg3dObj['addTestObj']();
    $['each'](_dg3dObj['objList'], function (index, obj) {
        _dg3dObj.InitAddObject(obj)
    });
    _dg3dObj['initMouseCtrl']();
    _dg3dObj['addBtns'](_dg3dObj['btns']);
    _dg3dObj['animation']();
    window['addEventListener']('resize', _dg3dObj['onWindowResize'], false)
};
Digital3D['prototype']['initmsj3D'] = function (_0x8fcax6, _0x8fcax7, _0x8fcax8) {
    this['option'] = new Object();
    this['option']['antialias'] = _0x8fcax7['antialias'] || true;
    this['option']['clearCoolr'] = _0x8fcax7['clearCoolr'] || 0x1b7ace;
    this['option']['showHelpGrid'] = _0x8fcax7['showHelpGrid'] || false;
    this['fId'] = _0x8fcax6;
    this['width'] = window['innerWidth'];
    this['height'] = window['innerHeight'];
    this['renderer'] = null;
    this['camera'] = null;
    this['scene'] = null;
    this['SELECTED'] = null;
    this['objects'] = [];
    this['mouseClick'] = new THREE.Vector2();
    this['raycaster'] = new THREE.Raycaster();
    this['controls'] = null;
    this['objList'] = _0x8fcax8['objects'];
    this['eventList'] = _0x8fcax8['events'];
    this['btns'] = _0x8fcax8['btns'];
    var _dg3dObj = this
};
Digital3D['prototype']['initThree'] = function () {
    var _dg3dObj = this;
    _dg3dObj['renderer'] = new THREE.WebGLRenderer({
        alpha: true,
        antialias: _dg3dObj['option']['antialias']
    });
    _dg3dObj['renderer']['setSize'](_dg3dObj['width'], _dg3dObj['height']);
    $('#' + _dg3dObj['fId'])['append'](_dg3dObj['renderer']['domElement']);
    _dg3dObj['renderer']['setClearColor'](_dg3dObj['option']['clearCoolr'], 1.0);
    _dg3dObj['renderer']['shadowMap']['enabled'] = true;
    _dg3dObj['renderer']['shadowMapSoft'] = true;
    _dg3dObj['renderer']['domElement']['addEventListener']('mousedown', _dg3dObj['onDocumentMouseDown'], false);
    _dg3dObj['renderer']['domElement']['addEventListener']('mousemove', _dg3dObj['onDocumentMouseMove'], false)
};
Digital3D['prototype']['initCamera'] = function () {
    var _dg3dObj = this;
    _dg3dObj['camera'] = new THREE.PerspectiveCamera(45, _dg3dObj['width'] / _dg3dObj['height'], 1, 100000);
    _dg3dObj['camera']['name'] = 'mainCamera';
    _dg3dObj['camera']['position']['x'] = 0;
    _dg3dObj['camera']['position']['y'] = 800;
    _dg3dObj['camera']['position']['z'] = -1800;
    _dg3dObj['camera']['up']['x'] = 0;
    _dg3dObj['camera']['up']['y'] = 1;
    _dg3dObj['camera']['up']['z'] = 0;
    _dg3dObj['camera']['lookAt']({
        x: 0,
        y: 0,
        z: 0
    });
    _dg3dObj['objects']['push'](_dg3dObj['camera'])
};
Digital3D['prototype']['initScene'] = function () {
    var _dg3dObj = this;
    _dg3dObj['scene'] = new THREE.Scene()

    //var axesHelper = new THREE.AxisHelper( 2000 );
    //_dg3dObj['scene'].add( axesHelper );
};
Digital3D['prototype']['addObject'] = function (_0x8fcax5) {
    var _dg3dObj = msj3DObj;
    _dg3dObj['objects']['push'](_0x8fcax5);
    _dg3dObj['scene']['add'](_0x8fcax5)
};
Digital3D['prototype']['delObject'] = function (_0x8fcax9, _0x8fcaxa) {
    var _dg3dObj = msj3DObj;
    for (var _0x8fcaxb = 0; _0x8fcaxb < _dg3dObj['objects']['length']; _0x8fcaxb++) {
        var _0x8fcax5 = _dg3dObj['objects'][_0x8fcaxb];
        if (_0x8fcax5['name'] != null && _0x8fcax5['name'] != '') {
            if (_0x8fcax5['name'] == _0x8fcax9) {
                _dg3dObj['scene']['remove'](_0x8fcax5);
                _dg3dObj['objects']['splice'](_0x8fcaxb, 1);
                _0x8fcaxb--;
                if (false == _0x8fcaxa) {
                    return true
                }
            }
        }
    };
    return false
};
Digital3D['prototype']['delObject2'] = function (_0x8fcax9, _0x8fcaxa) {
    var _dg3dObj = msj3DObj;
    for (var _0x8fcaxb = 0; _0x8fcaxb < _dg3dObj['objects']['length']; _0x8fcaxb++) {
        var _0x8fcax5 = _dg3dObj['objects'][_0x8fcaxb];
        if (_0x8fcax5['name'] != null && _0x8fcax5['name'] != '') {
            if (_0x8fcax5['name']['indexOf'](_0x8fcax9) >=0) {
                _dg3dObj['scene']['remove'](_0x8fcax5);
                _dg3dObj['objects']['splice'](_0x8fcaxb, 1);
                _0x8fcaxb--;
                if (false == _0x8fcaxa) {
                    return true
                }
            }
        }
    };
    return false
};
Digital3D['prototype']['showObject'] = function (_0x8fcax9, _0x8fcaxc, _0x8fcaxa) {
    var _dg3dObj = msj3DObj;
    for (var _0x8fcaxb = 0; _0x8fcaxb < _dg3dObj['objects']['length']; _0x8fcaxb++) {
        var _0x8fcax5 = _dg3dObj['objects'][_0x8fcaxb];
        //console.log('_0x8fcax5',_0x8fcax5['name']);
        if (_0x8fcax5['name'] != null && _0x8fcax5['name'] != '') {
            if (_0x8fcax5['name']['indexOf'](_0x8fcax9) >= 0) {
                _0x8fcax5['visible'] = _0x8fcaxc;
                if (false == _0x8fcaxa) {
                    return true
                }
            }
        }
    };
    return false
};

Digital3D['prototype']['showObjectOpacity'] = function (_0x8fcax9, _0x8fcaxd, _0x8fcaxa) {
    var _dg3dObj = msj3DObj;
    for (var _0x8fcaxb = 0; _0x8fcaxb < _dg3dObj['objects']['length']; _0x8fcaxb++) {
        var _0x8fcax5 = _dg3dObj['objects'][_0x8fcaxb];
        if (_0x8fcax5['name'] != null && _0x8fcax5['name'] != '') {
            console.log("_0x8fcax5['name']",_0x8fcax5['name']);
            if (_0x8fcax5['name']['indexOf'](_0x8fcax9) >= 0) {
                if (_0x8fcax5['material'] != null && typeof(_0x8fcax5['material']) != 'undefined') {
                    for (var _0x8fcaxe = 0; _0x8fcaxe < _0x8fcax5['material']['length']; _0x8fcaxe++) {
                        _0x8fcax5['material'][_0x8fcaxe]['opacity'] = _0x8fcaxd
                    }
                };
                if (false == _0x8fcaxa) {
                    return true
                }
            }
        }
    };
    return false
};
Digital3D['prototype']['initHelpGrid'] = function () {
    var _dg3dObj = this;
    if (_dg3dObj['option']['showHelpGrid']) {
        var _0x8fcaxf = new THREE.GridHelper(1000, 50);
        _dg3dObj['scene']['add'](_0x8fcaxf)
    }
};
Digital3D['prototype']['initLight'] = function () {
    var _dg3dObj = this;
    var _0x8fcax10 = new THREE.AmbientLight(0xcccccc);
    _0x8fcax10['position']['set'](0, 0, 0);
    _dg3dObj['scene']['add'](_0x8fcax10);
    var _0x8fcax11 = new THREE.PointLight(0x555555);
    _0x8fcax11['shadow']['camera']['near'] = 1;
    _0x8fcax11['shadow']['camera']['far'] = 5000;
    _0x8fcax11['position']['set'](0, 350, 0);
    _0x8fcax11['castShadow'] = false;
    _dg3dObj['scene']['add'](_0x8fcax11)

    _0x8fcax11 = new THREE.PointLight(0x555555);
    _0x8fcax11['shadow']['camera']['near'] = 1;
    _0x8fcax11['shadow']['camera']['far'] = 5000;
    _0x8fcax11['position']['set'](0, 1000, -600);
    _0x8fcax11['castShadow'] = false;
   // _dg3dObj['scene']['add'](_0x8fcax11)
};
Digital3D['prototype']['initMouseCtrl'] = function () {
    var _dg3dObj = this;
    _dg3dObj['controls'] = new THREE.OrbitControls(_dg3dObj['camera']);
    _dg3dObj['controls'] .maxPolarAngle = Math.PI * 0.42;
    //_dg3dObj['controls'] .minDistance = 500;
    //_dg3dObj['controls'] .maxDistance = 7500;
    _dg3dObj['controls']['addEventListener']('change', _dg3dObj['updateControls'])
};
Digital3D['prototype']['updateControls'] = function () {};
Digital3D['prototype']['animation'] = function () {
    var _dg3dObj = msj3DObj;
    if (TWEEN != null && typeof(TWEEN) != 'undefined') {
        TWEEN['update']()
    };
    _dg3dObj['onUpdateSence']();
    requestAnimationFrame(_dg3dObj['animation']);
    _dg3dObj['renderer']['render'](_dg3dObj['scene'], _dg3dObj['camera'])
};
Digital3D['prototype']['onUpdateSence'] = function () {
    var _dg3dObj = msj3DObj;
    var _0x8fcax12 = 0.0;
    if (_dg3dObj['vcmaterial'] != null && typeof(_dg3dObj['vcmaterial']) != 'undefined') {
        _dg3dObj['vcmaterial']['map']['offset']['x'] += 0.002;
        _0x8fcax12 = _dg3dObj['vcmaterial']['map']['offset']['x']
    };
    if (_dg3dObj['nurbsmaterial'] != null && typeof(_dg3dObj['nurbsmaterial']) != 'undefined') {
        _dg3dObj['nurbsmaterial']['map']['offset']['y'] -= 0.012
    };
    if (_dg3dObj['pathTubeGeometry'] != null && typeof(_dg3dObj['pathTubeGeometry']) != 'undefined') {
        var _0x8fcax13 = 1.0;
        var _0x8fcax14 = 20;
        var _0x8fcax15 = 10;
        var _0x8fcax16 = _dg3dObj['camera'];
        var _0x8fcax17 = _dg3dObj['pathTubeGeometry'];
        var _0x8fcax18 = (_dg3dObj['dynamicPathTimer'] % 1);
        var _0x8fcax19 = new THREE.Vector3();
        var _0x8fcax1a = new THREE.Vector3();
        var _0x8fcax1b = _0x8fcax17['parameters']['path']['getPointAt'](_0x8fcax18);
        _0x8fcax1b['y'] += _0x8fcax14;
        _0x8fcax1b['multiplyScalar'](_0x8fcax13);
        _0x8fcax16['position']['copy'](_0x8fcax1b);
        var _0x8fcax1c = (_0x8fcax18 + 30 / _0x8fcax17['parameters']['path']['getLength']()) % 1;
        var _0x8fcax1d = _0x8fcax17['parameters']['path']['getPointAt'](_0x8fcax1c)['multiplyScalar'](_0x8fcax13);
        _0x8fcax1d['y'] += _0x8fcax14;
        _0x8fcax16['matrix']['lookAt'](_0x8fcax16['position'], _0x8fcax1d, _0x8fcax1a);
        _0x8fcax16['rotation']['setFromRotationMatrix'](_0x8fcax16['matrix'], _0x8fcax16['rotation']['order']);
        _dg3dObj['dynamicPathTimer'] += 0.00015;
        if (_dg3dObj['dynamicPathTimer'] > 1.0) {
            _dg3dObj['dynamicPathTimer'] = 0.0
        }
    }
};
Digital3D['prototype']['onWindowResize'] = function () {
    var _dg3dObj = msj3DObj;
    _dg3dObj['width'] = window['innerWidth'];
    _dg3dObj['height'] = window['innerHeight'];
    _dg3dObj['camera']['aspect'] = window['innerWidth'] / window['innerHeight'];
    _dg3dObj['camera']['updateProjectionMatrix']();
    _dg3dObj['renderer']['setSize'](window['innerWidth'], window['innerHeight'])
};
Digital3D['prototype']['InitAddObject'] = function (_0x8fcax5) {
    var _dg3dObj = this;
    if (_0x8fcax5['show'] == null || typeof(_0x8fcax5['show']) == 'undefined' || _0x8fcax5['show']) {
        var _0x8fcax1e = null;
        switch (_0x8fcax5['objType']) {
            case 'cube':
                _0x8fcax1e = _dg3dObj['createCube'](_dg3dObj, _0x8fcax5);
                _dg3dObj['addObject'](_0x8fcax1e);
                break;
            case 'equipment':
                _0x8fcax1e = _dg3dObj['createInnerEquipment'](_dg3dObj, _0x8fcax5);
                //_dg3dObj['addObject'](_0x8fcax1e);
                break;
            case 'floor':
                _0x8fcax1e = _dg3dObj.CreateFloor(_0x8fcax5);
                _dg3dObj['addObject'](_0x8fcax1e);
                break;
            case 'wall':
                _dg3dObj.CreateWall(_dg3dObj, _0x8fcax5);
                break;
            case 'plane':
                _0x8fcax1e = _dg3dObj['createPlaneGeometry'](_dg3dObj, _0x8fcax5);
                _dg3dObj['addObject'](_0x8fcax1e);
                break;
            case 'glasses':
                _dg3dObj['createGlasses'](_dg3dObj, _0x8fcax5);
                break;
            case 'emptyCabinet':
                _0x8fcax1e = _dg3dObj['createEmptyCabinet'](_dg3dObj, _0x8fcax5);
                //console.log('_0x8fcax1e',_0x8fcax1e);
                _dg3dObj['addObject'](_0x8fcax1e);
                break;
            case 'cloneObj':
                _0x8fcax1e = _dg3dObj['commonFunc']['cloneObj'](_0x8fcax5['copyfrom'], _0x8fcax5);
                _dg3dObj['addObject'](_0x8fcax1e);
                break;
            case 'bladeServer':
                _0x8fcax1e = _dg3dObj.CreateBladeServer(_dg3dObj, _0x8fcax5);
                break;
            case 'loadobj':
                _dg3dObj['loadObj'](_0x8fcax5);
                break
        }
    }
};
Digital3D['prototype']['CreateFloor'] = function (_0x8fcax5) {
    var _dg3dObj = this;
    var _0x8fcax1f = _dg3dObj['createCube'](_dg3dObj, _0x8fcax5);
    return _0x8fcax1f
};
Digital3D['prototype']['CreateBladeServer'] = function (_dg3dObj, _0x8fcax5) {
    if (_dg3dObj == null) {
        _dg3dObj = this
    };
    var _0x8fcax20 = _0x8fcax5['x'],
        _0x8fcax21 = _0x8fcax5['y'],
        _0x8fcax22 = _0x8fcax5['z'];
    var _0x8fcax1f = _dg3dObj['createCube'](_dg3dObj, _0x8fcax5);
    if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax5['childrens']) && _0x8fcax5['childrens']['length'] > 0) {
        $['each'](_0x8fcax5['childrens'], function (_0x8fcax4, _0x8fcax23) {
            var _0x8fcax24 = _dg3dObj['createCube'](_dg3dObj, _0x8fcax23);
            _0x8fcax1f['add'](_0x8fcax24);
            _dg3dObj['objects']['push'](_0x8fcax24)
        })
    };
    _dg3dObj['addObject'](_0x8fcax1f);
    return _0x8fcax1f
};
Digital3D['prototype']['CreateBladeServer2'] = function (_dg3dObj, _0x8fcax5) {
    if (_dg3dObj == null) {
        _dg3dObj = this
    };
    var _0x8fcax1f = _dg3dObj['createCube'](_dg3dObj, _0x8fcax5);
    if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax5['childrens']) && _0x8fcax5['childrens']['length'] > 0) {
        $['each'](_0x8fcax5['childrens'], function (_0x8fcax4, _0x8fcax23) {
            var _0x8fcax25 = {
                length: _0x8fcax23['length'],
                width: _0x8fcax23['width'],
                height: _0x8fcax23['height'],
                rotation: _0x8fcax23['rotation'],
                uuid: _0x8fcax23['uuid'],
                name: _0x8fcax23['name'],
                x: _0x8fcax23['x'],
                y: _0x8fcax23['y'],
                z: _0x8fcax23['z'],
                style: {
                    skinColor: _0x8fcax23['skinColor'],
                    skin: _0x8fcax23['skin']
                }
            };
            var _0x8fcax24 = _dg3dObj['createCube'](_dg3dObj, _0x8fcax25);
            var _0x8fcax26 = _0x8fcax1f['material']['clone']();
            if ('' != _0x8fcax23['op']) {
                _0x8fcax1f = _dg3dObj['mergeModel'](_dg3dObj, _0x8fcax23['op'], _0x8fcax1f, _0x8fcax24)
            };
            _0x8fcax1f['material'] = _0x8fcax26;
            for (var _0x8fcaxe = 0; _0x8fcaxe < 66; _0x8fcaxe++) {
                _0x8fcax1f['material']['push'](_0x8fcax26[_0x8fcaxe % 6])
            }
        })
    };
    _dg3dObj['addObject'](_0x8fcax1f);
    return _0x8fcax1f
};
Digital3D['prototype']['CreateWall'] = function (_dg3dObj, _0x8fcax5) {
    if (_dg3dObj == null) {
        _dg3dObj = this
    };
    var _0x8fcax27 = _0x8fcax5['thick'] || 40;
    var _0x8fcax28 = _0x8fcax5['length'] || 100;
    var _0x8fcax29 = _0x8fcax5['height'] || 300;
    var _0x8fcax2a = _0x8fcax5['style']['skinColor'] || 0xff0000;//0x98750f;

    $['each'](_0x8fcax5['wallData'], function (_0x8fcax4, _0x8fcax2b) {
        var _0x8fcax2c = _0x8fcax28;
        var _0x8fcax2d = _0x8fcax2b['thick'] || _0x8fcax27;
        var _0x8fcax2e = ((_0x8fcax2b['startDot']['x'] || 0) + (_0x8fcax2b['endDot']['x'] || 0)) / 2;
        var _0x8fcax2f = ((_0x8fcax2b['startDot']['y'] || 0) + (_0x8fcax2b['endDot']['y'] || 0)) / 2;
        var _0x8fcax30 = ((_0x8fcax2b['startDot']['z'] || 0) + (_0x8fcax2b['endDot']['z'] || 0)) / 2;
        if (_0x8fcax2b['startDot']['z'] == _0x8fcax2b['endDot']['z']) {
            _0x8fcax2c = Math['abs'](_0x8fcax2b['startDot']['x'] - _0x8fcax2b['endDot']['x']);
            _0x8fcax2d = _0x8fcax2b['thick'] || _0x8fcax27
        } else {
            if (_0x8fcax2b['startDot']['x'] == _0x8fcax2b['endDot']['x']) {
                _0x8fcax2c = _0x8fcax2b['thick'] || _0x8fcax27;
                _0x8fcax2d = Math['abs'](_0x8fcax2b['startDot']['z'] - _0x8fcax2b['endDot']['z'])
            }
        };
        var _0x8fcax31 = {
            length: _0x8fcax2c,
            width: _0x8fcax2d,
            height: _0x8fcax2b['height'] || _0x8fcax29,
            rotation: _0x8fcax2b['rotation'],
            x: _0x8fcax2e,
            y: _0x8fcax2f,
            z: _0x8fcax30,
            uuid: _0x8fcax2b['uuid'],
            name: _0x8fcax2b['name'],
            style: {
                skinColor: _0x8fcax2a,
                skin: _0x8fcax2b['skin']
            }
        };
        //console.log('wall',_0x8fcax31);
        var _0x8fcax1f = _dg3dObj['createCube'](_dg3dObj, _0x8fcax31);
        if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax2b['childrens']) && _0x8fcax2b['childrens']['length'] > 0) {
            $['each'](_0x8fcax2b['childrens'], function (_0x8fcax4, _0x8fcax32) {
                var _0x8fcax24 = null;
                _0x8fcax24 = _dg3dObj.CreateHole(_dg3dObj, _0x8fcax32);
                _0x8fcax1f = _dg3dObj['mergeModel'](_dg3dObj, _0x8fcax32['op'], _0x8fcax1f, _0x8fcax24)

            })
        };
        _dg3dObj['addObject'](_0x8fcax1f)
    })
};
Digital3D['prototype']['CreateHole'] = function (_dg3dObj, _0x8fcax5) {
    if (_dg3dObj == null) {
        _dg3dObj = this
    };
    var _0x8fcax27 = 40;
    var _0x8fcax28 = 100;
    var _0x8fcax29 = 300;
    var _0x8fcax2a = 0x98750f;
    var _0x8fcax2c = _0x8fcax28;
    var _0x8fcax2d = _0x8fcax5['thick'] || _0x8fcax27;
    var _0x8fcax2e = ((_0x8fcax5['startDot']['x'] || 0) + (_0x8fcax5['endDot']['x'] || 0)) / 2;
    var _0x8fcax2f = ((_0x8fcax5['startDot']['y'] || 0) + (_0x8fcax5['endDot']['y'] || 0)) / 2;
    var _0x8fcax30 = ((_0x8fcax5['startDot']['z'] || 0) + (_0x8fcax5['endDot']['z'] || 0)) / 2;
    if (_0x8fcax5['startDot']['z'] == _0x8fcax5['endDot']['z']) {
        _0x8fcax2c = Math['abs'](_0x8fcax5['startDot']['x'] - _0x8fcax5['endDot']['x']);
        _0x8fcax2d = _0x8fcax5['thick'] || _0x8fcax27
    } else {
        if (_0x8fcax5['startDot']['x'] == _0x8fcax5['endDot']['x']) {
            _0x8fcax2c = _0x8fcax5['thick'] || _0x8fcax27;
            _0x8fcax2d = Math['abs'](_0x8fcax5['startDot']['z'] - _0x8fcax5['endDot']['z'])
        }
    };
    var _0x8fcax31 = {
        length: _0x8fcax2c,
        width: _0x8fcax2d,
        height: _0x8fcax5['height'] || _0x8fcax29,
        rotation: _0x8fcax5['rotation'],
        x: _0x8fcax2e,
        uuid: _0x8fcax5['uuid'],
        name: _0x8fcax5['name'],
        y: _0x8fcax2f,
        z: _0x8fcax30,
        style: {
            skinColor: _0x8fcax2a,
            skin: _0x8fcax5['skin']
        }
    };
    var _0x8fcax1f = _dg3dObj['createCube'](_dg3dObj, _0x8fcax31);
    return _0x8fcax1f
};
Digital3D['prototype']['mergeModel2'] = function (_dg3dObj, _0x8fcax33, _0x8fcax34, _0x8fcax35) {
    if (_dg3dObj == null) {
        _dg3dObj = this
    };
    var _0x8fcax36 = new ThreeBSP(_0x8fcax34);
    var _0x8fcax37 = new ThreeBSP(_0x8fcax35);
    var _0x8fcax38 = null;
    if (_0x8fcax33 == '-') {
        _0x8fcax38 = _0x8fcax36['subtract'](_0x8fcax37)
    } else {
        if (_0x8fcax33 == '+') {
            var _0x8fcax39 = new THREE.Mesh(_0x8fcax35);
            _0x8fcax35['updateMatrix']();
            _0x8fcax34['geometry']['merge'](_0x8fcax35['geometry'], _0x8fcax35['matrix']);
            return _0x8fcax34
        } else {
            if (_0x8fcax33 == '&') {
                _0x8fcax38 = _0x8fcax36['intersect'](_0x8fcax37)
            } else {
                _dg3dObj['addObject'](_0x8fcax35);
                return _0x8fcax34
            }
        }
    };
    var _0x8fcax3a = [];
    for (var _0x8fcaxb = 0; _0x8fcaxb < 1; _0x8fcaxb++) {
        _0x8fcax3a['push'](new THREE.MeshLambertMaterial({
            vertexColors: THREE['FaceColors']
        }))
    };
    var _0x8fcax3b = _0x8fcax3a;
    var _0x8fcax3c = _0x8fcax38['toMesh'](new THREE.MultiMaterial(_0x8fcax3b));
    _0x8fcax3c['material']['shading'] = THREE['FlatShading'];
    _0x8fcax3c['geometry']['computeFaceNormals']();
    _0x8fcax3c['geometry']['computeVertexNormals']();
    _0x8fcax3c['uuid'] = _0x8fcax34['uuid'] + _0x8fcax33 + _0x8fcax35['uuid'];
    _0x8fcax3c['name'] = _0x8fcax34['name'] + _0x8fcax33 + _0x8fcax35['name'];
    _0x8fcax3c['material']['needsUpdate'] = true;
    _0x8fcax3c['geometry']['buffersNeedUpdate'] = true;
    _0x8fcax3c['geometry']['uvsNeedUpdate'] = true;
    _0x8fcax3c['castShadow'] = true;
    _0x8fcax3c['receiveShadow'] = true;
    return _0x8fcax3c
};
Digital3D['prototype']['mergeModel'] = function (_dg3dObj, _0x8fcax33, _0x8fcax34, _0x8fcax35) {
    if (_dg3dObj == null) {
        _dg3dObj = this
    };
    var _0x8fcax36 = new ThreeBSP(_0x8fcax34);
    var _0x8fcax37 = new ThreeBSP(_0x8fcax35);
    var _0x8fcax38 = null;
    if (_0x8fcax33 == '-') {
        _0x8fcax38 = _0x8fcax36['subtract'](_0x8fcax37)
    } else {
        if (_0x8fcax33 == '+') {
            var _0x8fcax39 = new THREE.Mesh(_0x8fcax35);
            _0x8fcax35['updateMatrix']();
            _0x8fcax34['geometry']['merge'](_0x8fcax35['geometry'], _0x8fcax35['matrix']);
            return _0x8fcax34
        } else {
            if (_0x8fcax33 == '&') {
                _0x8fcax38 = _0x8fcax36['intersect'](_0x8fcax37)
            } else {
                _dg3dObj['addObject'](_0x8fcax35);
                return _0x8fcax34
            }
        }
    };
    var _0x8fcax3a = [];
    for (var _0x8fcaxb = 0; _0x8fcaxb < 1; _0x8fcaxb++) {
        _0x8fcax3a['push'](new THREE.MeshLambertMaterial({
            vertexColors: THREE['FaceColors']
        }))
    };
    var _0x8fcax3b = _0x8fcax3a;
    var _0x8fcax3c = _0x8fcax38['toMesh'](new THREE.MultiMaterial(_0x8fcax3b));
    _0x8fcax3c['material']['shading'] = THREE['FlatShading'];
    _0x8fcax3c['geometry']['computeFaceNormals']();
    _0x8fcax3c['geometry']['computeVertexNormals']();
    _0x8fcax3c['uuid'] = _0x8fcax34['uuid'] + _0x8fcax33 + _0x8fcax35['uuid'];
    _0x8fcax3c['name'] = _0x8fcax34['name'] + _0x8fcax33 + _0x8fcax35['name'];
    _0x8fcax3c['material']['needsUpdate'] = true;
    _0x8fcax3c['geometry']['buffersNeedUpdate'] = true;
    _0x8fcax3c['geometry']['uvsNeedUpdate'] = true;
    var _0x8fcax3d = null;
    for (var _0x8fcaxb = 0; _0x8fcaxb < _0x8fcax3c['geometry']['faces']['length']; _0x8fcaxb++) {
        var _0x8fcax3e = false;
        for (var _0x8fcax3f = 0; _0x8fcax3f < _0x8fcax34['geometry']['faces']['length']; _0x8fcax3f++) {
            if (_0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][0]['x'] === _0x8fcax34['geometry']['faces'][_0x8fcax3f]['vertexNormals'][0]['x'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][0]['y'] === _0x8fcax34['geometry']['faces'][_0x8fcax3f]['vertexNormals'][0]['y'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][0]['z'] === _0x8fcax34['geometry']['faces'][_0x8fcax3f]['vertexNormals'][0]['z'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][1]['x'] === _0x8fcax34['geometry']['faces'][_0x8fcax3f]['vertexNormals'][1]['x'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][1]['y'] === _0x8fcax34['geometry']['faces'][_0x8fcax3f]['vertexNormals'][1]['y'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][1]['z'] === _0x8fcax34['geometry']['faces'][_0x8fcax3f]['vertexNormals'][1]['z'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][2]['x'] === _0x8fcax34['geometry']['faces'][_0x8fcax3f]['vertexNormals'][2]['x'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][2]['y'] === _0x8fcax34['geometry']['faces'][_0x8fcax3f]['vertexNormals'][2]['y'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][2]['z'] === _0x8fcax34['geometry']['faces'][_0x8fcax3f]['vertexNormals'][2]['z']) {
                _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['color']['setHex'](_0x8fcax34['geometry']['faces'][_0x8fcax3f]['color']['r'] * 0xff0000 + _0x8fcax34['geometry']['faces'][_0x8fcax3f]['color']['g'] * 0x00ff00 + _0x8fcax34['geometry']['faces'][_0x8fcax3f]['color']['b'] * 0x0000ff);
                _0x8fcax3d = _0x8fcax34['geometry']['faces'][_0x8fcax3f]['color']['r'] * 0xff0000 + _0x8fcax34['geometry']['faces'][_0x8fcax3f]['color']['g'] * 0x00ff00 + _0x8fcax34['geometry']['faces'][_0x8fcax3f]['color']['b'] * 0x0000ff;
                _0x8fcax3e = true
            }
        };
        if (_0x8fcax3e == false) {
            for (var _0x8fcax3f = 0; _0x8fcax3f < _0x8fcax35['geometry']['faces']['length']; _0x8fcax3f++) {
                if (_0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][0]['x'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][0]['x'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][0]['y'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][0]['y'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][0]['z'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][0]['z'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][1]['x'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][1]['x'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][1]['y'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][1]['y'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][1]['z'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][1]['z'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][2]['x'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][2]['x'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][2]['y'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][2]['y'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][2]['z'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][2]['z'] && _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['vertexNormals'][2]['z'] === _0x8fcax35['geometry']['faces'][_0x8fcax3f]['vertexNormals'][2]['z']) {
                    _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['color']['setHex'](_0x8fcax35['geometry']['faces'][_0x8fcax3f]['color']['r'] * 0xff0000 + _0x8fcax35['geometry']['faces'][_0x8fcax3f]['color']['g'] * 0x00ff00 + _0x8fcax35['geometry']['faces'][_0x8fcax3f]['color']['b'] * 0x0000ff);
                    _0x8fcax3d = _0x8fcax35['geometry']['faces'][_0x8fcax3f]['color']['r'] * 0xff0000 + _0x8fcax35['geometry']['faces'][_0x8fcax3f]['color']['g'] * 0x00ff00 + _0x8fcax35['geometry']['faces'][_0x8fcax3f]['color']['b'] * 0x0000ff;
                    _0x8fcax3e = true
                }
            }
        };
        if (_0x8fcax3e == false) {
            _0x8fcax3c['geometry']['faces'][_0x8fcaxb]['color']['setHex'](_0x8fcax3d)
        }
    };
    _0x8fcax3c['castShadow'] = true;
    _0x8fcax3c['receiveShadow'] = true;
    return _0x8fcax3c
};
Digital3D['prototype']['createCube'] = function (_dg3dObj, _0x8fcax5) {
    if (_dg3dObj == null) {
        _dg3dObj = this
    };
    var _0x8fcax40 = _0x8fcax5['length'] || 1000;
    var _0x8fcax41 = _0x8fcax5['width'] || _0x8fcax40;
    var _0x8fcax42 = _0x8fcax5['height'] || 10;
    var _0x8fcax43 = _0x8fcax5['x'] || 0,
        _0x8fcax44 = _0x8fcax5['y'] || 0,
        _0x8fcax45 = _0x8fcax5['z'] || 0;
    var _0x8fcax46 = _0x8fcax5['style']['skinColor'] || 0x98750f;
    var _0x8fcax47 = new THREE.CubeGeometry(_0x8fcax40, _0x8fcax42, _0x8fcax41, 0, 0, 1);
    for (var _0x8fcaxb = 0; _0x8fcaxb < _0x8fcax47['faces']['length']; _0x8fcaxb += 2) {
        var _0x8fcax48 = _0x8fcax46 || Math['random']() * 0x531844;
        _0x8fcax47['faces'][_0x8fcaxb]['color']['setHex'](_0x8fcax48);
        _0x8fcax47['faces'][_0x8fcaxb + 1]['color']['setHex'](_0x8fcax48)
    };
    var _0x8fcax49 = {
        vertexColors: THREE['FaceColors']
    };
    var _0x8fcax4a = _0x8fcax49,
        _0x8fcax4b = _0x8fcax49,
        _0x8fcax4c = _0x8fcax49,
        _0x8fcax4d = _0x8fcax49,
        _0x8fcax4e = _0x8fcax49;
    var _0x8fcax4f = 1;
    if (_0x8fcax5['style'] != null && typeof(_0x8fcax5['style']) != 'undefined' && _0x8fcax5['style']['skin'] != null && typeof(_0x8fcax5['style']['skin']) != 'undefined') {
        if (_0x8fcax5['style']['skin']['opacity'] != null && typeof(_0x8fcax5['style']['skin']['opacity']) != 'undefined') {
            _0x8fcax4f = _0x8fcax5['style']['skin']['opacity'];
            //console['log'](_0x8fcax4f)
        };
        _0x8fcax49 = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_up'], _0x8fcax47, 4);
        _0x8fcax4a = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_down'], _0x8fcax47, 6);
        _0x8fcax4b = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_fore'], _0x8fcax47, 0);
        _0x8fcax4c = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_behind'], _0x8fcax47, 2);
        _0x8fcax4d = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_left'], _0x8fcax47, 8);
        _0x8fcax4e = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_right'], _0x8fcax47, 10)
    };
    var _0x8fcax3a = [];
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4b));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4c));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax49));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4a));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4e));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4d));
    var _0x8fcax3b = _0x8fcax3a;
    cube = new THREE.Mesh(_0x8fcax47, new THREE.MultiMaterial(_0x8fcax3b));
    cube['castShadow'] = true;
    cube['receiveShadow'] = true;
    cube['uuid'] = _0x8fcax5['uuid'];
    cube['name'] = _0x8fcax5['name'];
    cube['position']['set'](_0x8fcax43, _0x8fcax44, _0x8fcax45);
    if (_0x8fcax5['rotation'] != null && typeof(_0x8fcax5['rotation']) != 'undefined' && _0x8fcax5['rotation']['length'] > 0) {
        $['each'](_0x8fcax5['rotation'], function (_0x8fcax4, _0x8fcax50) {
            switch (_0x8fcax50['direction']) {
                case 'x':
                    cube['rotateX'](_0x8fcax50['degree']);
                    break;
                case 'y':
                    cube['rotateY'](_0x8fcax50['degree']);
                    break;
                case 'z':
                    cube['rotateZ'](_0x8fcax50['degree']);
                    break;
                case 'arb':
                    cube['rotateOnAxis'](new THREE.Vector3(_0x8fcax50['degree'][0], _0x8fcax50['degree'][1], _0x8fcax50['degree'][2]), _0x8fcax50['degree'][3]);
                    break
            }
        })
    };

    return cube
};
Digital3D['prototype']['createInnerEquipment'] = function (_dg3dObj, _0x8fcax5) {
    if (_dg3dObj == null) {
        _dg3dObj = this
    };
    var _0x8fcax40 = _0x8fcax5['length'] || 1000;
    var _0x8fcax41 = _0x8fcax5['width'] || _0x8fcax40;
    var _0x8fcax42 = _0x8fcax5['height'] || 10;
    var _0x8fcax43 = _0x8fcax5['x'] || 0,
        _0x8fcax44 = _0x8fcax5['y'] || 0,
        _0x8fcax45 = _0x8fcax5['z'] || 0;
    var _0x8fcax46 = _0x8fcax5['style']['skinColor'] || 0x98750f;
    var _0x8fcax47 = new THREE.CubeGeometry(_0x8fcax40, _0x8fcax42, _0x8fcax41, 0, 0, 1);
    for (var _0x8fcaxb = 0; _0x8fcaxb < _0x8fcax47['faces']['length']; _0x8fcaxb += 2) {
        var _0x8fcax48 = _0x8fcax46 || Math['random']() * 0x531844;
        _0x8fcax47['faces'][_0x8fcaxb]['color']['setHex'](_0x8fcax48);
        _0x8fcax47['faces'][_0x8fcaxb + 1]['color']['setHex'](_0x8fcax48)
    };
    var _0x8fcax49 = {
        vertexColors: THREE['FaceColors']
    };
    var _0x8fcax4a = _0x8fcax49,
        _0x8fcax4b = _0x8fcax49,
        _0x8fcax4c = _0x8fcax49,
        _0x8fcax4d = _0x8fcax49,
        _0x8fcax4e = _0x8fcax49;
    var _0x8fcax4f = 1;
    if (_0x8fcax5['style'] != null && typeof(_0x8fcax5['style']) != 'undefined' && _0x8fcax5['style']['skin'] != null && typeof(_0x8fcax5['style']['skin']) != 'undefined') {
        if (_0x8fcax5['style']['skin']['opacity'] != null && typeof(_0x8fcax5['style']['skin']['opacity']) != 'undefined') {
            _0x8fcax4f = _0x8fcax5['style']['skin']['opacity'];
            //console['log'](_0x8fcax4f)
        };
        _0x8fcax49 = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_up'], _0x8fcax47, 4);
        _0x8fcax4a = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_down'], _0x8fcax47, 6);
        _0x8fcax4b = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_fore'], _0x8fcax47, 0);
        _0x8fcax4c = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_behind'], _0x8fcax47, 2);
        _0x8fcax4d = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_left'], _0x8fcax47, 8);
        _0x8fcax4e = _dg3dObj['createSkinOptionOnj'](_dg3dObj, _0x8fcax40, _0x8fcax41, _0x8fcax5['style']['skin']['skin_right'], _0x8fcax47, 10)
    };
    var _0x8fcax3a = [];
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4b));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4c));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax49));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4a));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4e));
    _0x8fcax3a['push'](new THREE.MeshLambertMaterial(_0x8fcax4d));
    var _0x8fcax3b = _0x8fcax3a;
    cube = new THREE.Mesh(_0x8fcax47, new THREE.MultiMaterial(_0x8fcax3b));
    cube['castShadow'] = true;
    cube['receiveShadow'] = true;
    cube['uuid'] = _0x8fcax5['uuid'];
    cube['name'] = _0x8fcax5['name'];
    cube['position']['set'](_0x8fcax43, _0x8fcax44, _0x8fcax45);
    if (_0x8fcax5['rotation'] != null && typeof(_0x8fcax5['rotation']) != 'undefined' && _0x8fcax5['rotation']['length'] > 0) {
        $['each'](_0x8fcax5['rotation'], function (_0x8fcax4, _0x8fcax50) {
            switch (_0x8fcax50['direction']) {
                case 'x':
                    cube['rotateX'](_0x8fcax50['degree']);
                    break;
                case 'y':
                    cube['rotateY'](_0x8fcax50['degree']);
                    break;
                case 'z':
                    cube['rotateZ'](_0x8fcax50['degree']);
                    break;
                case 'arb':
                    cube['rotateOnAxis'](new THREE.Vector3(_0x8fcax50['degree'][0], _0x8fcax50['degree'][1], _0x8fcax50['degree'][2]), _0x8fcax50['degree'][3]);
                    break
            }
        })
    };
    if(_0x8fcax5.parent!=null&&typeof(_0x8fcax5.parent)!=undefined&&_0x8fcax5.parent!=''){
        console.log('_0x8fcax5.parent',_0x8fcax5.parent);

        var parent=_dg3dObj['commonFunc']['findObject'](_0x8fcax5.parent);
        console.log('parent',parent);
        cube.position.x=parent.position.x;
        //cube.position.y=parent.position.y;
        cube.position.z=parent.position.z;
        parent.add(cube);
    }
    //return cube
};
Digital3D['prototype']['createPlaneGeometry'] = function (_dg3dObj, _0x8fcax5) {
    var _0x8fcax51 = _0x8fcax5;
    if (typeof _0x8fcax51['pic'] == 'string') {
        var _0x8fcax52 = new THREE.TextureLoader();
        _0x8fcax52['setCrossOrigin'](this['crossOrigin']);
        var _0x8fcax53 = _0x8fcax52['load'](_0x8fcax51['pic'], function () {}, undefined, function () {})
    } else {
        var _0x8fcax53 = new THREE.CanvasTexture(_0x8fcax51['pic'])
    };
    var _0x8fcax54 = {
        map: _0x8fcax53,
        overdraw: true,
        side: THREE['FrontSide'],
        transparent: _0x8fcax51['transparent'],
        opacity: _0x8fcax51['opacity']
    };
    if (_0x8fcax51['blending']) {
        _0x8fcax54['blending'] = THREE['AdditiveBlending']
    };
    var _0x8fcax55 = new THREE.Mesh(new THREE.PlaneGeometry(_0x8fcax51['width'], _0x8fcax51['height'], 1, 1), new THREE.MeshBasicMaterial(_0x8fcax54));
    _0x8fcax55['position']['x'] = _0x8fcax51['position']['x'];
    _0x8fcax55['position']['y'] = _0x8fcax51['position']['y'];
    _0x8fcax55['position']['z'] = _0x8fcax51['position']['z'];
    _0x8fcax55['rotation']['x'] = _0x8fcax51['rotation']['x'];
    _0x8fcax55['rotation']['y'] = _0x8fcax51['rotation']['y'];
    _0x8fcax55['rotation']['z'] = _0x8fcax51['rotation']['z'];
    return _0x8fcax55
};
Digital3D['prototype']['createEmptyCabinet'] = function (_dg3dObj, _0x8fcax5) {
    var _dg3dObj = msj3DObj;

    var _0x8fcax56 = {
        show: true,
        uuid: '',
        name: '',
        objType: 'cube',
        length: _0x8fcax5['size']['length'] + 1,
        width: _0x8fcax5['size']['width'],
        height: _0x8fcax5['size']['thick'] + 1,
        x: _0x8fcax5['position']['x'] + 1,
        y: _0x8fcax5['position']['y'] + (_0x8fcax5['size']['height'] / 2 - _0x8fcax5['size']['thick'] / 2),
        z: _0x8fcax5['position']['z'],
        style: {
            skinColor: _0x8fcax5['skin']['skinColor'],
            skin: _0x8fcax5['skin']['skin_up']['skin']
        }
    };
    var _0x8fcax57 = _dg3dObj['createCube'](_dg3dObj, _0x8fcax56);

    var _0x8fcax58 = {
        show: true,
        uuid: '',
        name: '',
        objType: 'cube',
        length: _0x8fcax5['size']['length'],
        width: _0x8fcax5['size']['thick'],
        height: _0x8fcax5['size']['height'],
        x: 0,
        y: -(_0x8fcax5['size']['height'] / 2 - _0x8fcax5['size']['thick'] / 2),
        z: 0 - (_0x8fcax5['size']['width'] / 2 - _0x8fcax5['size']['thick'] / 2) - 1,
        style: {
            skinColor: _0x8fcax5['skin']['skinColor'],
            skin: _0x8fcax5['skin']['skin_left']['skin']
        }
    };
    var _0x8fcax59 = _dg3dObj['createCube'](_dg3dObj, _0x8fcax58);
    var _0x8fcax5a = _dg3dObj['mergeModel'](_dg3dObj, '+', _0x8fcax57, _0x8fcax59);
    var _0x8fcax5b = {
        show: true,
        uuid: '',
        name: '',
        objType: 'cube',
        length: _0x8fcax5['size']['length'],
        width: _0x8fcax5['size']['thick'],
        height: _0x8fcax5['size']['height'],
        x: 0,
        y: -(_0x8fcax5['size']['height'] / 2 - _0x8fcax5['size']['thick'] / 2),
        z: (_0x8fcax5['size']['width'] / 2 - _0x8fcax5['size']['thick'] / 2) + 1,
        style: {
            skinColor: _0x8fcax5['skin']['skinColor'],
            skin: _0x8fcax5['skin']['skin_right']['skin']
        }
    };
    var _0x8fcax5c = _dg3dObj['createCube'](_dg3dObj, _0x8fcax5b);
    _0x8fcax5a = _dg3dObj['mergeModel'](_dg3dObj, '+', _0x8fcax5a, _0x8fcax5c);
    var _0x8fcax5d = {
        show: true,
        uuid: '',
        name: '',
        objType: 'cube',
        length: _0x8fcax5['size']['thick'],
        width: _0x8fcax5['size']['width'],
        height: _0x8fcax5['size']['height'],
        x: (_0x8fcax5['size']['length'] / 2 - _0x8fcax5['size']['thick'] / 2) + 1,
        y: -(_0x8fcax5['size']['height'] / 2 - _0x8fcax5['size']['thick'] / 2),
        z: 0,
        style: {
            skinColor: _0x8fcax5['skin']['skinColor'],
            skin: _0x8fcax5['skin']['skin_behind']['skin']
        }
    };
    var _0x8fcax5e = _dg3dObj['createCube'](_dg3dObj, _0x8fcax5d);
    _0x8fcax5a = _dg3dObj['mergeModel'](_dg3dObj, '+', _0x8fcax5a, _0x8fcax5e);
    var _0x8fcax5f = {
        show: true,
        uuid: '',
        name: '',
        objType: 'cube',
        length: _0x8fcax5['size']['length'] + 1,
        width: _0x8fcax5['size']['width'],
        height: _0x8fcax5['size']['thick'],
        x: -1,
        y: -(_0x8fcax5['size']['height'] - _0x8fcax5['size']['thick']) - 1,
        z: 0,
        style: {
            skinColor: _0x8fcax5['skin']['skinColor'],
            skin: _0x8fcax5['skin']['skin_down']['skin']
        }
    };
    var _0x8fcax60 = _dg3dObj['createCube'](_dg3dObj, _0x8fcax5f);
    _0x8fcax5a = _dg3dObj['mergeModel'](_dg3dObj, '+', _0x8fcax5a, _0x8fcax60);
    var _0x8fcax61 = new THREE.Object3D();
    _0x8fcax61['add'](_0x8fcax5a);
    _0x8fcax61['name'] = _0x8fcax5['name'];
    _0x8fcax61['uuid'] = _0x8fcax5['uuid'];
    _0x8fcax5a['name'] = _0x8fcax5['shellname'],
        _dg3dObj['objects']['push'](_0x8fcax5a);
    _0x8fcax61['position'] = _0x8fcax5a['position'];
    if (_0x8fcax5['doors'] != null && typeof(_0x8fcax5['doors']) != 'undefined') {
        var _0x8fcax62 = _0x8fcax5['doors'];
        if (_0x8fcax62['skins']['length'] == 1) {
            var _0x8fcax63 = {
                show: true,
                uuid: '',
                name: _0x8fcax5['doors']['doorname'][0],
                objType: 'cube',
                length: _0x8fcax5['size']['thick'],
                width: _0x8fcax5['size']['width'],
                height: _0x8fcax5['size']['height'],
                x: _0x8fcax5['position']['x'] - _0x8fcax5['size']['length'] / 2 - _0x8fcax5['size']['thick'] / 2,
                y: _0x8fcax5['position']['y'],
                z: _0x8fcax5['position']['z'],
                style: {
                    skinColor: _0x8fcax5['doors']['skins'][0]['skinColor'],
                    skin: _0x8fcax5['doors']['skins'][0]
                }
            };

            var _0x8fcax64 = _dg3dObj['createCube'](_dg3dObj, _0x8fcax63);
            _dg3dObj['objects']['push'](_0x8fcax64);
            _0x8fcax61['add'](_0x8fcax64)

        } else {
            if (_0x8fcax62['skins']['length'] > 1) {
                //front door
                var _0x8fcax63 = {
                    show: true,
                    uuid: '',
                    name: _0x8fcax5['doors']['doorname'][0],
                    objType: 'cube',
                    length: _0x8fcax5['size']['thick'],
                    width: _0x8fcax5['size']['width'],
                    height: _0x8fcax5['size']['height'],
                    x: _0x8fcax5['position']['x'] - _0x8fcax5['size']['length'] / 2 - _0x8fcax5['size']['thick'] / 2,
                    y: _0x8fcax5['position']['y'],
                    z: _0x8fcax5['position']['z'],
                    style: {
                        skinColor: _0x8fcax5['doors']['skins'][0]['skinColor'],
                        skin: _0x8fcax5['doors']['skins'][0]
                    }
                };

                var _0x8fcax64 = _dg3dObj['createCube'](_dg3dObj, _0x8fcax63);
                _dg3dObj['objects']['push'](_0x8fcax64);
                _0x8fcax61['add'](_0x8fcax64);

                //back door
                _0x8fcax63 = {
                    show: true,
                    uuid: '',
                    name: _0x8fcax5['doors']['doorname'][1],
                    objType: 'cube',
                    length: _0x8fcax5['size']['thick'],
                    width: _0x8fcax5['size']['width'],
                    height: _0x8fcax5['size']['height'],
                    x: _0x8fcax5['position']['x'] + _0x8fcax5['size']['length'] / 2 + _0x8fcax5['size']['thick'] / 2+5,
                    y: _0x8fcax5['position']['y'],
                    z: _0x8fcax5['position']['z'],
                    style: {
                        skinColor: _0x8fcax5['doors']['skins'][1]['skinColor'],
                        skin: _0x8fcax5['doors']['skins'][1]
                    }
                };

                console.log('_0x8fcax61',_0x8fcax61);
                _0x8fcax64 = _dg3dObj['createCube'](_dg3dObj, _0x8fcax63);
                _dg3dObj['objects']['push'](_0x8fcax64);
                _0x8fcax61['add'](_0x8fcax64);
            }
        }
    };
    if (_0x8fcax5['rotation'] != null && typeof(_0x8fcax5['rotation']) != 'undefined' && _0x8fcax5['rotation']['length'] > 0) {
        $['each'](_0x8fcax5['rotation'], function (_0x8fcax4, _0x8fcax50) {
            switch (_0x8fcax50['direction']) {
                case 'x':
                    _0x8fcax61['rotateX'](_0x8fcax50['degree']);
                    break;
                case 'y':
                    _0x8fcax61['rotateY'](_0x8fcax50['degree']);
                    break;
                case 'z':
                    _0x8fcax61['rotateZ'](_0x8fcax50['degree']);
                    break;
                case 'arb':
                    _0x8fcax61['rotateOnAxis'](new THREE.Vector3(_0x8fcax50['degree'][0], _0x8fcax50['degree'][1], _0x8fcax50['degree'][2]), _0x8fcax50['degree'][3]);
                    break
            }
        })
    };
    _dg3dObj['commonFunc']['drawCabinetCard'](_0x8fcax61.children[1],{
        position:{x:-2,y:80,z:0},rotation:[{direction:'y',degree:Math.PI/2}],texts:[
            {text:'F-1',size:24,bold:true}
        ]
    });
    return _0x8fcax61
};
Digital3D['prototype']['createGlasses'] = function (_dg3dObj, _0x8fcax5) {
    var _dg3dObj = msj3DObj;
    var _0x8fcax65 = _dg3dObj['createPlaneGeometry'](_dg3dObj, _0x8fcax5);
    _dg3dObj['addObject'](_0x8fcax65);
    _0x8fcax5['rotation']['y'] = Math['PI'] + _0x8fcax5['rotation']['y'];
    var _0x8fcax66 = _dg3dObj['createPlaneGeometry'](_dg3dObj, _0x8fcax5);
    _dg3dObj['addObject'](_0x8fcax66)
};
Digital3D['prototype']['createSkin'] = function (_0x8fcax67, _0x8fcax68, _0x8fcax5) {
    var _0x8fcax69 = 128,
        _0x8fcax6a = 128;
    if (_0x8fcax5['width'] != null && typeof(_0x8fcax5['width']) != 'undefined') {
        _0x8fcax69 = _0x8fcax5['width']
    };
    if (_0x8fcax5['height'] != null && typeof(_0x8fcax5['height']) != 'undefined') {
        _0x8fcax6a = _0x8fcax5['height']
    };
    var _0x8fcax53 = new THREE.TextureLoader()['load'](_0x8fcax5['imgurl']);
    var _0x8fcax6b = false;
    if (_0x8fcax5['repeatx'] != null && typeof(_0x8fcax5['repeatx']) != 'undefined' && _0x8fcax5['repeatx'] == true) {
        _0x8fcax53['wrapS'] = THREE['RepeatWrapping'];
        _0x8fcax6b = true
    };
    if (_0x8fcax5['repeaty'] != null && typeof(_0x8fcax5['repeaty']) != 'undefined' && _0x8fcax5['repeaty'] == true) {
        _0x8fcax53['wrapT'] = THREE['RepeatWrapping'];
        _0x8fcax6b = true
    };
    if (_0x8fcax6b) {
        _0x8fcax53['repeat']['set'](_0x8fcax67 / _0x8fcax6a, _0x8fcax68 / _0x8fcax6a)
    };
    return _0x8fcax53
};
Digital3D['prototype']['createSkinOptionOnj'] = function (_dg3dObj, _0x8fcax67, _0x8fcax68, _0x8fcax5, _0x8fcax1f, _0x8fcax6c) {
    if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax5)) {
        if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax5['imgurl'])) {
            return {
                map: _dg3dObj['createSkin'](_0x8fcax67, _0x8fcax68, _0x8fcax5),
                transparent: false
            }
        } else {
            if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax5['skinColor'])) {
                _0x8fcax1f['faces'][_0x8fcax6c]['color']['setHex'](_0x8fcax5['skinColor']);
                _0x8fcax1f['faces'][_0x8fcax6c + 1]['color']['setHex'](_0x8fcax5['skinColor'])
            };
            return {
                vertexColors: THREE['FaceColors']
            }
        }
    } else {
        return {
            vertexColors: THREE['FaceColors']
        }
    }
};
Digital3D['prototype']['commonFunc'] = {
    drawQRCode:function(parentMesh,code)
    {
        var image= new Image();
        image.onload=function () {
            var drawingCanvas = document.createElement('canvas');
            var drawingContext = drawingCanvas.getContext('2d');
            drawingCanvas.width = image.width;
            drawingCanvas.height = image.height;
            drawingContext.drawImage(this, 0, 0, image.width, image.width);

            var material = new THREE.MeshBasicMaterial();
            var texture = new THREE.Texture(drawingCanvas);
            texture.needsUpdate = true;
            material.map = texture;
            //material.opacity=.5;
            //material.transparent=true;

            mesh = new THREE.Mesh(new THREE.BoxGeometry(drawingCanvas.width, drawingCanvas.height, 1), material);
            mesh.position.y = code.position.y-8;
            mesh.position.x = code.position.x-1;
            mesh.position.z = code.position.z+8;
            mesh.scale.set(0.02, 0.02, 0.01);

            if (code.rotation != null && typeof(code['rotation']) != 'undefined' && code.rotation.length > 0) {
                for (var r = 0; r < code.rotation.length; r++) {
                    mesh.rotation[code.rotation[r].direction] = code.rotation[r].degree;
                }
            }
            //console.log('mesh',mesh);

            parentMesh.add(mesh);

        }
        image.src=code.qrcode.imageUrl;
    },
    drawCabinetCard:function(parentMesh,card)
    {
        var card=card;
        var image= new Image();
        image.onload=function () {
            var drawingCanvas = document.createElement('canvas');
            var drawingContext = drawingCanvas.getContext('2d');
            drawingCanvas.width = image.width;
            drawingCanvas.height = image.height;
            drawingContext.drawImage(this, 0, 0, image.width, image.width);

            drawingContext.textAlign = 'center';
            drawingContext.textBaseline = 'middle';
            drawingContext.fillStyle = 'rgba(33,136,104,1)';
            var offX = 128;
            var offY = 90;

            for (var text = 0; text < card.texts.length; text++) {
                drawingContext.font = (card.texts[text].bold ? 'Bold ' : '') + card.texts[text].size + 'px serif';
                var textMeasure = drawingContext.measureText(card.texts[text].text);
                //console.log(textMeasure);
                drawingContext.fillText(card.texts[text].text, offX, offY + text * 40);
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
            mesh.scale.set(0.1, 0.1, 0.5);

            if (card.rotation != null && typeof(card['rotation']) != 'undefined' && card.rotation.length > 0) {
                for (var r = 0; r < card.rotation.length; r++) {
                    mesh.rotation[card.rotation[r].direction] = card.rotation[r].degree;
                }
            }
            //console.log('mesh',mesh);

            parentMesh.add(mesh);

        }
        image.src='./res/cabinet_card_2.png';
    },
    hasObj: function (_0x8fcax5) {
        if (_0x8fcax5 != null && typeof(_0x8fcax5) != 'undefined') {
            return true
        } else {
            return false
        }
    },
    findObject: function (_0x8fcax9) {
        var _dg3dObj = msj3DObj;
        //console['log']('findObject');
        var _0x8fcax6d = null;
        $['each'](_dg3dObj['objects'], function (_0x8fcax4, _0x8fcax5) {
            if (_0x8fcax5['name'] != null && _0x8fcax5['name'] != '') {
                if (_0x8fcax5['name'] == _0x8fcax9) {
                    _0x8fcax6d = _0x8fcax5;
                    return _0x8fcax6d
                }
            }
        });
        return _0x8fcax6d
    },
    cloneObj: function (_0x8fcax9, _0x8fcax6e) {

        var _dg3dObj = msj3DObj;
        var _0x8fcax6f = _dg3dObj['commonFunc']['findObject'](_0x8fcax9);
        //_0x8fcax6f.visible=false;
        //console.log('_0x8fcax6f',_0x8fcax6f);
        var _0x8fcax70 = _0x8fcax6f['clone']();

        if (_0x8fcax70['children'] != null && _0x8fcax70['children']['length'] > 1) {
            $['each'](_0x8fcax70['children'], function (_0x8fcax4, _0x8fcax71) {
                _0x8fcax71['name'] = _0x8fcax6e['childrenname'][_0x8fcax4];
                _dg3dObj['objects']['push'](_0x8fcax71)
            })
        };
        //add by rock
        if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax6e['card'])) {
            //console.log(_0x8fcax6e['card']);
            _dg3dObj['commonFunc']['drawCabinetCard'](_0x8fcax70.children[1],_0x8fcax6e['card']);

            if (_0x8fcax6e['card'].qrcode!=null&&typeof(_0x8fcax6e['card']).qrcode!='undefined') {
                _dg3dObj['commonFunc']['drawQRCode'](_0x8fcax70.children[1],_0x8fcax6e['card']);
            }
        };
        if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax6e['position'])) {
            _0x8fcax70['position']['x'] = _0x8fcax6e['position']['x'];
            _0x8fcax70['position']['y'] = _0x8fcax6e['position']['y'];
            _0x8fcax70['position']['z'] = _0x8fcax6e['position']['z']
        };
        if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax6e['scale'])) {
            _0x8fcax70['scale']['x'] = _0x8fcax6e['scale']['x'];
            _0x8fcax70['scale']['y'] = _0x8fcax6e['scale']['y'];
            _0x8fcax70['scale']['z'] = _0x8fcax6e['scale']['z']
        };
        if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax6e['rotation'])) {
            $['each'](_0x8fcax6e['rotation'], function (_0x8fcax4, _0x8fcax50) {
                switch (_0x8fcax50['direction']) {
                    case 'x':
                        _0x8fcax70['rotateX'](_0x8fcax50['degree']);
                        break;
                    case 'y':
                        _0x8fcax70['rotateY'](_0x8fcax50['degree']);
                        break;
                    case 'z':
                        _0x8fcax70['rotateZ'](_0x8fcax50['degree']);
                        break;
                    case 'arb':
                        _0x8fcax70['rotateOnAxis'](new THREE.Vector3(_0x8fcax50['degree'][0], _0x8fcax50['degree'][1], _0x8fcax50['degree'][2]), _0x8fcax50['degree'][3]);
                        break
                }
            })
        };
        _0x8fcax70['name'] = _0x8fcax6e['name'];
        _0x8fcax70['uuid'] = _0x8fcax6e['uuid'];
        //console.log('_0x8fcax70',_0x8fcax70);
        return _0x8fcax70
    },
    setSkinColor: function (_0x8fcax9, _0x8fcax72) {
        var _dg3dObj = msj3DObj;
        var _0x8fcax5 = _dg3dObj['commonFunc']['findObject'](_0x8fcax9);
        if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax5['material']['emissive'])) {
            alert(73);
            _0x8fcax5['material']['emissive']['setHex'](_0x8fcax72);
            alert(2)
        } else {
            if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax5['material']['materials'])) {
                if (_0x8fcax5['material']['materials']['length'] > 0) {
                    $['each'](_0x8fcax5['material']['materials'], function (_0x8fcax4, _0x8fcax71) {
                        _0x8fcax71['emissive']['setHex'](_0x8fcax72)
                    })
                }
            } else {
                if (_0x8fcax5['material']['length'] > 0) {
                    $['each'](_0x8fcax5['material'], function (_0x8fcax4, _0x8fcax71) {
                        _0x8fcax71['emissive']['setHex'](_0x8fcax72)
                    })
                } else {
                    if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax5['children'])) {
                        var _0x8fcax73 = _0x8fcax5['children'][0];
                        $['each'](_0x8fcax73['material'], function (_0x8fcax4, _0x8fcax71) {
                            _0x8fcax71['emissive']['setHex'](_0x8fcax72)
                        })
                    }
                }
            }
        }
    },
    addIdentification: function (_0x8fcax9, _0x8fcax5) {
        var _dg3dObj = msj3DObj;
        var _0x8fcax34 = _dg3dObj['commonFunc']['findObject'](_0x8fcax9);
        var _0x8fcax52 = new THREE.TextureLoader();
        var _0x8fcax53 = _0x8fcax52['load'](_0x8fcax5['imgurl'], function () {}, undefined, function () {});
        var _0x8fcax74 = new THREE.SpriteMaterial({
            map: _0x8fcax53,
            useScreenCoordinates: false
        });
        var _0x8fcax75 = new THREE.Sprite(_0x8fcax74);


        _0x8fcax75['name'] = _0x8fcax5['name'];
        _0x8fcax75['position']['x'] = _0x8fcax34['position']['x'] + _0x8fcax5['position']['x'];
        _0x8fcax75['position']['y'] = _0x8fcax34['position']['y'] + _0x8fcax5['position']['y'];
        _0x8fcax75['position']['z'] = _0x8fcax34['position']['z'] + _0x8fcax5['position']['z'];
        if (_dg3dObj['commonFunc']['hasObj'](_0x8fcax5['size'])) {
            _0x8fcax75['scale']['set'](_0x8fcax5['size']['x'], _0x8fcax5['size']['y'])
        } else {
            _0x8fcax75['scale']['set'](1, 1)
        };
        _dg3dObj['addObject'](_0x8fcax75)
    },
    makeTextSprite: function (_0x8fcax9, _0x8fcax76) {
        var _0x8fcax77 = 128;
        var _0x8fcax78 = _0x8fcax77 / 2;
        var _dg3dObj = msj3DObj;
        var _0x8fcax34 = _dg3dObj['commonFunc']['findObject'](_0x8fcax9);
        console.log('_0x8fcax9',_0x8fcax9)
        console.log('_0x8fcax34',_0x8fcax34);
        if (_0x8fcax76 === undefined || _0x8fcax76 === null) {
            _0x8fcax76 = {}
        };
        var _0x8fcax79 = _0x8fcax76['hasOwnProperty']('fontface') ? _0x8fcax76['fontface'] : 'Arial';
        var _0x8fcax7a = _0x8fcax76['hasOwnProperty']('fontsize') ? _0x8fcax76['fontsize'] : 18;
        var _0x8fcax7b = _0x8fcax76['hasOwnProperty']('borderThickness') ? _0x8fcax76['borderThickness'] : 4;
        var _0x8fcax7c = _0x8fcax76['hasOwnProperty']('textColor') ? _0x8fcax76['textColor'] : {
            r: 255,
            g: 255,
            b: 255,
            a: 1.0
        };
        var _0x8fcax7d = _0x8fcax76['hasOwnProperty']('message') ? _0x8fcax76['message'] : '';
        var _0x8fcax7e = _0x8fcax76['hasOwnProperty']('position') ? _0x8fcax76['position']['x'] : 10;
        var _0x8fcax7f = _0x8fcax76['hasOwnProperty']('position') ? _0x8fcax76['position']['y'] : 80;
        var _0x8fcax80 = _0x8fcax76['hasOwnProperty']('position') ? _0x8fcax76['position']['z'] : 0;
        var _0x8fcax81 = document['createElement']('canvas');
        _0x8fcax81['width'] = _0x8fcax77;
        _0x8fcax81['height'] = _0x8fcax78;
        var _0x8fcax82 = _0x8fcax81['getContext']('2d');
        vcanvas = _0x8fcax81;
        vcontext = _0x8fcax82;
        _0x8fcax82['fillStyle'] = 'rgb(255,127,39)';
        _0x8fcax82['fillRect'](0, 0, _0x8fcax77, _0x8fcax7a * 3 + _0x8fcax7b);
        _0x8fcax82['fillStyle'] = 'black';
        _0x8fcax82['textAlign'] = 'center';
        _0x8fcax82['textBaseline'] = 'middle';
        _0x8fcax82['font'] = 'bold ' + _0x8fcax7a + 'px ' + _0x8fcax79;
        _0x8fcax82['lineWidth'] = _0x8fcax7b;
        _0x8fcax82['fillStyle'] = 'rgba(' + _0x8fcax7c['r'] + ', ' + _0x8fcax7c['g'] + ', ' + _0x8fcax7c['b'] + ', 1.0)';
        _0x8fcax82['fillText'](_0x8fcax7d, _0x8fcax77 / 2, _0x8fcax7a + _0x8fcax7b);
       // _0x8fcax82['fillText'](_0x8fcax7d, _0x8fcax77 / 2, _0x8fcax7a + _0x8fcax7b + _0x8fcax7a);
        var _0x8fcax83 = _0x8fcax82['measureText'](_0x8fcax7d);
        var _0x8fcax84 = _0x8fcax83['width'];
        var _0x8fcax53 = new THREE.Texture(_0x8fcax81);
        _0x8fcax53['needsUpdate'] = true;
        var _0x8fcax74 = new THREE.SpriteMaterial({
            map: _0x8fcax53,
            useScreenCoordinates: false
        });
        var _0x8fcax75 = new THREE.Sprite(_0x8fcax74);
        _0x8fcax75['position']['x'] = _0x8fcax34['position']['x'] + _0x8fcax7e;
        _0x8fcax75['position']['y'] = _0x8fcax34['position']['y'] + _0x8fcax7f;
        _0x8fcax75['position']['z'] = _0x8fcax34['position']['z'] + _0x8fcax80;
        _0x8fcax75['name'] = _0x8fcax76['name'];
        _0x8fcax75['scale']['set'](5 * _0x8fcax7a, 3.0 * _0x8fcax7a, 1.0);
        _dg3dObj['addObject'](_0x8fcax75)
    },
    makeDynamicTextSprite: function (_0x8fcax9, _0x8fcax76) {
        var _dg3dObj = msj3DObj;
        var _0x8fcax85 = 0;
        var _0x8fcax86 = 0;
        var _0x8fcax87 = 0;
        var _0x8fcax34 = _dg3dObj['commonFunc']['findObject'](_0x8fcax9);
        if (_0x8fcax34 != undefined && _0x8fcax34 != null) {
            _0x8fcax85 = _0x8fcax34['position']['x'];
            _0x8fcax86 = _0x8fcax34['position']['y'];
            _0x8fcax87 = _0x8fcax34['position']['z']
        };
        if (_0x8fcax76 === undefined || _0x8fcax76 === null) {
            _0x8fcax76 = {}
        };
        var _0x8fcax88 = _0x8fcax76['hasOwnProperty']('name') ? _0x8fcax76['name'] : 'mark';
        var _0x8fcax89 = _0x8fcax76['hasOwnProperty']('color') ? _0x8fcax76['color'] : {
            r: 255,
            g: 255,
            b: 255,
            a: 1.0
        };
        var _0x8fcax8a = _0x8fcax76['hasOwnProperty']('imgurl') ? _0x8fcax76['imgurl'] : 'res/floor2.jpg';
        var _0x8fcax7e = _0x8fcax76['hasOwnProperty']('position') ? _0x8fcax76['position']['x'] : 10;
        var _0x8fcax7f = _0x8fcax76['hasOwnProperty']('position') ? _0x8fcax76['position']['y'] : 80;
        var _0x8fcax80 = _0x8fcax76['hasOwnProperty']('position') ? _0x8fcax76['position']['z'] : 0;
        var _0x8fcax77 = _0x8fcax76['hasOwnProperty']('size') ? _0x8fcax76['size']['x'] : 128;
        var _0x8fcax78 = _0x8fcax76['hasOwnProperty']('size') ? _0x8fcax76['size']['y'] : 64;
        var _0x8fcax13 = _0x8fcax76['hasOwnProperty']('size') ? _0x8fcax76['size']['z'] : 18;
        var _0x8fcax81 = document['createElement']('canvas');
        _0x8fcax81['width'] = _0x8fcax77;
        _0x8fcax81['height'] = _0x8fcax78;
        var _0x8fcax82 = _0x8fcax81['getContext']('2d');
        var _0x8fcax8b = new Image();

        if (_0x8fcax8a != undefined && _0x8fcax8a != null && _0x8fcax8a != '') {
            _0x8fcax8b['src'] = _0x8fcax8a;
            _0x8fcax8b['onload'] = function () {
                _0x8fcax82['drawImage'](_0x8fcax8b, 0, 0, _0x8fcax77, _0x8fcax78)
            }
        } else {
            _0x8fcax82['fillStyle'] = 'rgba(' + _0x8fcax89['r'] + ', ' + _0x8fcax89['g'] + ', ' + _0x8fcax89['b'] + ', ' + _0x8fcax89['a'] + ' )';
            _0x8fcax82['fillRect'](0, 0, _0x8fcax77, _0x8fcax78)
        };
        if (_0x8fcax76['rows'] != null && _0x8fcax76['rows']['length'] > 0) {
            $['each'](_0x8fcax76['rows'], function (_0x8fcax4, _0x8fcax5) {
                var _0x8fcax7a = _0x8fcax5['fontsize'];
                var _0x8fcax79 = _0x8fcax5['fontface'];
                var _0x8fcax7b = _0x8fcax5['borderThickness'];
                var _0x8fcax7d = _0x8fcax5['text'];
                var _0x8fcax7c = _0x8fcax5['textColor'];
                var _0x8fcax8c = _0x8fcax5['position']['x'];
                var _0x8fcax8d = _0x8fcax5['position']['y'];
                var _0x8fcax8e = _0x8fcax5['position']['z'];
                _0x8fcax82['textAlign'] = 'left';
                _0x8fcax82['textBaseline'] = 'middle';
                _0x8fcax82['font'] = 'bold ' + _0x8fcax7a + 'px ' + _0x8fcax79;
                _0x8fcax82['lineWidth'] = _0x8fcax7b;
                _0x8fcax82['fillStyle'] = 'rgba(' + _0x8fcax7c['r'] + ', ' + _0x8fcax7c['g'] + ', ' + _0x8fcax7c['b'] + ', 1.0)';
                _0x8fcax82['fillText'](_0x8fcax7d, _0x8fcax8c, _0x8fcax8d)
            })
        };
        var _0x8fcax53 = new THREE.Texture(_0x8fcax81);
        _0x8fcax53['needsUpdate'] = true;
        var _0x8fcax74 = new THREE.SpriteMaterial({
            map: _0x8fcax53
        });
        var _0x8fcax75 = new THREE.Sprite(_0x8fcax74);
        _0x8fcax75['position']['x'] = _0x8fcax85 + _0x8fcax7e;
        _0x8fcax75['position']['y'] = _0x8fcax86 + _0x8fcax7f;
        _0x8fcax75['position']['z'] = _0x8fcax87 + _0x8fcax80;
        _0x8fcax75['name'] = _0x8fcax76['name'];
        _0x8fcax75['scale']['set'](1.0 * _0x8fcax13, _0x8fcax78 / _0x8fcax77 * _0x8fcax13, 1.0);
        _dg3dObj['addObject'](_0x8fcax75);
        _dg3dObj['vcanvas'] = _0x8fcax81;
        _dg3dObj['vspriteMaterial'] = _0x8fcax74;
        _dg3dObj['mtTimer'] = setInterval(function () {
            _dg3dObj['commonFunc']['makeItemValue']('', 'item2', _0x8fcax76)
        }, 1000);
        return null
    },
    makeItemValue: function (_0x8fcax8f, _0x8fcax90, _0x8fcax91) {
        var _dg3dObj = msj3DObj;
        var _0x8fcax81 = _dg3dObj['vcanvas'];
        if (_0x8fcax81 != null && typeof(_0x8fcax81) != 'undefined') {
            var _0x8fcax82 = _0x8fcax81['getContext']('2d');
            var _0x8fcax77 = _0x8fcax81['width'];
            var _0x8fcax78 = _0x8fcax81['height'];
            var _0x8fcax89 = _0x8fcax91['color'];
            var _0x8fcax8a = _0x8fcax91['imgurl'];
            var _0x8fcax8b = new Image();
            if (_0x8fcax8a != undefined && _0x8fcax8a != null && _0x8fcax8a != '') {
                _0x8fcax8b['src'] = _0x8fcax8a;
                _0x8fcax82['drawImage'](_0x8fcax8b, 0, 0, _0x8fcax77, _0x8fcax78)
            } else {
                _0x8fcax82['clearRect'](0, 0, _0x8fcax77, _0x8fcax78);
                _0x8fcax82['fillStyle'] = 'rgba(' + _0x8fcax89['r'] + ', ' + _0x8fcax89['g'] + ', ' + _0x8fcax89['b'] + ', ' + _0x8fcax89['a'] + ' )';
                _0x8fcax82['fillRect'](0, 0, _0x8fcax77, _0x8fcax78)
            };
            var _0x8fcax92 = new Date();
            var _0x8fcax93 = _0x8fcax92['getMilliseconds']().toString() + _0x8fcax92['getSeconds']().toString();
            if (_0x8fcax91['rows'] != null && _0x8fcax91['rows']['length'] > 0) {
                $['each'](_0x8fcax91['rows'], function (_0x8fcax4, _0x8fcax5) {
                    var _0x8fcax7a = _0x8fcax5['fontsize'];
                    var _0x8fcax79 = _0x8fcax5['fontface'];
                    var _0x8fcax7b = _0x8fcax5['borderThickness'];
                    var _0x8fcax7d = _0x8fcax5['text'];
                    if (_0x8fcax5['name'] == _0x8fcax90) {
                        _0x8fcax7d = _0x8fcax93
                    };
                    var _0x8fcax7c = _0x8fcax5['textColor'];
                    var _0x8fcax8c = _0x8fcax5['position']['x'];
                    var _0x8fcax8d = _0x8fcax5['position']['y'];
                    var _0x8fcax8e = _0x8fcax5['position']['z'];
                    _0x8fcax82['textAlign'] = 'left';
                    _0x8fcax82['textBaseline'] = 'middle';
                    _0x8fcax82['font'] = 'bold ' + _0x8fcax7a + 'px ' + _0x8fcax79;
                    _0x8fcax82['lineWidth'] = _0x8fcax7b;
                    _0x8fcax82['fillStyle'] = 'rgba(' + _0x8fcax7c['r'] + ', ' + _0x8fcax7c['g'] + ', ' + _0x8fcax7c['b'] + ', 1.0)';
                    _0x8fcax82['fillText'](_0x8fcax7d, _0x8fcax8c, _0x8fcax8d)
                })
            };
            _dg3dObj['vspriteMaterial']['map']['needsUpdate'] = true
        }
    }
};
Digital3D['prototype']['loadObj'] = function (_0x8fcax5) {
    var _dg3dObj = msj3DObj;
    var _0x8fcax94 = new THREE.ObjectLoader();
    _0x8fcax94['load'](_0x8fcax5['modelurl'], function (_0x8fcax71) {
        _0x8fcax71['name'] = _0x8fcax5['name'];
        _0x8fcax71['scale']['x'] = _0x8fcax5['size']['x'];
        _0x8fcax71['scale']['y'] = _0x8fcax5['size']['y'];
        _0x8fcax71['scale']['z'] = _0x8fcax5['size']['z'];
        _0x8fcax71['position']['x'] = _0x8fcax5['position']['x'];
        _0x8fcax71['position']['y'] = _0x8fcax5['position']['y'];
        _0x8fcax71['position']['z'] = _0x8fcax5['position']['z'];
        _dg3dObj['addObject'](_0x8fcax71)
    })
};
Digital3D['prototype']['addBtns'] = function (_0x8fcax95) {
    var _dg3dObj = msj3DObj;
    var _0x8fcax96 = $('#' + _dg3dObj['fId']);
    var _0x8fcax97 = document['createElement']('div');
    _0x8fcax97['style']['position'] = 'absolute';
    _0x8fcax97['style']['top'] = '10px';
    _0x8fcax97['style']['right'] = '20px';
    _0x8fcax97['style']['width'] = '60%';
    _0x8fcax97['style']['textAlign'] = 'right';
    _0x8fcax97['style']['zIndex'] = 100;
    _0x8fcax97['id'] = 'menutoolbar';
    if (_0x8fcax95 != null && _0x8fcax95['length'] > 0) {
        _0x8fcax96['append'](_0x8fcax97);
        $['each'](_0x8fcax95, function (_0x8fcax4, _0x8fcax5) {
            $('#menutoolbar')['append'](' <img style="width: 60px;" src="' + _0x8fcax5['btnimg'] + '" title="' + _0x8fcax5['btnTitle'] + '" id="' + _0x8fcax5['btnid'] + '" />');
            $('#' + _0x8fcax5['btnid'])['on']('click', _0x8fcax5['event'])
        })
    }
};
var dbclick = 0;
var vclickevent = '';
Digital3D['prototype']['onDocumentMouseDown'] = function (_0x8fcax9a) {
    dbclick++;
    var _dg3dObj = msj3DObj;
    setTimeout(function () {
        if (dbclick >= 2) {
            vclickevent = 'dbclick'
        } else {
            if (dbclick == 1) {
                vclickevent = 'click'
            } else {
                vclickevent = ''
            }
        };
        dbclick = 0;
        _dg3dObj['onEventDeal'](vclickevent, _0x8fcax9a)
    }, 500);
    _0x8fcax9a['preventDefault']()
};
Digital3D['prototype']['onDocumentMouseMove'] = function (_0x8fcax9a) {
    _0x8fcax9a['preventDefault']();
    var _dg3dObj = msj3DObj;
    _dg3dObj['mouseClick']['x'] = (_0x8fcax9a['clientX'] / _dg3dObj['width']) * 2 - 1;
    _dg3dObj['mouseClick']['y'] = -(_0x8fcax9a['clientY'] / _dg3dObj['height']) * 2 + 1;
    _dg3dObj['raycaster']['setFromCamera'](_dg3dObj['mouseClick'], _dg3dObj['camera'])
};
Digital3D['prototype']['onEventDeal'] = function (_0x8fcax9b, _0x8fcax9c) {
    var _dg3dObj = msj3DObj;
    var _0x8fcax9d = _0x8fcax9c;
    if (_0x8fcax9b == '') {
        return
    };
    _dg3dObj['raycaster']['setFromCamera'](_dg3dObj['mouseClick'], _dg3dObj['camera']);
    var _0x8fcax9e = _dg3dObj['raycaster']['intersectObjects'](_dg3dObj['objects']);

    if (_0x8fcax9e['length'] > 0) {
        _dg3dObj['controls']['enabled'] = false;
        _dg3dObj['SELECTED'] = _0x8fcax9e[0]['object'];
        //console.log("_dg3dObj['SELECTED']['name']",_dg3dObj['SELECTED']);
        if (_0x8fcax9b == 'dbclick') {
            if (_dg3dObj['eventList'] != null && _dg3dObj['eventList']['dbclick'] != null && _dg3dObj['eventList']['dbclick']['length'] > 0) {
                $['each'](_dg3dObj['eventList']['dbclick'], function (_0x8fcax4, _0x8fcax5) {
                    if ('string' == typeof(_0x8fcax5['obj_name'])) {
                        if (_0x8fcax5['obj_name'] == _dg3dObj['SELECTED']['name']) {
                            _0x8fcax5['obj_event'](_dg3dObj.SELECTED, _0x8fcax9d)
                        }
                    } else {
                        if (_0x8fcax5['findObject'] != null || 'function' == typeof(_0x8fcax5['findObject'])) {
                            if (_0x8fcax5['findObject'](_dg3dObj['SELECTED']['name'])) {
                                _0x8fcax5['obj_event'](_dg3dObj.SELECTED, _0x8fcax9d)
                            }
                        }
                    }
                })
            }
        } else {
            if (_0x8fcax9b == 'click') {
                if (_dg3dObj['eventList'] != null && _dg3dObj['eventList']['mouseDown'] != null && _dg3dObj['eventList']['mouseDown']['length'] > 0) {
                    $['each'](_dg3dObj['eventList']['mouseDown'], function (_0x8fcax4, _0x8fcax5) {
                        if ('string' == typeof(_0x8fcax5['obj_name'])) {
                            if (_0x8fcax5['obj_name'] == _dg3dObj['SELECTED']['name']) {
                                _0x8fcax5['obj_event'](_dg3dObj.SELECTED, _0x8fcax9d)
                            }
                        } else {
                            if (_0x8fcax5['findObject'] != null || 'function' == typeof(_0x8fcax5['findObject'])) {
                                if (_0x8fcax5['findObject'](_dg3dObj['SELECTED']['name'])) {
                                    _0x8fcax5['obj_event'](_dg3dObj.SELECTED, _0x8fcax9d)
                                }
                            }
                        }
                    })
                }
            }
        };
        _dg3dObj['controls']['enabled'] = true
    }
};
Digital3D['prototype']['addTunnel'] = function (_0x8fcax9f, _0x8fcaxa0) {
    var _dg3dObj = msj3DObj;
    var _0x8fcaxa1 = [];
    var _0x8fcaxa2;
    if (_0x8fcaxa0 != null && _0x8fcaxa0['length'] > 0) {
        $['each'](_0x8fcaxa0, function (_0x8fcax4, _0x8fcax5) {
            var _0x8fcaxa3 = new THREE.Vector3(0, 0, 0);
            _0x8fcaxa3['x'] = _0x8fcax5['x'];
            _0x8fcaxa3['y'] = _0x8fcax5['y'];
            _0x8fcaxa3['z'] = _0x8fcax5['z'];
            _0x8fcaxa1['push'](_0x8fcaxa3)
        })
    };
    if (_0x8fcax9f['type'] == null || typeof(_0x8fcax9f['type']) == 'undefined' || _0x8fcax9f['type'] == 'curve') {
        _0x8fcaxa2 = new THREE.CatmullRomCurve3(_0x8fcaxa1)
    } else {
        if (_0x8fcax9f['type'] == 'beeline') {
            function _0x8fcaxa4(_0x8fcaxa5) {
                THREE['Curve']['call'](this);
                this['scale'] = (_0x8fcaxa5 === undefined) ? 1 : _0x8fcaxa5
            }
            _0x8fcaxa4['prototype'] = Object['create'](THREE['Curve']['prototype']);
            _0x8fcaxa4['prototype']['constructor'] = _0x8fcaxa4;
            _0x8fcaxa4['prototype']['getPoint'] = function (_0x8fcax18) {
                var _0x8fcaxa6 = _0x8fcaxa1['length'] - 1;
                var _0x8fcaxa7 = 1 / _0x8fcaxa6;
                vindex = parseInt(_0x8fcax18 / _0x8fcaxa7);
                if (1 === _0x8fcax18) {
                    console['log'](_0x8fcax18 + '/' + _0x8fcaxa7 + ' = ' + vindex + ' ');
                    return _0x8fcaxa1[vindex]['clone']()
                };
                var _0x8fcaxa8 = new THREE.Vector3();
                _0x8fcaxa8['subVectors'](_0x8fcaxa1[vindex + 1], _0x8fcaxa1[vindex]);
                _0x8fcaxa8['multiplyScalar']((_0x8fcax18 - (_0x8fcaxa7 * vindex)) * _0x8fcaxa6);
                _0x8fcaxa8['add'](_0x8fcaxa1[vindex]);
                return _0x8fcaxa8
            };
            _0x8fcaxa2 = new _0x8fcaxa4(10)
        }
    };
    var _0x8fcaxa9 = new THREE.TextureLoader()['load'](_0x8fcax9f['imgurl']);
    _0x8fcaxa9['wrapS'] = _0x8fcaxa9['wrapT'] = THREE['RepeatWrapping'];
    _0x8fcaxa9['anisotropy'] = 16;
    var _0x8fcaxaa = new THREE.MeshLambertMaterial({
        map: _0x8fcaxa9,
        side: THREE['DoubleSide']
    });
    _dg3dObj['vcmaterial'] = _0x8fcaxaa;
    var _0x8fcaxab = new THREE.TubeGeometry(_0x8fcaxa2, 750, _0x8fcax9f['radiu'], 8, false);
    var _0x8fcaxac = new THREE.Mesh(_0x8fcaxab, _0x8fcaxaa);
    _0x8fcaxac['position']['set'](0, 0, 0);
    _0x8fcaxac['name'] = _0x8fcax9f['name'];
    _0x8fcaxac['visible'] = _0x8fcax9f['visible'];
    if (true == _0x8fcax9f['scene']) {
        _dg3dObj['addObject'](_0x8fcaxac)
    };
    return _0x8fcaxac
};
Digital3D['prototype']['addLine'] = function (_0x8fcax9f, _0x8fcaxa0) {
    var _dg3dObj = msj3DObj;
    var _0x8fcaxad = new THREE.Geometry();
    var _0x8fcaxae = [];
    if (_0x8fcaxa0 != null && _0x8fcaxa0['length'] > 0) {
        $['each'](_0x8fcaxa0, function (_0x8fcax4, _0x8fcax5) {
            var _0x8fcaxa3 = new THREE.Vector3(0, 0, 0);
            _0x8fcaxa3['x'] = _0x8fcax5['x'];
            _0x8fcaxa3['y'] = _0x8fcax5['y'];
            _0x8fcaxa3['z'] = _0x8fcax5['z'];
            _0x8fcaxad['vertices']['push'](_0x8fcaxa3);
            if ('gradient' == _0x8fcax9f['colortype']) {
                _0x8fcaxae[_0x8fcax4] = new THREE.Color(_0x8fcax9f['color']);
                _0x8fcaxae[_0x8fcax4]['setHSL'](_0x8fcax4 / _0x8fcaxa0['length'], 1.0, 0.5)
            }
        })
    };
    var _0x8fcaxaf = {
        color: _0x8fcax9f['color'],
        opacity: 1,
        linewidth: 1
    };
    if ('gradient' == _0x8fcax9f['colortype']) {
        _0x8fcaxad['colors'] = _0x8fcaxae;
        _0x8fcaxaf = {
            color: _0x8fcax9f['color'],
            opacity: 1,
            linewidth: 1,
            vertexColors: THREE['VertexColors']
        }
    };
    var _0x8fcaxaa = new THREE.LineBasicMaterial(_0x8fcaxaf);
    var _0x8fcaxb0, _0x8fcaxb1, _0x8fcaxa5 = 1.0,
        _0x8fcaxb2 = 225;
    _0x8fcaxb0 = new THREE.Line(_0x8fcaxad, _0x8fcaxaa);
    _0x8fcaxb0['scale']['x'] = _0x8fcaxb0['scale']['y'] = _0x8fcaxb0['scale']['z'] = _0x8fcaxa5 * 1.0;
    _0x8fcaxb0['position']['x'] = _0x8fcax9f['position']['x'];
    _0x8fcaxb0['position']['y'] = _0x8fcax9f['position']['y'];
    _0x8fcaxb0['position']['z'] = _0x8fcax9f['position']['z'];
    _0x8fcaxb0['name'] = _0x8fcax9f['name'];
    console['log'](_0x8fcaxb0['name']);
    _dg3dObj['addObject'](_0x8fcaxb0)
};
Digital3D['prototype']['addNurbs'] = function (_0x8fcax9f, _0x8fcaxa0) {
    var _dg3dObj = msj3DObj;
    var _0x8fcaxb3 = [];
    var _0x8fcax20 = 0,
        _0x8fcax21 = 0,
        _0x8fcax22 = 0;
    var _0x8fcaxb4 = 800,
        _0x8fcaxb5 = 40,
        _0x8fcaxb6 = 50;
    for (var _0x8fcaxb = 0; _0x8fcaxb < 3; _0x8fcaxb++) {
        var _0x8fcax14 = [new THREE.Vector4(_0x8fcax20 + (_0x8fcaxb * _0x8fcaxb4), _0x8fcax21 - 5 * _0x8fcaxb5, _0x8fcax22 + 3.5 * _0x8fcaxb6, 1), new THREE.Vector4(_0x8fcax20 + (_0x8fcaxb * _0x8fcaxb4), _0x8fcax21 - 2.8 * _0x8fcaxb5, _0x8fcax22 + 2.0 * _0x8fcaxb6, 1), new THREE.Vector4(_0x8fcax20 + (_0x8fcaxb * _0x8fcaxb4), _0x8fcax21 - 2.5 * _0x8fcaxb5, _0x8fcax22 + 0.0 * _0x8fcaxb6, 1), new THREE.Vector4(_0x8fcax20 + (_0x8fcaxb * _0x8fcaxb4), _0x8fcax21 - 0 * _0x8fcaxb5, _0x8fcax22 - 0.9 * _0x8fcaxb6, 1)];
        _0x8fcaxb3['push'](_0x8fcax14)
    };
    var _0x8fcaxb7 = 2;
    var _0x8fcaxb8 = 3;
    var _0x8fcaxb9 = [0, 0, 0, 1, 1, 1];
    var _0x8fcaxba = [0, 0, 0, 0, 1, 1, 1, 1];
    var _0x8fcaxbb = new THREE.NURBSSurface(_0x8fcaxb7, _0x8fcaxb8, _0x8fcaxb9, _0x8fcaxba, _0x8fcaxb3);
    var _0x8fcaxa9 = new THREE.TextureLoader()['load'](_0x8fcax9f['imgurl']);
    _0x8fcaxa9['wrapS'] = _0x8fcaxa9['wrapT'] = THREE['RepeatWrapping'];
    _0x8fcaxa9['anisotropy'] = 16;
    _0x8fcaxa9['repeat']['set'](16, 6);
    _0x8fcaxa9['needsUpdate'] = true;

    function _0x8fcaxbc(_0x8fcaxbd, _0x8fcaxbe) {
        return _0x8fcaxbb['getPoint'](_0x8fcaxbd, _0x8fcaxbe)
    }
    var _0x8fcaxab = new THREE.ParametricBufferGeometry(_0x8fcaxbc, 20, 20);
    _0x8fcaxab['computeVertexNormals']();
    _0x8fcaxab['normalizeNormals']();
    var _0x8fcaxbf = [];
    var _0x8fcaxc0 = [{
        r: 0,
        g: 0.5,
        b: 0.7
    },
        {
            r: 0.6,
            g: 1.0,
            b: 0.3
        },
        {
            r: 0.1,
            g: 0.9,
            b: 0.1
        }];
    for (var _0x8fcaxb = 0; _0x8fcaxb < _0x8fcaxab['attributes']['normal']['array']['length']; _0x8fcaxb++) {
        var _0x8fcaxc1 = _0x8fcaxc0[_0x8fcaxb % 3];
        if (_0x8fcaxc1 == undefined) {
            console['log']('ERROR: ' + colorValue)
        } else {
            _0x8fcaxbf[3 * _0x8fcaxb] = _0x8fcaxc1['r'];
            _0x8fcaxbf[3 * _0x8fcaxb + 1] = _0x8fcaxc1['g'];
            _0x8fcaxbf[3 * _0x8fcaxb + 2] = _0x8fcaxc1['b']
        }
    };
    _0x8fcaxab['addAttribute']('color', new THREE.BufferAttribute(new Float32Array(_0x8fcaxbf), 3));
    var _0x8fcaxaa = new THREE.MeshLambertMaterial({
        map: _0x8fcaxa9,
        side: THREE['DoubleSide'],
        opacity: 0.8,
        overdraw: true,
        transparent: true,
        vertexColors: THREE['VertexColors']
    });
    var _0x8fcaxc2 = new THREE.Mesh(_0x8fcaxab, _0x8fcaxaa);
    _0x8fcaxc2['position']['set'](_0x8fcax9f['position']['x'], _0x8fcax9f['position']['y'], _0x8fcax9f['position']['z']);
    //_0x8fcaxc2['rotation']['y'] = -Math.PI/2;
    _0x8fcaxc2['rotation']['x'] =3* Math.PI/4;
    _0x8fcaxc2['name'] = _0x8fcax9f['name'];
    _0x8fcaxc2['scale']['multiplyScalar'](1);
    _dg3dObj['nurbsmaterial'] = _0x8fcaxaa;
    _dg3dObj['addObject'](_0x8fcaxc2)
};
Digital3D['prototype']['addSprite'] = function (_0x8fcax9f) {
    var _dg3dObj = msj3DObj;
    var _0x8fcaxc3;
    var _0x8fcax13 = _0x8fcax9f['position']['w'];
    var _0x8fcaxc4 = new THREE.TextureLoader()['load'](_0x8fcax9f['imgurl']);
    var _0x8fcaxaa = new THREE.SpriteMaterial({
        map: _0x8fcaxc4,
        color: _0x8fcax9f['color'],
        blending: THREE['AdditiveBlending']
    });
    for (var _0x8fcaxb = 0; _0x8fcaxb < _0x8fcax9f['number']; _0x8fcaxb++) {
        _0x8fcaxc3 = new THREE.Sprite(_0x8fcaxaa);
        _dg3dObj['initParticle'](_0x8fcax9f, _0x8fcaxc3, _0x8fcaxb * 10, _0x8fcax13);
        _0x8fcaxc3['name'] = _0x8fcax9f['name'];
        _dg3dObj['addObject'](_0x8fcaxc3)
    }
};
Digital3D['prototype']['initParticle'] = function (_0x8fcax9f, _0x8fcaxc3, _0x8fcaxc5, _0x8fcaxa5) {
    var _dg3dObj = msj3DObj;
    if (_0x8fcaxc3 == null || typeof(_0x8fcaxc3) == 'undefined') {
        return
    };
    _0x8fcaxc3['position']['set'](_0x8fcax9f['position']['x'], _0x8fcax9f['position']['y'], _0x8fcax9f['position']['z']);
    _0x8fcaxc3['scale']['x'] = _0x8fcaxc3['scale']['y'] = Math['random']() * _0x8fcaxa5 + _0x8fcaxa5 * 2;
    var _0x8fcaxc6 = _0x8fcax9f['position']['x'];
    var _0x8fcaxc7 = _0x8fcax9f['position']['x'] + _0x8fcax9f['size']['x'];
    var _0x8fcaxc8 = _0x8fcax9f['position']['y'];
    var _0x8fcaxc9 = _0x8fcax9f['position']['y'] + _0x8fcax9f['size']['y'];
    var _0x8fcaxca = _0x8fcax9f['position']['z'];
    var _0x8fcaxcb = _0x8fcax9f['position']['z'] + _0x8fcax9f['size']['z'];
    new TWEEN.Tween(_0x8fcaxc3)['delay'](_0x8fcaxc5)['to']({}, 1000)['onComplete'](function () {
        _dg3dObj['initParticle'](_0x8fcax9f, _0x8fcaxc3, _0x8fcaxc5, _0x8fcaxa5)
    })['start']();
    new TWEEN.Tween(_0x8fcaxc3['position'])['delay'](_0x8fcaxc5)['to']({
        x: (Math['random']() * (_0x8fcaxc7 - _0x8fcaxc6 + 1) + _0x8fcaxc6),
        y: (Math['random']() * (_0x8fcaxc9 - _0x8fcaxc8 + 1) + _0x8fcaxc8),
        z: (Math['random']() * (_0x8fcaxcb - _0x8fcaxca + 1) + _0x8fcaxca)
    }, 10000)['start']();
    new TWEEN.Tween(_0x8fcaxc3['scale'])['delay'](_0x8fcaxc5)['to']({
        x: 0.01,
        y: 0.01
    }, 10000)['start']()
};
Digital3D['prototype']['addPlane'] = function (_0x8fcaxcc) {
    var _dg3dObj = msj3DObj;
    var _0x8fcax51 = _0x8fcaxcc;
    if (typeof _0x8fcax51['pic'] == 'string') {
        var _0x8fcax52 = new THREE.TextureLoader();
        _0x8fcax52['setCrossOrigin'](this['crossOrigin']);
        var _0x8fcax53 = _0x8fcax52['load'](_0x8fcax51['pic'], function () {}, undefined, function () {})
    } else {
        var _0x8fcax53 = new THREE.CanvasTexture(_0x8fcax51['pic'])
    };
    var _0x8fcax54 = {
        map: _0x8fcax53,
        overdraw: true,
        side: THREE['DoubleSide'],
        transparent: _0x8fcax51['transparent'],
        opacity: _0x8fcax51['opacity']
    };
    if (_0x8fcax51['blending']) {
        _0x8fcax54['blending'] = THREE['AdditiveBlending']
    };
    var _0x8fcax55 = new THREE.Mesh(new THREE.PlaneGeometry(_0x8fcax51['width'], _0x8fcax51['height'], 1, 1), new THREE.MeshBasicMaterial(_0x8fcax54));
    var _0x8fcaxbf = [];
    var _0x8fcaxc0 = [{
        r: 0,
        g: 0.5,
        b: 0.7
    },
        {
            r: 0.6,
            g: 1.0,
            b: 0.3
        },
        {
            r: 0.1,
            g: 0.9,
            b: 0.1
        }];
    for (var _0x8fcaxb = 0; _0x8fcaxb < 100; _0x8fcaxb++) {
        var _0x8fcaxc1 = _0x8fcaxc0[_0x8fcaxb % 3];
        if (_0x8fcaxc1 == undefined) {
            console['log']('ERROR: ' + colorValue)
        } else {
            _0x8fcaxbf[3 * _0x8fcaxb] = _0x8fcaxc1['r'];
            _0x8fcaxbf[3 * _0x8fcaxb + 1] = _0x8fcaxc1['g'];
            _0x8fcaxbf[3 * _0x8fcaxb + 2] = _0x8fcaxc1['b']
        }
    };
    _0x8fcax55['geometry']['colors'] = _0x8fcaxbf;
    _0x8fcax55['position']['x'] = _0x8fcax51['position']['x'];
    _0x8fcax55['position']['y'] = _0x8fcax51['position']['y'];
    _0x8fcax55['position']['z'] = _0x8fcax51['position']['z'];
    _0x8fcax55['rotation']['x'] = _dg3dObj.AngleToRadians(_0x8fcax51['rotation']['x']);
    _0x8fcax55['rotation']['y'] = _dg3dObj.AngleToRadians(_0x8fcax51['rotation']['y']);
    _0x8fcax55['rotation']['z'] = _dg3dObj.AngleToRadians(_0x8fcax51['rotation']['z']);
    _0x8fcax55['name'] = _0x8fcax51['name'];
    _dg3dObj['addObject'](_0x8fcax55)
};
Digital3D['prototype']['addBox'] = function (_0x8fcaxcc) {
    var _dg3dObj = msj3DObj;
    var _0x8fcax78 = _0x8fcaxcc['size']['h'];
    if (_0x8fcaxcc['tween'] > 0) {
        _0x8fcax78 = 1
    };
    var _0x8fcaxab = new THREE.BoxGeometry(_0x8fcaxcc['size']['w'], _0x8fcax78, _0x8fcaxcc['size']['l']);

    var _0x8fcaxc2 = new THREE.Mesh(_0x8fcaxab, new THREE.MeshPhongMaterial({
        color: _0x8fcaxcc['color'],
        opacity: _0x8fcaxcc['opacity'],
        transparent: _0x8fcaxcc['transparent'],
        wireframe: _0x8fcaxcc['wireframe'],
        shininess: 100
    }));

    _0x8fcaxc2['name'] = _0x8fcaxcc['name'];
    _0x8fcaxc2['position']['set'](_0x8fcaxcc['position']['x'], _0x8fcaxcc['position']['y'], _0x8fcaxcc['position']['z']);
    _0x8fcaxc2['rotation']['set'](_0x8fcaxcc['rotation']['x'], _0x8fcaxcc['rotation']['y'], _0x8fcaxcc['rotation']['z']);
    if (true == _0x8fcaxcc['wireframe']) {
        var _0x8fcaxcd = new THREE.BoxHelper(_0x8fcaxc2, _0x8fcaxcc['color']);
        _0x8fcaxcd['name'] = _0x8fcaxcc['name'];
        _dg3dObj['addObject'](_0x8fcaxcd)
    } else {
        _dg3dObj['addObject'](_0x8fcaxc2)
    };
    if (_0x8fcaxcc['tween'] > 0) {
        var _0x8fcaxce = _0x8fcaxcc['size'];
        var _0x8fcaxcf = _0x8fcax78;
        new TWEEN.Tween({
            h: _0x8fcax78
        })['to']({
            h: _0x8fcaxce['h']
        }, _0x8fcaxcc['tween'])['onUpdate'](function () {
            var _0x8fcaxd0 = new THREE.BoxGeometry(_0x8fcaxce['w'], this['h'], _0x8fcaxce['l']);
            _0x8fcaxc2['geometry'] = _0x8fcaxd0;
            var _0x8fcax14 = (this['h'] - _0x8fcaxcf) / 2.0;
            _0x8fcaxc2['position']['y'] += _0x8fcax14;
            _0x8fcaxcf = this['h']
        })['easing'](TWEEN['Easing']['Elastic'].Out)['start']()
    }
    return _0x8fcaxc2;
};
Digital3D['prototype']['addBox2'] = function (_0x8fcaxcc) {
    var _dg3dObj = msj3DObj;
    var _0x8fcax78 = _0x8fcaxcc['size']['h'];

    var _0x8fcaxab = new THREE.BoxGeometry(_0x8fcaxcc['size']['w'], _0x8fcax78, _0x8fcaxcc['size']['l']);
    var _0x8fcaxc2 = new THREE.Mesh(_0x8fcaxab, new THREE.MeshPhongMaterial({
        color: _0x8fcaxcc['color'],
        opacity: _0x8fcaxcc['opacity'],
        transparent: _0x8fcaxcc['transparent'],
        wireframe: _0x8fcaxcc['wireframe'],
        shininess: 100
    }));

    _0x8fcaxc2['name'] = _0x8fcaxcc['name'];
    _0x8fcaxc2['position']['set'](_0x8fcaxcc['position']['x'], _0x8fcaxcc['position']['y'], _0x8fcaxcc['position']['z']);
    _0x8fcaxc2['rotation']['set'](_0x8fcaxcc['rotation']['x'], _0x8fcaxcc['rotation']['y'], _0x8fcaxcc['rotation']['z']);
    _0x8fcaxc2.visible=_0x8fcaxcc['show'];
    var _0x8fcaxcd= new THREE.BoxHelper(_0x8fcaxc2, _0x8fcaxcc['color']);
    _0x8fcaxcd['visible']=_0x8fcaxcc['show'];
    _0x8fcaxcd['name'] = _0x8fcaxcc['name'];
    _dg3dObj['addObject'](_0x8fcaxc2)

};
Digital3D['prototype']['delSenceObject'] = function (_0x8fcax9, _0x8fcaxa) {
    //console.log('_0x8fcax9',_0x8fcax9);
    var _dg3dObj = msj3DObj;
    _dg3dObj['delObject'](_0x8fcax9, _0x8fcaxa)
};
Digital3D['prototype']['delSenceObject2'] = function (_0x8fcax9, _0x8fcaxa) {
    //console.log('_0x8fcax9',_0x8fcax9);
    var _dg3dObj = msj3DObj;
    _dg3dObj['delObject2'](_0x8fcax9, _0x8fcaxa)
};
Digital3D['prototype']['dynamicPath'] = function (_0x8fcaxd1, _0x8fcaxd2) {
    var _dg3dObj = msj3DObj;
    var _0x8fcax12 = _dg3dObj['addTunnel'](_0x8fcaxd1, _0x8fcaxd2);
    this['pathTubeGeometry'] = _0x8fcax12['geometry'];
    this['dynamicPathTimer'] = 0.0
};
Digital3D['prototype']['stopDynamicPath'] = function (_0x8fcaxd3) {
    var _dg3dObj = msj3DObj;
    this['pathTubeGeometry'] = null;
    this['dynamicPathTimer'] = 0.0;
    this['delSenceObject'](_0x8fcaxd3)
};
Digital3D['prototype']['AngleToRadians'] = function (_0x8fcaxd4) {
    return Math['PI'] / 180 * _0x8fcaxd4
};
Digital3D['prototype']['RadiansToAngle'] = function (_0x8fcaxd5) {
    return 180 / Math['PI'] * _0x8fcaxd5
};
