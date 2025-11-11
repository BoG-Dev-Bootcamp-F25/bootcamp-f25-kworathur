import mongoose, {
    
    Model,
    Schema,
    model,
    models,
} from 'mongoose'

const ticketSchema = new Schema({
    lineColor: {
        type: String,
        required: true
    },
    station: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

export const Ticket: Model<InferSchemaType<typeof ticketSchema>> =
    models.Ticket ?? model('Ticket', ticketSchema)
