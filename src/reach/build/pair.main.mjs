// Automatically generated with Reach 0.1.5
/* eslint-disable */
export const _version = '0.1.5';
export const _backendVersion = 3;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  
  return {
    infos: {
      "NFT": {
        owner1: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v189] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v189, v196] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v189, v196, v204] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v189, v196, v204, v212] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8))) {
              const [v189, v196, v204, v224, v228, v229, v230] = svs;
              stdlib.assert(false, 'illegal view')
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        owner2: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v189] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v189, v196] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v189, v196, v204] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v189, v196, v204, v212] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 8))) {
              const [v189, v196, v204, v224, v228, v229, v230] = svs;
              stdlib.assert(false, 'illegal view')
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0],
      3: [ctc0, ctc0, ctc0],
      4: [ctc0, ctc0, ctc0, ctc1],
      8: [ctc0, ctc0, ctc0, ctc1, ctc3, ctc1, ctc1]
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function FirBuyer(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for FirBuyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for FirBuyer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    FirBuyer0: ctc0,
    SecBuyer0: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v191, time: v190, didSend: v19, from: v189 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v197], secs: v199, time: v198, didSend: v29, from: v196 } = txn2;
  ;
  const v203 = stdlib.protect(ctc0, await interact.getPersonalInfo(), {
    at: './src/reach/pair.rsh:67:66:application',
    fs: ['at ./src/reach/pair.rsh:66:16:application call to [unknown function] (defined at: ./src/reach/pair.rsh:66:20:function exp)'],
    msg: 'getPersonalInfo',
    who: 'FirBuyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v189, v196, v203],
    evt_cnt: 1,
    funcNum: 2,
    lct: v198,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v205], secs: v207, time: v206, didSend: v39, from: v204 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v205], secs: v207, time: v206, didSend: v39, from: v204 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v213, time: v212, didSend: v48, from: v211 } = txn4;
  ;
  const v215 = stdlib.addressEq(v196, v211);
  stdlib.assert(v215, {
    at: './src/reach/pair.rsh:75:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FirBuyer'
    });
  stdlib.protect(ctc1, await interact.showPersonalInfo(v197), {
    at: './src/reach/pair.rsh:79:30:application',
    fs: ['at ./src/reach/pair.rsh:78:16:application call to [unknown function] (defined at: ./src/reach/pair.rsh:78:20:function exp)'],
    msg: 'showPersonalInfo',
    who: 'FirBuyer'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v189, v196, v204, v212],
    evt_cnt: 0,
    funcNum: 4,
    lct: v212,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v220, time: v219, didSend: v57, from: v218 } = txn5;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v222 = stdlib.addressEq(v204, v218);
      stdlib.assert(v222, {
        at: './src/reach/pair.rsh:81:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const v224 = stdlib.add(v212, stdlib.checkedBigNumberify('./src/reach/pair.rsh:85:59:decimal', stdlib.UInt_max, 180));
      const v227 = ['                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                '];
      const v228 = v227;
      const v229 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:87:45:decimal', stdlib.UInt_max, 0);
      const v230 = v219;
      const v231 = v212;
      
      if ((() => {
        const v241 = stdlib.gt(v224, v231);
        const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
        const v243 = v241 ? v242 : false;
        
        return v243;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v220, time: v219, didSend: v57, from: v218 } = txn5;
  ;
  const v222 = stdlib.addressEq(v204, v218);
  stdlib.assert(v222, {
    at: './src/reach/pair.rsh:81:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FirBuyer'
    });
  const v224 = stdlib.add(v212, stdlib.checkedBigNumberify('./src/reach/pair.rsh:85:59:decimal', stdlib.UInt_max, 180));
  const v227 = ['                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                '];
  let v228 = v227;
  let v229 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:87:45:decimal', stdlib.UInt_max, 0);
  let v230 = v219;
  let v231 = v212;
  
  while ((() => {
    const v241 = stdlib.gt(v224, v231);
    const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
    const v243 = v241 ? v242 : false;
    
    return v243;})()) {
    const v248 = stdlib.protect(ctc0, await interact.getWords(v228), {
      at: './src/reach/pair.rsh:93:53:application',
      fs: ['at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:91:13:function exp)', 'at ./src/reach/pair.rsh:87:19:application call to "runFirBuyer0" (defined at: ./src/reach/pair.rsh:87:19:function exp)', 'at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)'],
      msg: 'getWords',
      who: 'FirBuyer'
      });
    
    const v258 = ['FirBuyer0', v248];
    
    const txn6 = await (ctc.sendrecv({
      args: [v189, v196, v204, v224, v228, v229, v230, v258],
      evt_cnt: 1,
      funcNum: 7,
      lct: v230,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:90:12:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v261], secs: v263, time: v262, didSend: v144, from: v260 } = txn6;
        
        switch (v261[0]) {
          case 'FirBuyer0': {
            const v264 = v261[1];
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:90:12:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v268 = stdlib.addressEq(v260, v204);
            stdlib.assert(v268, {
              at: './src/reach/pair.rsh:87:19:application',
              fs: [],
              msg: null,
              who: 'FirBuyer'
              });
            const v270 = stdlib.Array_set(v228, v229, v264);
            const v271 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:49:decimal', stdlib.UInt_max, 1));
            const cv228 = v270;
            const cv229 = v271;
            const cv230 = v262;
            const cv231 = v230;
            
            (() => {
              const v228 = cv228;
              const v229 = cv229;
              const v230 = cv230;
              const v231 = cv231;
              
              if ((() => {
                const v241 = stdlib.gt(v224, v231);
                const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
                const v243 = v241 ? v242 : false;
                
                return v243;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          case 'SecBuyer0': {
            const v279 = v261[1];
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:90:12:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v289 = stdlib.addressEq(v260, v196);
            stdlib.assert(v289, {
              at: './src/reach/pair.rsh:87:19:application',
              fs: [],
              msg: null,
              who: 'FirBuyer'
              });
            const v291 = stdlib.Array_set(v228, v229, v279);
            const v292 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:112:49:decimal', stdlib.UInt_max, 1));
            const cv228 = v291;
            const cv229 = v292;
            const cv230 = v262;
            const cv231 = v230;
            
            (() => {
              const v228 = cv228;
              const v229 = cv229;
              const v230 = cv230;
              const v231 = cv231;
              
              if ((() => {
                const v241 = stdlib.gt(v224, v231);
                const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
                const v243 = v241 ? v242 : false;
                
                return v243;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v224],
      tys: [ctc3, ctc3, ctc3, ctc4, ctc5, ctc4, ctc4, ctc2],
      waitIfNotPresent: false
      }));
    if (txn6.didTimeout) {
      const txn7 = await (ctc.sendrecv({
        args: [v189, v196, v204, v224, v228, v229, v230],
        evt_cnt: 0,
        funcNum: 8,
        lct: v230,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v296, time: v295, didSend: v175, from: v294 } = txn7;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v298 = stdlib.addressEq(v204, v294);
          const v299 = stdlib.addressEq(v189, v294);
          const v300 = v298 ? true : v299;
          const v301 = stdlib.addressEq(v196, v294);
          const v302 = v300 ? true : v301;
          stdlib.assert(v302, {
            at: './src/reach/pair.rsh:115:52:dot',
            fs: ['at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)'],
            msg: 'sender correct',
            who: 'FirBuyer'
            });
          const cv228 = v228;
          const cv229 = v229;
          const cv230 = v295;
          const cv231 = v230;
          
          (() => {
            const v228 = cv228;
            const v229 = cv229;
            const v230 = cv230;
            const v231 = cv231;
            
            if ((() => {
              const v241 = stdlib.gt(v224, v231);
              const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
              const v243 = v241 ? v242 : false;
              
              return v243;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc3, ctc3, ctc3, ctc4, ctc5, ctc4, ctc4],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v296, time: v295, didSend: v175, from: v294 } = txn7;
      ;
      const v298 = stdlib.addressEq(v204, v294);
      const v299 = stdlib.addressEq(v189, v294);
      const v300 = v298 ? true : v299;
      const v301 = stdlib.addressEq(v196, v294);
      const v302 = v300 ? true : v301;
      stdlib.assert(v302, {
        at: './src/reach/pair.rsh:115:52:dot',
        fs: ['at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)'],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const cv228 = v228;
      const cv229 = v229;
      const cv230 = v295;
      const cv231 = v230;
      
      v228 = cv228;
      v229 = cv229;
      v230 = cv230;
      v231 = cv231;
      
      continue;
      }
    else {
      const {data: [v261], secs: v263, time: v262, didSend: v144, from: v260 } = txn6;
      switch (v261[0]) {
        case 'FirBuyer0': {
          const v264 = v261[1];
          ;
          const v268 = stdlib.addressEq(v260, v204);
          stdlib.assert(v268, {
            at: './src/reach/pair.rsh:87:19:application',
            fs: [],
            msg: null,
            who: 'FirBuyer'
            });
          const v270 = stdlib.Array_set(v228, v229, v264);
          const v271 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:49:decimal', stdlib.UInt_max, 1));
          const cv228 = v270;
          const cv229 = v271;
          const cv230 = v262;
          const cv231 = v230;
          
          v228 = cv228;
          v229 = cv229;
          v230 = cv230;
          v231 = cv231;
          
          continue;
          break;
          }
        case 'SecBuyer0': {
          const v279 = v261[1];
          ;
          const v289 = stdlib.addressEq(v260, v196);
          stdlib.assert(v289, {
            at: './src/reach/pair.rsh:87:19:application',
            fs: [],
            msg: null,
            who: 'FirBuyer'
            });
          const v291 = stdlib.Array_set(v228, v229, v279);
          const v292 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:112:49:decimal', stdlib.UInt_max, 1));
          const cv228 = v291;
          const cv229 = v292;
          const cv230 = v262;
          const cv231 = v230;
          
          v228 = cv228;
          v229 = cv229;
          v230 = cv230;
          v231 = cv231;
          
          continue;
          break;
          }
        }}
    }
  return;
  
  
  
  
  
  };
export async function Oracle(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Oracle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_Data({
    FirBuyer0: ctc0,
    SecBuyer0: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/reach/pair.rsh:47:10:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v191, time: v190, didSend: v19, from: v189 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v191, time: v190, didSend: v19, from: v189 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v197], secs: v199, time: v198, didSend: v29, from: v196 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v205], secs: v207, time: v206, didSend: v39, from: v204 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v213, time: v212, didSend: v48, from: v211 } = txn4;
  ;
  const v215 = stdlib.addressEq(v196, v211);
  stdlib.assert(v215, {
    at: './src/reach/pair.rsh:75:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Oracle'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v220, time: v219, didSend: v57, from: v218 } = txn5;
  ;
  const v222 = stdlib.addressEq(v204, v218);
  stdlib.assert(v222, {
    at: './src/reach/pair.rsh:81:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Oracle'
    });
  const v224 = stdlib.add(v212, stdlib.checkedBigNumberify('./src/reach/pair.rsh:85:59:decimal', stdlib.UInt_max, 180));
  const v227 = ['                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                '];
  let v228 = v227;
  let v229 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:87:45:decimal', stdlib.UInt_max, 0);
  let v230 = v219;
  let v231 = v212;
  
  while ((() => {
    const v241 = stdlib.gt(v224, v231);
    const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
    const v243 = v241 ? v242 : false;
    
    return v243;})()) {
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc1],
      timeoutAt: ['time', v224],
      waitIfNotPresent: false
      }));
    if (txn6.didTimeout) {
      const txn7 = await (ctc.sendrecv({
        args: [v189, v196, v204, v224, v228, v229, v230],
        evt_cnt: 0,
        funcNum: 8,
        lct: v230,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v296, time: v295, didSend: v175, from: v294 } = txn7;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v298 = stdlib.addressEq(v204, v294);
          const v299 = stdlib.addressEq(v189, v294);
          const v300 = v298 ? true : v299;
          const v301 = stdlib.addressEq(v196, v294);
          const v302 = v300 ? true : v301;
          stdlib.assert(v302, {
            at: './src/reach/pair.rsh:115:52:dot',
            fs: ['at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)'],
            msg: 'sender correct',
            who: 'Oracle'
            });
          const cv228 = v228;
          const cv229 = v229;
          const cv230 = v295;
          const cv231 = v230;
          
          (() => {
            const v228 = cv228;
            const v229 = cv229;
            const v230 = cv230;
            const v231 = cv231;
            
            if ((() => {
              const v241 = stdlib.gt(v224, v231);
              const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
              const v243 = v241 ? v242 : false;
              
              return v243;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc2, ctc2, ctc3, ctc4, ctc3, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v296, time: v295, didSend: v175, from: v294 } = txn7;
      ;
      const v298 = stdlib.addressEq(v204, v294);
      const v299 = stdlib.addressEq(v189, v294);
      const v300 = v298 ? true : v299;
      const v301 = stdlib.addressEq(v196, v294);
      const v302 = v300 ? true : v301;
      stdlib.assert(v302, {
        at: './src/reach/pair.rsh:115:52:dot',
        fs: ['at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)'],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const cv228 = v228;
      const cv229 = v229;
      const cv230 = v295;
      const cv231 = v230;
      
      v228 = cv228;
      v229 = cv229;
      v230 = cv230;
      v231 = cv231;
      
      continue;
      }
    else {
      const {data: [v261], secs: v263, time: v262, didSend: v144, from: v260 } = txn6;
      switch (v261[0]) {
        case 'FirBuyer0': {
          const v264 = v261[1];
          ;
          const v268 = stdlib.addressEq(v260, v204);
          stdlib.assert(v268, {
            at: './src/reach/pair.rsh:87:19:application',
            fs: [],
            msg: null,
            who: 'Oracle'
            });
          const v270 = stdlib.Array_set(v228, v229, v264);
          const v271 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:49:decimal', stdlib.UInt_max, 1));
          const cv228 = v270;
          const cv229 = v271;
          const cv230 = v262;
          const cv231 = v230;
          
          v228 = cv228;
          v229 = cv229;
          v230 = cv230;
          v231 = cv231;
          
          continue;
          break;
          }
        case 'SecBuyer0': {
          const v279 = v261[1];
          ;
          const v289 = stdlib.addressEq(v260, v196);
          stdlib.assert(v289, {
            at: './src/reach/pair.rsh:87:19:application',
            fs: [],
            msg: null,
            who: 'Oracle'
            });
          const v291 = stdlib.Array_set(v228, v229, v279);
          const v292 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:112:49:decimal', stdlib.UInt_max, 1));
          const cv228 = v291;
          const cv229 = v292;
          const cv230 = v262;
          const cv231 = v230;
          
          v228 = cv228;
          v229 = cv229;
          v230 = cv230;
          v231 = cv231;
          
          continue;
          break;
          }
        }}
    }
  return;
  
  
  
  
  
  };
export async function SecBuyer(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for SecBuyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SecBuyer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    FirBuyer0: ctc0,
    SecBuyer0: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v191, time: v190, didSend: v19, from: v189 } = txn1;
  ;
  const v195 = stdlib.protect(ctc0, await interact.getPersonalInfo(), {
    at: './src/reach/pair.rsh:57:66:application',
    fs: ['at ./src/reach/pair.rsh:56:16:application call to [unknown function] (defined at: ./src/reach/pair.rsh:56:20:function exp)'],
    msg: 'getPersonalInfo',
    who: 'SecBuyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v189, v195],
    evt_cnt: 1,
    funcNum: 1,
    lct: v190,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v197], secs: v199, time: v198, didSend: v29, from: v196 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v197], secs: v199, time: v198, didSend: v29, from: v196 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v205], secs: v207, time: v206, didSend: v39, from: v204 } = txn3;
  ;
  stdlib.protect(ctc1, await interact.showPersonalInfo(v205), {
    at: './src/reach/pair.rsh:73:30:application',
    fs: ['at ./src/reach/pair.rsh:72:16:application call to [unknown function] (defined at: ./src/reach/pair.rsh:72:20:function exp)'],
    msg: 'showPersonalInfo',
    who: 'SecBuyer'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v189, v196, v204],
    evt_cnt: 0,
    funcNum: 3,
    lct: v206,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v213, time: v212, didSend: v48, from: v211 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v215 = stdlib.addressEq(v196, v211);
      stdlib.assert(v215, {
        at: './src/reach/pair.rsh:75:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v213, time: v212, didSend: v48, from: v211 } = txn4;
  ;
  const v215 = stdlib.addressEq(v196, v211);
  stdlib.assert(v215, {
    at: './src/reach/pair.rsh:75:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'SecBuyer'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v220, time: v219, didSend: v57, from: v218 } = txn5;
  ;
  const v222 = stdlib.addressEq(v204, v218);
  stdlib.assert(v222, {
    at: './src/reach/pair.rsh:81:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'SecBuyer'
    });
  const v224 = stdlib.add(v212, stdlib.checkedBigNumberify('./src/reach/pair.rsh:85:59:decimal', stdlib.UInt_max, 180));
  const v227 = ['                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                '];
  let v228 = v227;
  let v229 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:87:45:decimal', stdlib.UInt_max, 0);
  let v230 = v219;
  let v231 = v212;
  
  while ((() => {
    const v241 = stdlib.gt(v224, v231);
    const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
    const v243 = v241 ? v242 : false;
    
    return v243;})()) {
    const v254 = stdlib.protect(ctc0, await interact.getWords(v228), {
      at: './src/reach/pair.rsh:105:53:application',
      fs: ['at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:103:13:function exp)', 'at ./src/reach/pair.rsh:87:19:application call to "runSecBuyer0" (defined at: ./src/reach/pair.rsh:87:19:function exp)', 'at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)'],
      msg: 'getWords',
      who: 'SecBuyer'
      });
    
    const v259 = ['SecBuyer0', v254];
    
    const txn6 = await (ctc.sendrecv({
      args: [v189, v196, v204, v224, v228, v229, v230, v259],
      evt_cnt: 1,
      funcNum: 7,
      lct: v230,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:102:12:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v261], secs: v263, time: v262, didSend: v144, from: v260 } = txn6;
        
        switch (v261[0]) {
          case 'FirBuyer0': {
            const v264 = v261[1];
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:90:12:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v268 = stdlib.addressEq(v260, v204);
            stdlib.assert(v268, {
              at: './src/reach/pair.rsh:87:19:application',
              fs: [],
              msg: null,
              who: 'SecBuyer'
              });
            const v270 = stdlib.Array_set(v228, v229, v264);
            const v271 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:49:decimal', stdlib.UInt_max, 1));
            const cv228 = v270;
            const cv229 = v271;
            const cv230 = v262;
            const cv231 = v230;
            
            (() => {
              const v228 = cv228;
              const v229 = cv229;
              const v230 = cv230;
              const v231 = cv231;
              
              if ((() => {
                const v241 = stdlib.gt(v224, v231);
                const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
                const v243 = v241 ? v242 : false;
                
                return v243;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          case 'SecBuyer0': {
            const v279 = v261[1];
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:90:12:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v289 = stdlib.addressEq(v260, v196);
            stdlib.assert(v289, {
              at: './src/reach/pair.rsh:87:19:application',
              fs: [],
              msg: null,
              who: 'SecBuyer'
              });
            const v291 = stdlib.Array_set(v228, v229, v279);
            const v292 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:112:49:decimal', stdlib.UInt_max, 1));
            const cv228 = v291;
            const cv229 = v292;
            const cv230 = v262;
            const cv231 = v230;
            
            (() => {
              const v228 = cv228;
              const v229 = cv229;
              const v230 = cv230;
              const v231 = cv231;
              
              if ((() => {
                const v241 = stdlib.gt(v224, v231);
                const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
                const v243 = v241 ? v242 : false;
                
                return v243;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v224],
      tys: [ctc3, ctc3, ctc3, ctc4, ctc5, ctc4, ctc4, ctc2],
      waitIfNotPresent: false
      }));
    if (txn6.didTimeout) {
      const txn7 = await (ctc.sendrecv({
        args: [v189, v196, v204, v224, v228, v229, v230],
        evt_cnt: 0,
        funcNum: 8,
        lct: v230,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn7) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v296, time: v295, didSend: v175, from: v294 } = txn7;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v298 = stdlib.addressEq(v204, v294);
          const v299 = stdlib.addressEq(v189, v294);
          const v300 = v298 ? true : v299;
          const v301 = stdlib.addressEq(v196, v294);
          const v302 = v300 ? true : v301;
          stdlib.assert(v302, {
            at: './src/reach/pair.rsh:115:52:dot',
            fs: ['at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)'],
            msg: 'sender correct',
            who: 'SecBuyer'
            });
          const cv228 = v228;
          const cv229 = v229;
          const cv230 = v295;
          const cv231 = v230;
          
          (() => {
            const v228 = cv228;
            const v229 = cv229;
            const v230 = cv230;
            const v231 = cv231;
            
            if ((() => {
              const v241 = stdlib.gt(v224, v231);
              const v242 = stdlib.lt(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:89:39:decimal', stdlib.UInt_max, 20));
              const v243 = v241 ? v242 : false;
              
              return v243;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc3, ctc3, ctc3, ctc4, ctc5, ctc4, ctc4],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v296, time: v295, didSend: v175, from: v294 } = txn7;
      ;
      const v298 = stdlib.addressEq(v204, v294);
      const v299 = stdlib.addressEq(v189, v294);
      const v300 = v298 ? true : v299;
      const v301 = stdlib.addressEq(v196, v294);
      const v302 = v300 ? true : v301;
      stdlib.assert(v302, {
        at: './src/reach/pair.rsh:115:52:dot',
        fs: ['at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)'],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const cv228 = v228;
      const cv229 = v229;
      const cv230 = v295;
      const cv231 = v230;
      
      v228 = cv228;
      v229 = cv229;
      v230 = cv230;
      v231 = cv231;
      
      continue;
      }
    else {
      const {data: [v261], secs: v263, time: v262, didSend: v144, from: v260 } = txn6;
      switch (v261[0]) {
        case 'FirBuyer0': {
          const v264 = v261[1];
          ;
          const v268 = stdlib.addressEq(v260, v204);
          stdlib.assert(v268, {
            at: './src/reach/pair.rsh:87:19:application',
            fs: [],
            msg: null,
            who: 'SecBuyer'
            });
          const v270 = stdlib.Array_set(v228, v229, v264);
          const v271 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:49:decimal', stdlib.UInt_max, 1));
          const cv228 = v270;
          const cv229 = v271;
          const cv230 = v262;
          const cv231 = v230;
          
          v228 = cv228;
          v229 = cv229;
          v230 = cv230;
          v231 = cv231;
          
          continue;
          break;
          }
        case 'SecBuyer0': {
          const v279 = v261[1];
          ;
          const v289 = stdlib.addressEq(v260, v196);
          stdlib.assert(v289, {
            at: './src/reach/pair.rsh:87:19:application',
            fs: [],
            msg: null,
            who: 'SecBuyer'
            });
          const v291 = stdlib.Array_set(v228, v229, v279);
          const v292 = stdlib.add(v229, stdlib.checkedBigNumberify('./src/reach/pair.rsh:112:49:decimal', stdlib.UInt_max, 1));
          const cv228 = v291;
          const cv229 = v292;
          const cv230 = v262;
          const cv231 = v230;
          
          v228 = cv228;
          v229 = cv229;
          v230 = cv230;
          v231 = cv231;
          
          continue;
          break;
          }
        }}
    }
  return;
  
  
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 8
btoi
store 1
dup
substring 8 16
btoi
store 2
substring 16 48
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
// Handler 0
dup
int 0
==
bz l0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 255
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./src/reach/pair.rsh:47:10:dot"
// "[]"
int 100000
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1:
pop
// "CheckPay"
// "./src/reach/pair.rsh:47:10:dot"
// "[]"
txn Sender
int 1
bzero
dig 1
substring 0 32
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 1
dup
int 1
==
bz l2
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
store 255
pop
txna ApplicationArgs 2
dup
len
int 64
==
assert
dup
store 254
pop
// "CheckPay"
// "./src/reach/pair.rsh:59:12:dot"
// "[]"
load 255
txn Sender
concat
int 1
bzero
dig 1
substring 0 64
app_global_put
pop
int 2
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l2:
// Handler 2
dup
int 2
==
bz l3
pop
// check step
int 2
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 64
store 254
pop
txna ApplicationArgs 2
dup
len
int 64
==
assert
dup
store 253
pop
// "CheckPay"
// "./src/reach/pair.rsh:69:12:dot"
// "[]"
load 255
load 254
concat
txn Sender
concat
int 1
bzero
dig 1
substring 0 96
app_global_put
pop
int 3
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l3:
// Handler 3
dup
int 3
==
bz l4
pop
// check step
int 3
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/reach/pair.rsh:75:12:dot"
// "[]"
// Just "sender correct"
// "./src/reach/pair.rsh:75:12:dot"
// "[]"
load 254
txn Sender
==
assert
load 255
load 254
concat
load 253
concat
global Round
itob
concat
int 1
bzero
dig 1
substring 0 104
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l4:
// Handler 4
dup
int 4
==
bz l5
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/reach/pair.rsh:81:12:dot"
// "[]"
// Just "sender correct"
// "./src/reach/pair.rsh:81:12:dot"
// "[]"
load 253
txn Sender
==
assert
load 255
load 254
concat
load 253
concat
load 252
int 180
+
itob
concat
byte base64(ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAAAA==)
global Round
itob
concat
load 252
itob
concat
b loop5
l5:
l6:
l7:
// Handler 7
dup
int 7
==
bz l8
pop
// check step
int 8
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
byte base64(Ag==)
app_global_get
concat
byte base64(Aw==)
app_global_get
concat
byte base64(BA==)
app_global_get
concat
byte base64(BQ==)
app_global_get
concat
byte base64(Bg==)
app_global_get
concat
byte base64(Bw==)
app_global_get
concat
byte base64(CA==)
app_global_get
concat
byte base64(CQ==)
app_global_get
concat
byte base64(Cg==)
app_global_get
concat
byte base64(Cw==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
dup
int 104
int 1384
substring3
store 251
dup
int 1384
int 1392
substring3
btoi
store 250
dup
int 1392
int 1400
substring3
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 65
==
assert
dup
store 248
pop
global Round
load 252
<
assert
load 248
int 0
getbyte
int 0
==
bz l10
load 248
substring 1 65
store 247
// "CheckPay"
// "./src/reach/pair.rsh:87:19:dot"
// "[]"
// Nothing
// "./src/reach/pair.rsh:87:19:application"
// "[]"
txn Sender
load 253
==
assert
load 255
load 254
concat
load 253
concat
load 252
itob
concat
load 251
int 0
int 64
load 250
*
substring3
load 247
concat
load 251
int 64
dup
load 250
*
+
int 1280
substring3
concat
load 250
int 1
+
itob
concat
global Round
itob
concat
load 249
itob
concat
b loop5
l10:
load 248
int 0
getbyte
int 1
==
bz l11
load 248
substring 1 65
store 247
// "CheckPay"
// "./src/reach/pair.rsh:87:19:dot"
// "[]"
// Nothing
// "./src/reach/pair.rsh:87:19:application"
// "[]"
txn Sender
load 254
==
assert
load 255
load 254
concat
load 253
concat
load 252
itob
concat
load 251
int 0
int 64
load 250
*
substring3
load 247
concat
load 251
int 64
dup
load 250
*
+
int 1280
substring3
concat
load 250
int 1
+
itob
concat
global Round
itob
concat
load 249
itob
concat
b loop5
l11:
l9:
l8:
// Handler 8
dup
int 8
==
bz l12
pop
// check step
int 8
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
load 2
==
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
byte base64(Ag==)
app_global_get
concat
byte base64(Aw==)
app_global_get
concat
byte base64(BA==)
app_global_get
concat
byte base64(BQ==)
app_global_get
concat
byte base64(Bg==)
app_global_get
concat
byte base64(Bw==)
app_global_get
concat
byte base64(CA==)
app_global_get
concat
byte base64(CQ==)
app_global_get
concat
byte base64(Cg==)
app_global_get
concat
byte base64(Cw==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
dup
int 104
int 1384
substring3
store 251
dup
int 1384
int 1392
substring3
btoi
store 250
dup
int 1392
int 1400
substring3
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
>=
assert
// "CheckPay"
// "./src/reach/pair.rsh:115:52:dot"
// "[at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)]"
// Just "sender correct"
// "./src/reach/pair.rsh:115:52:dot"
// "[at ./src/reach/pair.rsh:87:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:87:19:function exp)]"
load 253
txn Sender
==
load 255
txn Sender
==
||
load 254
txn Sender
==
||
assert
load 255
load 254
concat
load 253
concat
load 252
itob
concat
load 251
load 250
itob
concat
global Round
itob
concat
load 249
itob
concat
b loop5
l12:
int 0
assert
loop5:
dup
int 0
int 1280
substring3
store 255
dup
int 1280
int 1288
substring3
btoi
store 254
dup
int 1288
int 1296
substring3
btoi
store 253
dup
int 1296
int 1304
substring3
btoi
store 252
pop
dup
substring 0 32
store 251
dup
substring 32 64
store 250
dup
substring 64 96
store 249
dup
substring 96 104
btoi
store 248
pop
load 248
load 252
>
load 254
int 20
<
&&
bz l13
load 251
load 250
concat
load 249
concat
load 248
itob
concat
load 255
concat
load 254
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
substring 0 127
app_global_put
byte base64(AQ==)
dig 1
substring 127 254
app_global_put
byte base64(Ag==)
dig 1
int 254
int 381
substring3
app_global_put
byte base64(Aw==)
dig 1
int 381
int 508
substring3
app_global_put
byte base64(BA==)
dig 1
int 508
int 635
substring3
app_global_put
byte base64(BQ==)
dig 1
int 635
int 762
substring3
app_global_put
byte base64(Bg==)
dig 1
int 762
int 889
substring3
app_global_put
byte base64(Bw==)
dig 1
int 889
int 1016
substring3
app_global_put
byte base64(CA==)
dig 1
int 1016
int 1143
substring3
app_global_put
byte base64(CQ==)
dig 1
int 1143
int 1270
substring3
app_global_put
byte base64(Cg==)
dig 1
int 1270
int 1397
substring3
app_global_put
byte base64(Cw==)
dig 1
int 1397
int 1400
substring3
app_global_put
pop
int 8
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l13:
load 250
load 249
concat
byte base64()
loop6:
pop
dup
substring 0 32
store 255
dup
substring 32 64
store 254
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l14:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 12,
  stateSize: 1400,
  unsupported: [],
  version: 4
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v197",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v205",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint8[64]",
                    "name": "_FirBuyer0",
                    "type": "uint8[64]"
                  },
                  {
                    "internalType": "uint8[64]",
                    "name": "_SecBuyer0",
                    "type": "uint8[64]"
                  }
                ],
                "internalType": "struct T17",
                "name": "v261",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "NFT_owner1",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_owner2",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v197",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v205",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint8[64]",
                    "name": "_FirBuyer0",
                    "type": "uint8[64]"
                  },
                  {
                    "internalType": "uint8[64]",
                    "name": "_SecBuyer0",
                    "type": "uint8[64]"
                  }
                ],
                "internalType": "struct T17",
                "name": "v261",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620049cd380380620049cd833981016040819052620000269162000198565b6000805560408051825181526020808401511515908201527fcd3784b2810428b9f2b2dd7f396bb870a5f4b96dbfb942b22303c2c03fab95e2910160405180910390a16200007734156009620000c8565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000bf929190620000f2565b50505062000240565b81620000ee5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001009062000203565b90600052602060002090601f0160209004810192826200012457600085556200016f565b82601f106200013f57805160ff19168380011785556200016f565b828001600101855582156200016f579182015b828111156200016f57825182559160200191906001019062000152565b506200017d92915062000181565b5090565b5b808211156200017d576000815560010162000182565b600060408284031215620001ab57600080fd5b604080519081016001600160401b0381118282101715620001dc57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620001f757600080fd5b60208201529392505050565b600181811c908216806200021857607f821691505b602082108114156200023a57634e487b7160e01b600052602260045260246000fd5b50919050565b61477d80620002506000396000f3fe60806040526004361061008a5760003560e01c8063832307571161005957806383230757146101055780638a7bbdb914610123578063a8ca01a014610136578063b1adad0e14610149578063f147248d1461015c57600080fd5b80630d19a5fb146100965780631ede7e1d146100ab57806346f8ed2a146100be57806355f40150146100f057600080fd5b3661009157005b600080fd5b6100a96100a4366004614466565b61016f565b005b6100a96100b93660046141dd565b612c47565b3480156100ca57600080fd5b506100d3612dc2565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100fc57600080fd5b506100d361317a565b34801561011157600080fd5b506001546040519081526020016100e7565b6100a96101313660046141fa565b61352f565b6100a96101443660046141dd565b613842565b6100a9610157366004614466565b6139b1565b6100a961016a366004614466565b613b99565b61017f6004600054146016613d3f565b600154610190908235146017613d3f565b6000808055600280546101a290614690565b80601f01602080910402602001604051908101604052809291908181526020018280546101ce90614690565b801561021b5780601f106101f05761010080835404028352916020019161021b565b820191906000526020600020905b8154815290600101906020018083116101fe57829003601f168201915b505050505080602001905181019061023391906142d4565b905061023d613f12565b7f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc05796278360405161026c91906145dd565b60405180910390a161028034156014613d3f565b604082015161029b906001600160a01b031633146015613d3f565b60408051610800810182526020808252808201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516000602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516001602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516002602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516003602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516004602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516005602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516006602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516007602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516008602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516009602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600a602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600b602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600c602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600d602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600e602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600f602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516010602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516011602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516012602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e0810191909152815160136020020152612bc9613f2a565b825181516001600160a01b0391821690526020808501518351908316910152604080850151835192169101526060830151612c069060b490614678565b8151606090810191909152825160208084018051929092528151600091015280514360409091015284820151905190910152612c4181613d68565b50505050565b612c57600160005414600b613d3f565b600154612c6890823514600c613d3f565b600080805560028054612c7a90614690565b80601f0160208091040260200160405190810160405280929190818152602001828054612ca690614690565b8015612cf35780601f10612cc857610100808354040283529160200191612cf3565b820191906000526020600020905b815481529060010190602001808311612cd657829003601f168201915b5050505050806020019051810190612d0b9190614193565b90507f2b4d4e402de11f343d5e23b2b21c708b2ca27732f21e65455bbbccd42bbcb0ee82604051612d3c91906144bc565b60405180910390a1612d503415600a613d3f565b604080518082019091526000808252602082015281516001600160a01b0390811680835233602080850191825260026000554360015560408051918201939093529051909216908201526060015b60405160208183030381529060405260029080519060200190612c41929190613f61565b600060016000541415612e7f57600060028054612dde90614690565b80601f0160208091040260200160405190810160405280929190818152602001828054612e0a90614690565b8015612e575780601f10612e2c57610100808354040283529160200191612e57565b820191906000526020600020905b815481529060010190602001808311612e3a57829003601f168201915b5050505050806020019051810190612e6f9190614193565b9050612e7d60006007613d3f565b505b60026000541415612f3a57600060028054612e9990614690565b80601f0160208091040260200160405190810160405280929190818152602001828054612ec590614690565b8015612f125780601f10612ee757610100808354040283529160200191612f12565b820191906000526020600020905b815481529060010190602001808311612ef557829003601f168201915b5050505050806020019051810190612f2a919061420d565b9050612f3860006007613d3f565b505b60036000541415612ff557600060028054612f5490614690565b80601f0160208091040260200160405190810160405280929190818152602001828054612f8090614690565b8015612fcd5780601f10612fa257610100808354040283529160200191612fcd565b820191906000526020600020905b815481529060010190602001808311612fb057829003601f168201915b5050505050806020019051810190612fe59190614268565b9050612ff360006007613d3f565b505b600460005414156130b05760006002805461300f90614690565b80601f016020809104026020016040519081016040528092919081815260200182805461303b90614690565b80156130885780601f1061305d57610100808354040283529160200191613088565b820191906000526020600020905b81548152906001019060200180831161306b57829003601f168201915b50505050508060200190518101906130a091906142d4565b90506130ae60006007613d3f565b505b6008600054141561316b576000600280546130ca90614690565b80601f01602080910402602001604051908101604052809291908181526020018280546130f690614690565b80156131435780601f1061311857610100808354040283529160200191613143565b820191906000526020600020905b81548152906001019060200180831161312657829003601f168201915b505050505080602001905181019061315b919061434d565b905061316960006007613d3f565b505b61317760006007613d3f565b90565b6000600160005414156132375760006002805461319690614690565b80601f01602080910402602001604051908101604052809291908181526020018280546131c290614690565b801561320f5780601f106131e45761010080835404028352916020019161320f565b820191906000526020600020905b8154815290600101906020018083116131f257829003601f168201915b50505050508060200190518101906132279190614193565b905061323560006008613d3f565b505b600260005414156132f25760006002805461325190614690565b80601f016020809104026020016040519081016040528092919081815260200182805461327d90614690565b80156132ca5780601f1061329f576101008083540402835291602001916132ca565b820191906000526020600020905b8154815290600101906020018083116132ad57829003601f168201915b50505050508060200190518101906132e2919061420d565b90506132f060006008613d3f565b505b600360005414156133ad5760006002805461330c90614690565b80601f016020809104026020016040519081016040528092919081815260200182805461333890614690565b80156133855780601f1061335a57610100808354040283529160200191613385565b820191906000526020600020905b81548152906001019060200180831161336857829003601f168201915b505050505080602001905181019061339d9190614268565b90506133ab60006008613d3f565b505b60046000541415613468576000600280546133c790614690565b80601f01602080910402602001604051908101604052809291908181526020018280546133f390614690565b80156134405780601f1061341557610100808354040283529160200191613440565b820191906000526020600020905b81548152906001019060200180831161342357829003601f168201915b505050505080602001905181019061345891906142d4565b905061346660006008613d3f565b505b600860005414156135235760006002805461348290614690565b80601f01602080910402602001604051908101604052809291908181526020018280546134ae90614690565b80156134fb5780601f106134d0576101008083540402835291602001916134fb565b820191906000526020600020905b8154815290600101906020018083116134de57829003601f168201915b5050505050806020019051810190613513919061434d565b905061352160006008613d3f565b505b61317760006008613d3f565b61353f600860005414601c613d3f565b60015461355090823514601d613d3f565b60008080556002805461356290614690565b80601f016020809104026020016040519081016040528092919081815260200182805461358e90614690565b80156135db5780601f106135b0576101008083540402835291602001916135db565b820191906000526020600020905b8154815290600101906020018083116135be57829003601f168201915b50505050508060200190518101906135f3919061434d565b90506135fd613fe5565b61360e82606001514310601e613d3f565b7fe3d995b38d810947164729f3201ee99b0425eadab5f6642894bed406f21377238360405161363d91906144d1565b60405180910390a160006136576040850160208601614171565b6001811115613668576136686146f6565b141561375d576040805161080081810183529091808601918390839080828437600092019190915250505081526136a134156018613d3f565b6136c482604001516001600160a01b0316336001600160a01b0316146019613d3f565b6136cc613f2a565b825181516001600160a01b039182169052602080850151835190831691015260408085015183519216910152606080840151825190910152608083015160a0840151835161371b929190613e85565b60208201515260a083015161373290600190614678565b602080830180519091019190915280514360409091015260c0840151905160600152612c4181613d68565b600161376f6040850160208601614171565b6001811115613780576137806146f6565b141561383d5760408051610800818101835290916108408601918390839080828437600092019190915250505060208201526137be3415601a613d3f565b6137e182602001516001600160a01b0316336001600160a01b031614601b613d3f565b6137e9613f2a565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316920191909152606080850151835190910152608084015160a08501519184015161371b9290613e85565b505050565b613852600260005414600e613d3f565b60015461386390823514600f613d3f565b60008080556002805461387590614690565b80601f01602080910402602001604051908101604052809291908181526020018280546138a190614690565b80156138ee5780601f106138c3576101008083540402835291602001916138ee565b820191906000526020600020905b8154815290600101906020018083116138d157829003601f168201915b5050505050806020019051810190613906919061420d565b90507f97b173eb05a175e859879a5fdd1a42a734fccefb484285ebe978b63c4a3330bf8260405161393791906144bc565b60405180910390a161394b3415600d613d3f565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b03908116808852898501518216845233835260039095554360015587519384019490945290518316958201959095529351169083015290608001612d9e565b6139c16008600054146021613d3f565b6001546139d2908235146022613d3f565b6000808055600280546139e490614690565b80601f0160208091040260200160405190810160405280929190818152602001828054613a1090614690565b8015613a5d5780601f10613a3257610100808354040283529160200191613a5d565b820191906000526020600020905b815481529060010190602001808311613a4057829003601f168201915b5050505050806020019051810190613a75919061434d565b9050613a8981606001514310156023613d3f565b7f958f78ebab349905eb0abbf2926ea4aab4a0f19ea393268c746af21c24b4022282604051613ab891906145dd565b60405180910390a1613acc3415601f613d3f565b6040810151613b1c906001600160a01b03163314613af65781516001600160a01b03163314613af9565b60015b613b125760208201516001600160a01b03163314613b15565b60015b6020613d3f565b613b24613f2a565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184519316928101929092526060808501518451820152608085015182850180519190915260a086015181519093019290925281514393019290925260c084015190519091015261383d81613d68565b613ba96003600054146012613d3f565b600154613bba908235146013613d3f565b600080805560028054613bcc90614690565b80601f0160208091040260200160405190810160405280929190818152602001828054613bf890614690565b8015613c455780601f10613c1a57610100808354040283529160200191613c45565b820191906000526020600020905b815481529060010190602001808311613c2857829003601f168201915b5050505050806020019051810190613c5d9190614268565b90507fe92d4e1229145c13e718fdc692a322df4a6700c6bebac0841f0e9f44c56a152982604051613c8e91906145dd565b60405180910390a1613ca234156010613d3f565b6020810151613cbd906001600160a01b031633146011613d3f565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b870151821686528b8b0151821685524380845260049098556001979097558951958601969096529251851697840197909752519092169481019490945251908301529060a001612d9e565b81613d645760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b80602001516060015181600001516060015111613d86576000613d93565b6014816020015160200151105b15613e3257613da0614005565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151909216828401528351606090810151908401528084018051516080850152805182015160a08501525182015160c08401526008600055436001559051613e0e91839101614531565b6040516020818303038152906040526002908051906020019061383d929190613f61565b6040805160808101825260009181018281526060820183905281526020810191909152815160209081015182516001600160a01b03918216905283516040015183519116910152613d6481613ef9565b50565b613e8d614063565b60005b6014811015613ed957848160148110613eab57613eab61470c565b6020020151828260148110613ec257613ec261470c565b602002015280613ed1816146c5565b915050613e90565b5081818460148110613eed57613eed61470c565b60200201529392505050565b60008080556001819055613f0f90600290614091565b33ff5b6040518060200160405280613f25614063565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101613f256140cb565b828054613f6d90614690565b90600052602060002090601f016020900481019282613f8f5760008555613fd5565b82601f10613fa857805160ff1916838001178555613fd5565b82800160010185558215613fd5579182015b82811115613fd5578251825591602001919060010190613fba565b50613fe19291506140f9565b5090565b6040518060400160405280613ff861410e565b8152602001613f2561410e565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200161404f614063565b815260200160008152602001600081525090565b6040518061028001604052806014905b61407b61410e565b8152602001906001900390816140735790505090565b50805461409d90614690565b6000825580601f106140ad575050565b601f016020900490600052602060002090810190613e8291906140f9565b60405180608001604052806140de614063565b81526020016000815260200160008152602001600081525090565b5b80821115613fe157600081556001016140fa565b6040518061080001604052806040906020820280368337509192915050565b80516001600160a01b038116811461414457600080fd5b919050565b80356002811061414457600080fd5b6000610820828403121561416b57600080fd5b50919050565b60006020828403121561418357600080fd5b61418c82614149565b9392505050565b6000602082840312156141a557600080fd5b6040516020810181811067ffffffffffffffff821117156141c8576141c8614722565b6040526141d48361412d565b81529392505050565b600061082082840312156141f057600080fd5b61418c8383614158565b6000611040828403121561416b57600080fd5b60006040828403121561421f57600080fd5b6040516040810181811067ffffffffffffffff8211171561424257614242614722565b60405261424e8361412d565b815261425c6020840161412d565b60208201529392505050565b60006060828403121561427a57600080fd5b6040516060810181811067ffffffffffffffff8211171561429d5761429d614722565b6040526142a98361412d565b81526142b76020840161412d565b60208201526142c86040840161412d565b60408201529392505050565b6000608082840312156142e657600080fd5b6040516080810181811067ffffffffffffffff8211171561430957614309614722565b6040526143158361412d565b81526143236020840161412d565b60208201526143346040840161412d565b6040820152606083015160608201528091505092915050565b600061a0c0828403121561436057600080fd5b614368614607565b6143718361412d565b8152602061438081850161412d565b81830152604061439181860161412d565b818401526060850151606084015285609f8601126143ae57600080fd5b6143b6614630565b806080870161a0808801898111156143cd57600080fd5b60005b6014811015614440578a601f8401126143e857600080fd5b6143f0614654565b808461080086018e81111561440457600080fd5b60005b8a81101561442c57825161441a81614738565b8552938b0193918b0191600101614407565b5091885250958801959350506001016143d0565b506080870192909252505160a085015250505061a0a0929092015160c083015250919050565b60006040828403121561416b57600080fd5b8060005b6040811015612c4157813561449081614738565b60ff168452602093840193919091019060010161447c565b80358252613d646020830160208301614478565b61082081016144cb82846144a8565b92915050565b8135815261104081016144e660208401614149565b6002811061450457634e487b7160e01b600052602160045260246000fd5b60208301526145196040808401908501614478565b61084061452a818401828601614478565b5092915050565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501519084015260808085015161a0c085019390929185016000805b60148110156145bc57855183835b868110156145a557825160ff1682529187019190870190600101614586565b505050948401946108009290920191600101614578565b5050505060a085015161a080850152505060c09092015161a0a09091015290565b813581526040810160208301358015158082146145f957600080fd5b806020850152505092915050565b60405160e0810167ffffffffffffffff8111828210171561462a5761462a614722565b60405290565b604051610280810167ffffffffffffffff8111828210171561462a5761462a614722565b604051610800810167ffffffffffffffff8111828210171561462a5761462a614722565b6000821982111561468b5761468b6146e0565b500190565b600181811c908216806146a457607f821691505b6020821081141561416b57634e487b7160e01b600052602260045260246000fd5b60006000198214156146d9576146d96146e0565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60ff81168114613e8257600080fdfea2646970667358221220a0ce9c7218d72f5657dc0d3068429cf45d02c7bce4662b9c9696db52b003745364736f6c63430008070033`,
  BytecodeLen: 18893,
  Which: `oD`,
  version: 3,
  views: {
    NFT: {
      owner1: `NFT_owner1`,
      owner2: `NFT_owner2`
      }
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

