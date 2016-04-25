var mongoose = require('mongoose');
var player = require('./schema.js').playerSchema;
var pass = require('./schema.js').passSchema;
var rush = require('./schema.js').rushSchema;

mongoose.connect(process.argv[2]);

updatePlayerStats();

function updatePlayerStats(){
    player.find({}, function(err, data){
        data.forEach(function(playerP){
            playerP.LEAtt = 0;
            playerP.LEYds = 0;
            playerP.LTAtt = 0;
            playerP.LTYds = 0;
            playerP.LGAtt = 0;
            playerP.LGYds = 0;
            playerP.MDAtt = 0;
            playerP.MDYds = 0;
            playerP.RGAtt = 0;
            playerP.RGYds = 0;
            playerP.RTAtt = 0;
            playerP.RTYds = 0;
            playerP.REAtt = 0;
            playerP.REYds = 0;
            playerP.DMAtt = 0;
            playerP.DMYds = 0;
            playerP.DRAtt = 0;
            playerP.DRYds = 0;
            playerP.SRAtt = 0;
            playerP.SRYds = 0;
            playerP.SMAtt = 0;
            playerP.SMYds = 0;
            playerP.SLAtt = 0;
            playerP.SLYds = 0;
            playerP.DLAtt = 0;
            playerP.DLYds = 0;
            updatePassStats(playerP, updateRushStats);
        })
    })
}

function updatePassStats(playerP, callback) {
    if (playerP.posd == 'QB') {
        pass.find({psr: playerP.player}, function(err, data){
            data.forEach(function(play){
                playerP[play.loc + 'Att']++;
                playerP[play.loc + 'Yds'] += play.yds;
            })
            callback(playerP)
        })
        player.update({player: playerP.player}, playerP).exec();
    }
    else {
        pass.find({trg: playerP.player}, function(err, data){
            data.forEach(function(play){
                playerP[play.loc + 'Att']++;
                playerP[play.loc + 'Yds'] += play.yds;
            })
            callback(playerP)
        })
    }
}

function updateRushStats(playerP, callback) {
    rush.find({bc: playerP.player}, function(err, data){
        data.forEach(function(play){
            playerP[play.dir + 'Att']++;
            playerP[play.dir + 'Yds'] += play.yds;
        })
        savePlayerStats(playerP)
    })
}

function savePlayerStats(playerP) {
        player.update({player: playerP.player}, playerP).exec();
        console.log(playerP.player + ' updated');
}