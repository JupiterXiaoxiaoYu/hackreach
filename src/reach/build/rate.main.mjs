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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0, ctc1],
      3: [ctc0, ctc0, ctc1, ctc0, ctc2],
      4: [ctc0, ctc0, ctc0, ctc2, ctc2],
      5: [ctc0, ctc0, ctc0, ctc2, ctc2],
      6: [ctc0, ctc0, ctc0, ctc2, ctc2],
      7: [ctc0, ctc0, ctc0, ctc2, ctc2],
      8: [ctc0, ctc0, ctc0, ctc2, ctc2],
      11: [ctc0, ctc0, ctc0, ctc2, ctc2],
      12: [ctc0, ctc0, ctc0, ctc2, ctc2]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v136, time: v135, didSend: v20, from: v134 } = txn1;
  ;
  const v141 = stdlib.protect(ctc0, await interact.getScore(), {
    at: './src/reach/rate.rsh:48:41:application',
    fs: ['at ./src/reach/rate.rsh:47:14:application call to [unknown function] (defined at: ./src/reach/rate.rsh:47:18:function exp)'],
    msg: 'getScore',
    who: 'FirBuyer'
    });
  const v142 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:57:31:application',
    fs: ['at ./src/reach/rate.rsh:49:56:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./src/reach/rate.rsh:47:14:application call to [unknown function] (defined at: ./src/reach/rate.rsh:47:18:function exp)'],
    msg: 'random',
    who: 'FirBuyer'
    });
  const v143 = stdlib.digest(ctc1, [v142, v141]);
  
  const txn2 = await (ctc.sendrecv({
    args: [v134, v143],
    evt_cnt: 1,
    funcNum: 1,
    lct: v135,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v146], secs: v148, time: v147, didSend: v34, from: v145 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v146], secs: v148, time: v147, didSend: v34, from: v145 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v154], secs: v156, time: v155, didSend: v44, from: v153 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v134, v145, v146, v153, v154, v142, v141],
    evt_cnt: 2,
    funcNum: 3,
    lct: v155,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v161, v162], secs: v164, time: v163, didSend: v55, from: v160 } = txn4;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v166 = stdlib.addressEq(v145, v160);
      stdlib.assert(v166, {
        at: './src/reach/rate.rsh:67:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const v167 = stdlib.digest(ctc1, [v161, v162]);
      const v168 = stdlib.digestEq(v146, v167);
      stdlib.assert(v168, {
        at: 'reach standard library:62:17:application',
        fs: ['at ./src/reach/rate.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
        msg: null,
        who: 'FirBuyer'
        });
      const v169 = stdlib.ge(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:20:decimal', stdlib.UInt_max, 8));
      const v170 = stdlib.ge(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:38:decimal', stdlib.UInt_max, 8));
      const v171 = v169 ? v170 : false;
      if (v171) {
        sim_r.isHalt = false;
        }
      else {
        const v239 = stdlib.le(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
        const v240 = stdlib.le(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
        const v241 = v239 ? v240 : false;
        const v243 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
        const v244 = v241 ? v243 : false;
        if (v244) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2),
            kind: 'from',
            to: v134,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc5, ctc2, ctc5, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v161, v162], secs: v164, time: v163, didSend: v55, from: v160 } = txn4;
  ;
  const v166 = stdlib.addressEq(v145, v160);
  stdlib.assert(v166, {
    at: './src/reach/rate.rsh:67:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FirBuyer'
    });
  const v167 = stdlib.digest(ctc1, [v161, v162]);
  const v168 = stdlib.digestEq(v146, v167);
  stdlib.assert(v168, {
    at: 'reach standard library:62:17:application',
    fs: ['at ./src/reach/rate.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
    msg: null,
    who: 'FirBuyer'
    });
  const v169 = stdlib.ge(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:20:decimal', stdlib.UInt_max, 8));
  const v170 = stdlib.ge(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:38:decimal', stdlib.UInt_max, 8));
  const v171 = v169 ? v170 : false;
  if (v171) {
    const v174 = stdlib.protect(ctc3, await interact.getChatInfo(), {
      at: './src/reach/rate.rsh:74:59:application',
      fs: ['at ./src/reach/rate.rsh:73:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:73:22:function exp)'],
      msg: 'getChatInfo',
      who: 'FirBuyer'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v134, v145, v153, v154, v162, v174],
      evt_cnt: 1,
      funcNum: 4,
      lct: v163,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v176], secs: v178, time: v177, didSend: v72, from: v175 } = txn5;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v180 = stdlib.addressEq(v145, v175);
        stdlib.assert(v180, {
          at: './src/reach/rate.rsh:76:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'FirBuyer'
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc5, ctc5, ctc5, ctc0, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v176], secs: v178, time: v177, didSend: v72, from: v175 } = txn5;
    ;
    const v180 = stdlib.addressEq(v145, v175);
    stdlib.assert(v180, {
      at: './src/reach/rate.rsh:76:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'FirBuyer'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v185], secs: v187, time: v186, didSend: v83, from: v184 } = txn6;
    ;
    const v189 = stdlib.addressEq(v153, v184);
    stdlib.assert(v189, {
      at: './src/reach/rate.rsh:83:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'FirBuyer'
      });
    stdlib.protect(ctc4, await interact.showChatInfo(v185), {
      at: './src/reach/rate.rsh:87:28:application',
      fs: ['at ./src/reach/rate.rsh:86:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:86:22:function exp)'],
      msg: 'showChatInfo',
      who: 'FirBuyer'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v134, v145, v153, v154, v162],
      evt_cnt: 0,
      funcNum: 6,
      lct: v186,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v194, time: v193, didSend: v92, from: v192 } = txn7;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v196 = stdlib.addressEq(v145, v192);
        stdlib.assert(v196, {
          at: './src/reach/rate.rsh:89:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'FirBuyer'
          });
        const v197 = stdlib.le(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
        const v198 = stdlib.le(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
        const v199 = v197 ? v198 : false;
        const v201 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
        const v202 = v199 ? v201 : false;
        if (v202) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2),
            kind: 'from',
            to: v134,
            tok: undefined
            });
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
      tys: [ctc5, ctc5, ctc5, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v194, time: v193, didSend: v92, from: v192 } = txn7;
    ;
    const v196 = stdlib.addressEq(v145, v192);
    stdlib.assert(v196, {
      at: './src/reach/rate.rsh:89:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'FirBuyer'
      });
    const v197 = stdlib.le(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v198 = stdlib.le(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v199 = v197 ? v198 : false;
    const v201 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v202 = v199 ? v201 : false;
    if (v202) {
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v207, time: v206, didSend: v107, from: v205 } = txn8;
      ;
      const v209 = stdlib.addressEq(v153, v205);
      stdlib.assert(v209, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      stdlib.protect(ctc4, await interact.showScore(v154), {
        at: './src/reach/rate.rsh:103:25:application',
        fs: ['at ./src/reach/rate.rsh:102:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:102:22:function exp)'],
        msg: 'showScore',
        who: 'FirBuyer'
        });
      
      const txn9 = await (ctc.sendrecv({
        args: [v134, v145, v153, v154, v162],
        evt_cnt: 0,
        funcNum: 8,
        lct: v206,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v214, time: v213, didSend: v116, from: v212 } = txn9;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v216 = stdlib.addressEq(v145, v212);
          stdlib.assert(v216, {
            at: './src/reach/rate.rsh:105:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'FirBuyer'
            });
          const v220 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), v162);
          sim_r.txns.push({
            amt: v162,
            kind: 'from',
            to: v153,
            tok: undefined
            });
          const v224 = stdlib.sub(v220, v154);
          sim_r.txns.push({
            amt: v154,
            kind: 'from',
            to: v145,
            tok: undefined
            });
          sim_r.txns.push({
            amt: v224,
            kind: 'from',
            to: v134,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc5, ctc5, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v214, time: v213, didSend: v116, from: v212 } = txn9;
      ;
      const v216 = stdlib.addressEq(v145, v212);
      stdlib.assert(v216, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const v220 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), v162);
      ;
      const v224 = stdlib.sub(v220, v154);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}
    
    
    }
  else {
    const v239 = stdlib.le(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v240 = stdlib.le(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v241 = v239 ? v240 : false;
    const v243 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v244 = v241 ? v243 : false;
    if (v244) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 9,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v249, time: v248, didSend: v107, from: v247 } = txn5;
      ;
      const v251 = stdlib.addressEq(v153, v247);
      stdlib.assert(v251, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      stdlib.protect(ctc4, await interact.showScore(v154), {
        at: './src/reach/rate.rsh:103:25:application',
        fs: ['at ./src/reach/rate.rsh:102:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:102:22:function exp)'],
        msg: 'showScore',
        who: 'FirBuyer'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v134, v145, v153, v154, v162],
        evt_cnt: 0,
        funcNum: 10,
        lct: v248,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v256, time: v255, didSend: v116, from: v254 } = txn6;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v258 = stdlib.addressEq(v145, v254);
          stdlib.assert(v258, {
            at: './src/reach/rate.rsh:105:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'FirBuyer'
            });
          const v262 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), v162);
          sim_r.txns.push({
            amt: v162,
            kind: 'from',
            to: v153,
            tok: undefined
            });
          const v266 = stdlib.sub(v262, v154);
          sim_r.txns.push({
            amt: v154,
            kind: 'from',
            to: v145,
            tok: undefined
            });
          sim_r.txns.push({
            amt: v266,
            kind: 'from',
            to: v134,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc5, ctc5, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v256, time: v255, didSend: v116, from: v254 } = txn6;
      ;
      const v258 = stdlib.addressEq(v145, v254);
      stdlib.assert(v258, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const v262 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), v162);
      ;
      const v266 = stdlib.sub(v262, v154);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}}
  
  
  
  
  };
export async function Oracle(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Oracle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:8:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v136, time: v135, didSend: v20, from: v134 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2),
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
  const {data: [], secs: v136, time: v135, didSend: v20, from: v134 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v146], secs: v148, time: v147, didSend: v34, from: v145 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v154], secs: v156, time: v155, didSend: v44, from: v153 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v161, v162], secs: v164, time: v163, didSend: v55, from: v160 } = txn4;
  ;
  const v166 = stdlib.addressEq(v145, v160);
  stdlib.assert(v166, {
    at: './src/reach/rate.rsh:67:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Oracle'
    });
  const v167 = stdlib.digest(ctc2, [v161, v162]);
  const v168 = stdlib.digestEq(v146, v167);
  stdlib.assert(v168, {
    at: 'reach standard library:62:17:application',
    fs: ['at ./src/reach/rate.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
    msg: null,
    who: 'Oracle'
    });
  const v169 = stdlib.ge(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:20:decimal', stdlib.UInt_max, 8));
  const v170 = stdlib.ge(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:38:decimal', stdlib.UInt_max, 8));
  const v171 = v169 ? v170 : false;
  if (v171) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v176], secs: v178, time: v177, didSend: v72, from: v175 } = txn5;
    ;
    const v180 = stdlib.addressEq(v145, v175);
    stdlib.assert(v180, {
      at: './src/reach/rate.rsh:76:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Oracle'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v185], secs: v187, time: v186, didSend: v83, from: v184 } = txn6;
    ;
    const v189 = stdlib.addressEq(v153, v184);
    stdlib.assert(v189, {
      at: './src/reach/rate.rsh:83:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Oracle'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v194, time: v193, didSend: v92, from: v192 } = txn7;
    ;
    const v196 = stdlib.addressEq(v145, v192);
    stdlib.assert(v196, {
      at: './src/reach/rate.rsh:89:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Oracle'
      });
    const v197 = stdlib.le(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v198 = stdlib.le(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v199 = v197 ? v198 : false;
    const v201 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v202 = v199 ? v201 : false;
    if (v202) {
      const txn8 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 7,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v207, time: v206, didSend: v107, from: v205 } = txn8;
      ;
      const v209 = stdlib.addressEq(v153, v205);
      stdlib.assert(v209, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 8,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v214, time: v213, didSend: v116, from: v212 } = txn9;
      ;
      const v216 = stdlib.addressEq(v145, v212);
      stdlib.assert(v216, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const v220 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), v162);
      ;
      const v224 = stdlib.sub(v220, v154);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}
    
    
    }
  else {
    const v239 = stdlib.le(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v240 = stdlib.le(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v241 = v239 ? v240 : false;
    const v243 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v244 = v241 ? v243 : false;
    if (v244) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 9,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v249, time: v248, didSend: v107, from: v247 } = txn5;
      ;
      const v251 = stdlib.addressEq(v153, v247);
      stdlib.assert(v251, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v256, time: v255, didSend: v116, from: v254 } = txn6;
      ;
      const v258 = stdlib.addressEq(v145, v254);
      stdlib.assert(v258, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const v262 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), v162);
      ;
      const v266 = stdlib.sub(v262, v154);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}}
  
  
  
  
  };
export async function SecBuyer(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for SecBuyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SecBuyer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v136, time: v135, didSend: v20, from: v134 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v146], secs: v148, time: v147, didSend: v34, from: v145 } = txn2;
  ;
  const v152 = stdlib.protect(ctc1, await interact.getScore(), {
    at: './src/reach/rate.rsh:59:51:application',
    fs: ['at ./src/reach/rate.rsh:58:16:application call to [unknown function] (defined at: ./src/reach/rate.rsh:58:20:function exp)'],
    msg: 'getScore',
    who: 'SecBuyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v134, v145, v146, v152],
    evt_cnt: 1,
    funcNum: 2,
    lct: v147,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v154], secs: v156, time: v155, didSend: v44, from: v153 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc5, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v154], secs: v156, time: v155, didSend: v44, from: v153 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v161, v162], secs: v164, time: v163, didSend: v55, from: v160 } = txn4;
  ;
  const v166 = stdlib.addressEq(v145, v160);
  stdlib.assert(v166, {
    at: './src/reach/rate.rsh:67:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'SecBuyer'
    });
  const v167 = stdlib.digest(ctc2, [v161, v162]);
  const v168 = stdlib.digestEq(v146, v167);
  stdlib.assert(v168, {
    at: 'reach standard library:62:17:application',
    fs: ['at ./src/reach/rate.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
    msg: null,
    who: 'SecBuyer'
    });
  const v169 = stdlib.ge(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:20:decimal', stdlib.UInt_max, 8));
  const v170 = stdlib.ge(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:38:decimal', stdlib.UInt_max, 8));
  const v171 = v169 ? v170 : false;
  if (v171) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc3],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v176], secs: v178, time: v177, didSend: v72, from: v175 } = txn5;
    ;
    const v180 = stdlib.addressEq(v145, v175);
    stdlib.assert(v180, {
      at: './src/reach/rate.rsh:76:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'SecBuyer'
      });
    const v183 = stdlib.protect(ctc3, await interact.getChatInfo(), {
      at: './src/reach/rate.rsh:80:59:application',
      fs: ['at ./src/reach/rate.rsh:79:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:79:22:function exp)'],
      msg: 'getChatInfo',
      who: 'SecBuyer'
      });
    stdlib.protect(ctc4, await interact.showChatInfo(v176), {
      at: './src/reach/rate.rsh:81:28:application',
      fs: ['at ./src/reach/rate.rsh:79:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:79:22:function exp)'],
      msg: 'showChatInfo',
      who: 'SecBuyer'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v134, v145, v153, v154, v162, v183],
      evt_cnt: 1,
      funcNum: 5,
      lct: v177,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v185], secs: v187, time: v186, didSend: v83, from: v184 } = txn6;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v189 = stdlib.addressEq(v153, v184);
        stdlib.assert(v189, {
          at: './src/reach/rate.rsh:83:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'SecBuyer'
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc5, ctc5, ctc5, ctc1, ctc1, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v185], secs: v187, time: v186, didSend: v83, from: v184 } = txn6;
    ;
    const v189 = stdlib.addressEq(v153, v184);
    stdlib.assert(v189, {
      at: './src/reach/rate.rsh:83:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'SecBuyer'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 6,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v194, time: v193, didSend: v92, from: v192 } = txn7;
    ;
    const v196 = stdlib.addressEq(v145, v192);
    stdlib.assert(v196, {
      at: './src/reach/rate.rsh:89:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'SecBuyer'
      });
    const v197 = stdlib.le(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v198 = stdlib.le(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v199 = v197 ? v198 : false;
    const v201 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v202 = v199 ? v201 : false;
    if (v202) {
      stdlib.protect(ctc4, await interact.showScore(v162), {
        at: './src/reach/rate.rsh:97:25:application',
        fs: ['at ./src/reach/rate.rsh:96:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:96:22:function exp)'],
        msg: 'showScore',
        who: 'SecBuyer'
        });
      
      const txn8 = await (ctc.sendrecv({
        args: [v134, v145, v153, v154, v162],
        evt_cnt: 0,
        funcNum: 7,
        lct: v193,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v207, time: v206, didSend: v107, from: v205 } = txn8;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v209 = stdlib.addressEq(v153, v205);
          stdlib.assert(v209, {
            at: './src/reach/rate.rsh:99:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'SecBuyer'
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc5, ctc5, ctc5, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v207, time: v206, didSend: v107, from: v205 } = txn8;
      ;
      const v209 = stdlib.addressEq(v153, v205);
      stdlib.assert(v209, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const txn9 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 8,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v214, time: v213, didSend: v116, from: v212 } = txn9;
      ;
      const v216 = stdlib.addressEq(v145, v212);
      stdlib.assert(v216, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const v220 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), v162);
      ;
      const v224 = stdlib.sub(v220, v154);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}
    
    
    }
  else {
    const v239 = stdlib.le(v162, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v240 = stdlib.le(v154, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v241 = v239 ? v240 : false;
    const v243 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v244 = v241 ? v243 : false;
    if (v244) {
      stdlib.protect(ctc4, await interact.showScore(v162), {
        at: './src/reach/rate.rsh:97:25:application',
        fs: ['at ./src/reach/rate.rsh:96:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:96:22:function exp)'],
        msg: 'showScore',
        who: 'SecBuyer'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v134, v145, v153, v154, v162],
        evt_cnt: 0,
        funcNum: 9,
        lct: v163,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v249, time: v248, didSend: v107, from: v247 } = txn5;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v251 = stdlib.addressEq(v153, v247);
          stdlib.assert(v251, {
            at: './src/reach/rate.rsh:99:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'SecBuyer'
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc5, ctc5, ctc5, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v249, time: v248, didSend: v107, from: v247 } = txn5;
      ;
      const v251 = stdlib.addressEq(v153, v247);
      stdlib.assert(v251, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v256, time: v255, didSend: v116, from: v254 } = txn6;
      ;
      const v258 = stdlib.addressEq(v145, v254);
      stdlib.assert(v258, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const v262 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:16:decimal', stdlib.UInt_max, 2), v162);
      ;
      const v266 = stdlib.sub(v262, v154);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}}
  
  
  
  
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
// "./src/reach/rate.rsh:44:8:dot"
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
// "./src/reach/rate.rsh:44:8:dot"
// "[]"
int 2
dup
bz l2
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
l2:
pop
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
bz l3
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
int 32
==
assert
dup
store 254
pop
// "CheckPay"
// "./src/reach/rate.rsh:52:12:dot"
// "[]"
load 255
txn Sender
concat
load 254
concat
int 1
bzero
dig 1
substring 0 96
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
l3:
// Handler 2
dup
int 2
==
bz l4
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
dup
substring 64 96
store 253
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 252
pop
// "CheckPay"
// "./src/reach/rate.rsh:61:12:dot"
// "[]"
load 255
load 254
concat
load 253
concat
txn Sender
concat
load 252
itob
concat
int 1
bzero
dig 1
substring 0 127
app_global_put
byte base64(AQ==)
dig 1
substring 127 136
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
l4:
// Handler 3
dup
int 3
==
bz l5
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
byte base64(AQ==)
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
substring 96 128
store 252
dup
substring 128 136
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
substring 0 8
btoi
store 250
dup
substring 8 16
btoi
store 249
pop
// "CheckPay"
// "./src/reach/rate.rsh:67:12:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:67:12:dot"
// "[]"
load 254
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./src/reach/rate.rsh:68:18:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 253
load 250
itob
load 249
itob
concat
sha256
==
assert
load 249
int 8
>=
load 251
int 8
>=
&&
bz l6
load 255
load 254
concat
load 252
concat
load 251
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
substring 0 112
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
l6:
load 249
int 10
<=
load 251
int 10
<=
&&
int 2
int 20
>=
&&
bz l7
load 255
load 254
concat
load 252
concat
load 251
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
substring 0 112
app_global_put
pop
int 11
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l7:
int 2
dup
bz l8
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
load 255
dig 1
gtxns Receiver
==
assert
l8:
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
l9:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5:
// Handler 4
dup
int 4
==
bz l10
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
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 64
==
assert
dup
store 250
pop
// "CheckPay"
// "./src/reach/rate.rsh:76:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:76:14:dot"
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
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
substring 0 112
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l10:
// Handler 5
dup
int 5
==
bz l11
pop
// check step
int 5
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
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 64
==
assert
dup
store 250
pop
// "CheckPay"
// "./src/reach/rate.rsh:83:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:83:14:dot"
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
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
substring 0 112
app_global_put
pop
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l11:
// Handler 6
dup
int 6
==
bz l12
pop
// check step
int 6
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
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/reach/rate.rsh:89:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:89:14:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
int 10
<=
load 252
int 10
<=
&&
int 2
int 20
>=
&&
bz l13
load 255
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
substring 0 112
app_global_put
pop
int 7
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l13:
int 2
dup
bz l14
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
load 255
dig 1
gtxns Receiver
==
assert
l14:
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
l15:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l12:
// Handler 7
dup
int 7
==
bz l16
pop
// check step
int 7
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
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/reach/rate.rsh:99:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:99:14:dot"
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
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
substring 0 112
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
l16:
// Handler 8
dup
int 8
==
bz l17
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
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/reach/rate.rsh:105:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:105:14:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l18
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
load 253
dig 1
gtxns Receiver
==
assert
l18:
pop
load 252
dup
bz l19
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
load 254
dig 1
gtxns Receiver
==
assert
l19:
pop
int 2
load 251
-
load 252
-
dup
bz l20
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
load 255
dig 1
gtxns Receiver
==
assert
l20:
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
l21:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l17:
// Handler 9
dup
int 9
==
bz l22
pop
// check step
int 11
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
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/reach/rate.rsh:99:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:99:14:dot"
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
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
substring 0 112
app_global_put
pop
int 12
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l22:
// Handler 10
dup
int 10
==
bz l23
pop
// check step
int 12
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
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./src/reach/rate.rsh:105:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:105:14:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l24
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
load 253
dig 1
gtxns Receiver
==
assert
l24:
pop
load 252
dup
bz l25
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
load 254
dig 1
gtxns Receiver
==
assert
l25:
pop
int 2
load 251
-
load 252
-
dup
bz l26
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
load 255
dig 1
gtxns Receiver
==
assert
l26:
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
l27:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l23:
int 0
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
  stateKeys: 2,
  stateSize: 136,
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
        "internalType": "struct T2",
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
        "internalType": "struct T2",
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
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
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
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v161",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v162",
                "type": "uint256"
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
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v176",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
                "internalType": "uint8[64]",
                "name": "v185",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
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
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
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
        "internalType": "struct T2",
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
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
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
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
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
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
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
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v161",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v162",
                "type": "uint256"
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
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v176",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
                "internalType": "uint8[64]",
                "name": "v185",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
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
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
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
        "internalType": "struct T2",
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
        "internalType": "struct T2",
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
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620019d3380380620019d383398101604081905262000026916200019a565b6000805560408051825181526020808401511515908201527fcd3784b2810428b9f2b2dd7f396bb870a5f4b96dbfb942b22303c2c03fab95e2910160405180910390a162000079346002146007620000ca565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c1929190620000f4565b50505062000242565b81620000f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001029062000205565b90600052602060002090601f01602090048101928262000126576000855562000171565b82601f106200014157805160ff191683800117855562000171565b8280016001018555821562000171579182015b828111156200017157825182559160200191906001019062000154565b506200017f92915062000183565b5090565b5b808211156200017f576000815560010162000184565b600060408284031215620001ad57600080fd5b604080519081016001600160401b0381118282101715620001de57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620001f957600080fd5b60208201529392505050565b600181811c908216806200021a57607f821691505b602082108114156200023c57634e487b7160e01b600052602260045260246000fd5b50919050565b61178180620002526000396000f3fe6080604052600436106100a05760003560e01c80638323075711610064578063832307571461010d5780638f2b37601461012f57806396ce286414610142578063b1adad0e14610155578063ee5e024714610168578063f37aba751461017b57600080fd5b806318097157146100ac578063306ab814146100c157806336cf6fa3146100d45780634666ce22146100e75780634ce4f265146100fa57600080fd5b366100a757005b600080fd5b6100bf6100ba36600461147d565b61018e565b005b6100bf6100cf36600461147d565b610337565b6100bf6100e2366004611459565b610552565b6100bf6100f536600461147d565b6106d1565b6100bf61010836600461147d565b61083d565b34801561011957600080fd5b5060015460405190815260200160405180910390f35b6100bf61013d366004611447565b610a26565b6100bf61015036600461147d565b610cc3565b6100bf61016336600461147d565b610e42565b6100bf61017636600461147d565b610f66565b6100bf610189366004611459565b611100565b61019e600760005414602161127f565b6001546101af90823514602261127f565b6000808055600280546101c190611716565b80601f01602080910402602001604051908101604052809291908181526020018280546101ed90611716565b801561023a5780601f1061020f5761010080835404028352916020019161023a565b820191906000526020600020905b81548152906001019060200180831161021d57829003601f168201915b50505050508060200190518101906102529190611574565b90507fcb45a45ee9bcb249ed4da96abdd690031bae5a2fd5b002493e0c78610e7c126a826040516102839190611634565b60405180910390a16102973415601f61127f565b60408101516102b2906001600160a01b03163314602061127f565b6102ba6112a4565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501519084015260808085015190840152600860005543600155905161030d91839101611675565b604051602081830303815290604052600290805190602001906103319291906112d2565b50505050565b610347600c60005414602d61127f565b60015461035890823514602e61127f565b60008080556002805461036a90611716565b80601f016020809104026020016040519081016040528092919081815260200182805461039690611716565b80156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b50505050508060200190518101906103fb9190611574565b90507fbc00bef455301cf914c30c8a9af2a81c4e58a53a327cc5726ef84b62ea9c1fc98260405161042c9190611634565b60405180910390a16104403415602b61127f565b602081015161045b906001600160a01b03163314602c61127f565b80604001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561049c573d6000803e3d6000fd5b5080602001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f193505050501580156104de573d6000803e3d6000fd5b5080600001516001600160a01b03166108fc82606001518360800151600261050691906116f1565b61051091906116f1565b6040518115909202916000818181858888f19350505050158015610538573d6000803e3d6000fd5b506000808055600181905561054f90600290611356565b33ff5b610562600460005414601561127f565b60015461057390823514601661127f565b60008080556002805461058590611716565b80601f01602080910402602001604051908101604052809291908181526020018280546105b190611716565b80156105fe5780601f106105d3576101008083540402835291602001916105fe565b820191906000526020600020905b8154815290600101906020018083116105e157829003601f168201915b50505050508060200190518101906106169190611574565b90507f271c892fa7cf24db9b83361023cc6c034d2116a64b9e7527175b6339b69b28f382604051610647919061161f565b60405180910390a161065b3415601361127f565b6020810151610676906001600160a01b03163314601461127f565b61067e6112a4565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501519084015260808085015190840152600560005543600155905161030d91839101611675565b6106e1600160005414600961127f565b6001546106f290823514600a61127f565b60008080556002805461070490611716565b80601f016020809104026020016040519081016040528092919081815260200182805461073090611716565b801561077d5780601f106107525761010080835404028352916020019161077d565b820191906000526020600020905b81548152906001019060200180831161076057829003601f168201915b505050505080602001905181019061079591906113ef565b90507fa08c449ed6ef7da678fe7758c5f03fb415c18ff52ea0281dc0c4f34e76337c9b826040516107c6919061165e565b60405180910390a16107da3415600861127f565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b039081168088523384528a850135835260029095554360015587519384019490945290519092169481019490945251908301529060800161030d565b61084d600660005414601d61127f565b60015461085e90823514601e61127f565b60008080556002805461087090611716565b80601f016020809104026020016040519081016040528092919081815260200182805461089c90611716565b80156108e95780601f106108be576101008083540402835291602001916108e9565b820191906000526020600020905b8154815290600101906020018083116108cc57829003601f168201915b50505050508060200190518101906109019190611574565b90507f2de542e04768f7d432d52df08943d2fab028221c30dba664ab546be3aae5e4a0826040516109329190611634565b60405180910390a16109463415601b61127f565b6020810151610961906001600160a01b03163314601c61127f565b600a8160800151111561097557600061097f565b600a816060015111155b61098a57600061098d565b60005b156109ed5761099a6112a4565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501519084015260808085015190840152600760005543600155905161030d91839101611675565b80516040516001600160a01b039091169060009060029082818181858883f19350505050158015610538573d6000803e3d6000fd5b5050565b610a36600360005414601161127f565b600154610a4790823514601261127f565b600080805560028054610a5990611716565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8590611716565b8015610ad25780601f10610aa757610100808354040283529160200191610ad2565b820191906000526020600020905b815481529060010190602001808311610ab557829003601f168201915b5050505050806020019051810190610aea919061150f565b604080518435815260208086013590820152848201358183015290519192507f50ba70e108cf0b98d2c9380757bd805c1176858d8c80b33125bd6a70c52bfbc7919081900360600190a1610b403415600e61127f565b6020810151610b5b906001600160a01b03163314600f61127f565b60408051610ba791610b8191602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c826040015114601061127f565b600860408301351015610bbb576000610bc5565b6008816080015110155b15610c2e57610bd26112a4565b81516001600160a01b039081168252602080840151821681840152606080850151909216604080850191909152608080860151938501939093528581013592840192909252600460005543600155905161030d91839101611675565b600a60408301351115610c42576000610c4c565b600a816080015111155b610c57576000610c5a565b60005b156109ed57610c676112a4565b81516001600160a01b039081168252602080840151821681840152606080850151909216604080850191909152608080860151938501939093528581013592840192909252600b60005543600155905161030d91839101611675565b610cd3600b60005414602961127f565b600154610ce490823514602a61127f565b600080805560028054610cf690611716565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2290611716565b8015610d6f5780601f10610d4457610100808354040283529160200191610d6f565b820191906000526020600020905b815481529060010190602001808311610d5257829003601f168201915b5050505050806020019051810190610d879190611574565b90507f20946629c27bb4ab46740868cd074b2845a9d6ffb97be0e379492342bc24d52582604051610db89190611634565b60405180910390a1610dcc3415602761127f565b6040810151610de7906001600160a01b03163314602861127f565b610def6112a4565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501519084015260808085015190840152600c60005543600155905161030d91839101611675565b610e52600860005414602561127f565b600154610e6390823514602661127f565b600080805560028054610e7590611716565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea190611716565b8015610eee5780601f10610ec357610100808354040283529160200191610eee565b820191906000526020600020905b815481529060010190602001808311610ed157829003601f168201915b5050505050806020019051810190610f069190611574565b90507f958f78ebab349905eb0abbf2926ea4aab4a0f19ea393268c746af21c24b4022282604051610f379190611634565b60405180910390a1610f4b3415602361127f565b602081015161045b906001600160a01b03163314602461127f565b610f76600260005414600c61127f565b600154610f8790823514600d61127f565b600080805560028054610f9990611716565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc590611716565b80156110125780601f10610fe757610100808354040283529160200191611012565b820191906000526020600020905b815481529060010190602001808311610ff557829003601f168201915b505050505080602001905181019061102a9190611499565b90507f45a833c7565d6ca4fdb6f6763deee76a95044357f9a5c5b1bab583815d34b23b8260405161105b919061165e565b60405180910390a161106f3415600b61127f565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d015187523385528e89013583526003909955436001558b51978801989098529451871699860199909952915190840152519092169481019490945251908301529060c00161030d565b611110600560005414601961127f565b60015461112190823514601a61127f565b60008080556002805461113390611716565b80601f016020809104026020016040519081016040528092919081815260200182805461115f90611716565b80156111ac5780601f10611181576101008083540402835291602001916111ac565b820191906000526020600020905b81548152906001019060200180831161118f57829003601f168201915b50505050508060200190518101906111c49190611574565b90507f8aa812419a663feeb79e70d57abd1351daa74fad4c1486deb3e92fd275947b1c826040516111f5919061161f565b60405180910390a16112093415601761127f565b6040810151611224906001600160a01b03163314601861127f565b61122c6112a4565b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501519084015260808085015190840152600660005543600155905161030d91839101611675565b81610a225760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b8280546112de90611716565b90600052602060002090601f0160209004810192826113005760008555611346565b82601f1061131957805160ff1916838001178555611346565b82800160010185558215611346579182015b8281111561134657825182559160200191906001019061132b565b50611352929150611393565b5090565b50805461136290611716565b6000825580601f10611372575050565b601f0160209004906000526020600020908101906113909190611393565b50565b5b808211156113525760008155600101611394565b80516001600160a01b03811681146113bf57600080fd5b919050565b600061082082840312156113d757600080fd5b50919050565b6000604082840312156113d757600080fd5b60006020828403121561140157600080fd5b6040516020810181811067ffffffffffffffff8211171561143257634e487b7160e01b600052604160045260246000fd5b60405261143e836113a8565b81529392505050565b6000606082840312156113d757600080fd5b6000610820828403121561146c57600080fd5b61147683836113c4565b9392505050565b60006040828403121561148f57600080fd5b61147683836113dd565b6000606082840312156114ab57600080fd5b6040516060810181811067ffffffffffffffff821117156114dc57634e487b7160e01b600052604160045260246000fd5b6040526114e8836113a8565b81526114f6602084016113a8565b6020820152604083015160408201528091505092915050565b600060a0828403121561152157600080fd5b6115296116ba565b611532836113a8565b8152611540602084016113a8565b60208201526040830151604082015261155b606084016113a8565b6060820152608083015160808201528091505092915050565b600060a0828403121561158657600080fd5b61158e6116ba565b611597836113a8565b81526115a5602084016113a8565b60208201526115b6604084016113a8565b604082015260608301516060820152608083015160808201528091505092915050565b8035825260208083018183016000805b604081101561161657823560ff8116808214611603578384fd5b85525092840192918401916001016115e9565b50505050505050565b610820810161162e82846115d9565b92915050565b8135815260408101602083013580151580821461165057600080fd5b806020850152505092915050565b81358152602080830135908201526040810161162e565b81516001600160a01b03908116825260208084015182169083015260408084015190911690820152606080830151908201526080918201519181019190915260a00190565b60405160a0810167ffffffffffffffff811182821017156116eb57634e487b7160e01b600052604160045260246000fd5b60405290565b60008282101561171157634e487b7160e01b600052601160045260246000fd5b500390565b600181811c9082168061172a57607f821691505b602082108114156113d757634e487b7160e01b600052602260045260246000fdfea2646970667358221220241242548e60a8fca57656a5b7371c38f7006d39cb7ad2c26bbd4515c2c1ba9964736f6c63430008070033`,
  BytecodeLen: 6611,
  Which: `oD`,
  version: 3,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

