export default class Buffer extends plv.EntityBase {
    constructor(label, efficiencyLevel){
        super();
        this._label = label;
        this._efficiencyLevel = efficiencyLevel;
    }

    get label() { return this._label; }
    get efficiencyLevel() { return this._efficiencyLevel; }
}
