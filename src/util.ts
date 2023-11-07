export function makeTileLayer(map: Phaser.Tilemaps.Tilemap, tilesetName: string, assetKey: string, layerId: string) {
    const tileset = map.addTilesetImage(tilesetName, assetKey);

    return map.createLayer(layerId, tileset);
}
type ObjectProperty = {
    name: string;
    value: number | boolean | string;
};
export function getCustomPropertyValueFromObject(obj: Phaser.Types.Tilemaps.TiledObject, key: string) {
    return obj.properties.find((el: ObjectProperty) => el.name === key).value;
}
