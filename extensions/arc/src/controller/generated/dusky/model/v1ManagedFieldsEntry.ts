/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class V1ManagedFieldsEntry {
    'apiVersion'?: string;
    'fieldsType'?: string;
    'fieldsV1'?: object;
    'manager'?: string;
    'operation'?: string;
    'time'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "fieldsType",
            "baseName": "fieldsType",
            "type": "string"
        },
        {
            "name": "fieldsV1",
            "baseName": "fieldsV1",
            "type": "object"
        },
        {
            "name": "manager",
            "baseName": "manager",
            "type": "string"
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1ManagedFieldsEntry.attributeTypeMap;
    }
}
