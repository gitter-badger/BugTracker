import * as Immutable from 'immutable';
import { ImplementsClass, ImplementsModel, ImplementsModels, ImplementsPoco } from '../../utils/model/meta';
import * as Models from '../models';

interface IUserModel {
    id: string;
    firstname: string;
    lastname: string;
    setId(id: string): UserModel;
    setFirstname(firstname: string): UserModel;
    setLastname(lastname: string): UserModel;
}

const UserModelRecord = Immutable.Record(<IUserModel>{
    id: <string>null,
    firstname: <string>null,
    lastname: <string>null
});

@ImplementsClass(UserModelRecord)
export class UserModel extends UserModelRecord implements IUserModel {
    @ImplementsPoco() public id: string;
    @ImplementsPoco() public firstname: string;
    @ImplementsPoco() public lastname: string;
    public setId(id: string): UserModel {
        return <UserModel>this.set("id", id);
    }
    public setFirstname(firstname: string): UserModel {
        return <UserModel>this.set("firstname", firstname);
    }
    public setLastname(lastname: string): UserModel {
        return <UserModel>this.set("lastname", lastname);
    }
    constructor() {
        super({});
    }
}