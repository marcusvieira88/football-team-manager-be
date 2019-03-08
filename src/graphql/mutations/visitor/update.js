import {GraphQLBoolean, GraphQLNonNull} from 'graphql';
import visitorType from '../../types/visitor/update-input-visitor';
import VisitorSchema from '../../../models/VisitorSchema';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(visitorType)
        }
    },
    async resolve (root, params, options) {
        const updatedVisitor = await VisitorSchema.findOneAndUpdate(
            params.data.id, params.data);

        if (!updatedVisitor) {
            throw new Error('Error updating new visitor');
        }
        return true;
    }
};