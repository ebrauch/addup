var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
    _id   : {},
    player: String,
    fname:  String,
    lname:  String,
    pname:  String,
    pos1:   String,
    pos2:   String,
    height: Number,
    weight: Number,
    yob:    Number,
    bench:  Number,
    broad:  Number,
    dpos:   Number,
    col:    String,
    dv:     String,
    start:  Number,
    cteam:  String,
    posd:   String,
    jnum:   Number,
    dcp:    Number,
    LEAtt:  Number,
    LEYds:  Number,
    LTAtt:  Number,
    LTYds:  Number,
    LGAtt:  Number,
    LGYds:  Number,
    MDAtt:  Number,
    MDYds:  Number,
    RGAtt:  Number,
    RGYds:  Number,
    RTAtt:  Number,
    RTYds:  Number,
    REAtt:  Number,
    REYds:  Number,
    DMAtt:  Number,
    DMYds:  Number,
    DRAtt:  Number,
    DRYds:  Number,
    SRAtt:  Number,
    SRYds:  Number,
    SMAtt:  Number,
    SMYds:  Number,
    SLAtt:  Number,
    SLYds:  Number,
    DLAtt:  Number,
    DLYds:  Number,
});

var passSchema = mongoose.Schema({
    _id:  {},
    pid:  Number,
    psr:  String,
    trg:  String,
    loc:  String,
    yds:  Number,
    comp: Number,
    succ: Number,
    spk:  Number,
    dfb:  String
});

var rushSchema = mongoose.Schema({
    _id:  {},
    pid:  Number,
    bc:   String,
    dir:  String,
    yds:  Number,
    succ: Number,
    kne:  Number
})

module.exports = {
    playerSchema: mongoose.model('player', playerSchema, 'player'),
    passSchema: mongoose.model('pass', passSchema, 'pass'),
    rushSchema: mongoose.model('rush', rushSchema, 'rush')
}