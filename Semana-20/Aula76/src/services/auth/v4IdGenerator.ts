import { IdGeneratorGateway } from './../../business/gateways/auth/IdGeneratorGateway'
import { v4} from 'uuid'

export class V4IdGenerator implements IdGeneratorGateway {
    
    generateId(): string {
        return v4()
    }

} 