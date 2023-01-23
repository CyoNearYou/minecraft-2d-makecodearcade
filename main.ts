scene.onOverlapTile(SpriteKind.Player, assets.tile`portal2`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile6`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tilemapLocation().column > 64 && mySprite.tilemapLocation().row < 64) {
        if (controller.down.isPressed()) {
            if (facing == 1) {
                if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom)))) {
                    tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`netherbrick`)
                    tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), true)
                }
            } else {
                if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom)))) {
                    tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`netherbrick`)
                    tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), true)
                }
            }
        } else {
            if (facing == 1) {
                if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right)))) {
                    tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`netherbrick`)
                    tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), true)
                }
            } else {
                if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)))) {
                    tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`netherbrick`)
                    tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), true)
                }
            }
        }
    } else {
        if (mySprite.tilemapLocation().row > 32) {
            if (controller.down.isPressed()) {
                if (facing == 1) {
                    if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom)))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`cobble`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), true)
                    }
                } else {
                    if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom)))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`cobble`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), true)
                    }
                }
            } else {
                if (facing == 1) {
                    if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right)))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`cobble`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), true)
                    }
                } else {
                    if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`cobble`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), true)
                    }
                }
            }
        } else {
            if (controller.down.isPressed()) {
                if (facing == 1) {
                    if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom)))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`wood0`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), true)
                    }
                } else {
                    if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom)))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`wood0`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), true)
                    }
                }
            } else {
                if (facing == 1) {
                    if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right)))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`wood0`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), true)
                    }
                } else {
                    if (!(tiles.tileAtLocationIsWall(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`wood0`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), true)
                    }
                }
            }
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        if (facing == 1) {
            if (mySprite.tilemapLocation().column > 64 && mySprite.tilemapLocation().row < 64) {
                if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                    tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`netherbg`)
                    tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), false)
                }
            } else {
                if (mySprite.tilemapLocation().row > 32) {
                    if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`stone_bg`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), false)
                    }
                } else {
                    if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), false)
                    }
                }
            }
        } else {
            if (mySprite.tilemapLocation().column > 64 && mySprite.tilemapLocation().row < 64) {
                if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                    tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`netherbg`)
                    tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), false)
                }
            } else {
                if (mySprite.tilemapLocation().row > 32) {
                    if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`stone_bg`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), false)
                    }
                } else {
                    if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Top), false)
                    }
                }
            }
        }
    } else {
        if (controller.right.isPressed()) {
            if (mySprite.tilemapLocation().column > 64 && mySprite.tilemapLocation().row < 64) {
                if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                    tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`netherbg`)
                    tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), false)
                }
            } else {
                if (mySprite.tilemapLocation().row > 32) {
                    if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`stone_bg`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), false)
                    }
                } else {
                    if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), false)
                    }
                }
            }
        } else if (controller.left.isPressed()) {
            if (mySprite.tilemapLocation().column > 64 && mySprite.tilemapLocation().row < 64) {
                if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                    tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`netherbg`)
                    tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), false)
                }
            } else {
                if (mySprite.tilemapLocation().row > 32) {
                    if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`stone_bg`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), false)
                    }
                } else {
                    if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`bedrok`))) {
                        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
                        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), false)
                    }
                }
            }
        } else {
            if (mySprite.tilemapLocation().column > 64 && mySprite.tilemapLocation().row < 64) {
                if (controller.down.isPressed()) {
                    if (facing == 1) {
                        if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bedrok`))) {
                            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`netherbg`)
                            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), false)
                        }
                    } else {
                        if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bedrok`))) {
                            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`netherbg`)
                            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), false)
                        }
                    }
                } else {
                    if (facing == 1) {
                        if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`bedrok`))) {
                            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`netherbg`)
                            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), false)
                        }
                    } else {
                        if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`bedrok`))) {
                            tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`netherbg`)
                            tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
                        }
                    }
                }
            } else {
                if (mySprite.tilemapLocation().row > 32) {
                    if (controller.down.isPressed()) {
                        if (facing == 1) {
                            if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bedrok`))) {
                                tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`stone_bg`)
                                tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), false)
                            }
                        } else {
                            if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bedrok`))) {
                                tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`stone_bg`)
                                tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), false)
                            }
                        }
                    } else {
                        if (facing == 1) {
                            if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`bedrok`))) {
                                tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`stone_bg`)
                                tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), false)
                            }
                        } else {
                            if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`bedrok`))) {
                                tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`stone_bg`)
                                tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
                            }
                        }
                    }
                } else {
                    if (controller.down.isPressed()) {
                        if (facing == 1) {
                            if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bedrok`))) {
                                tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                                tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Bottom), false)
                            }
                        } else {
                            if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`bedrok`))) {
                                tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
                                tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Bottom), false)
                            }
                        }
                    } else {
                        if (facing == 1) {
                            if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`bedrok`))) {
                                tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
                                tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), false)
                            }
                        } else {
                            if (!(tiles.tileAtLocationEquals(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`bedrok`))) {
                                tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency16`)
                                tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
                            }
                        }
                    }
                }
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.setLife(3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal1`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`stone bricks4`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`stone bricks3`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
})
let facing = 0
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`sky`)
tiles.setCurrentTilemap(tilemap`test area`)
info.setLife(3)
mySprite = sprites.create(assets.image`steve`, SpriteKind.Player)
scaling.scaleToPixels(mySprite, 32, ScaleDirection.Uniformly, ScaleAnchor.Middle)
controller.moveSprite(mySprite, 100, 0)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
forever(function () {
    if (controller.left.isPressed()) {
        if (controller.left.isPressed() && facing == 0) {
            mySprite.setImage(assets.image`steve0`)
        }
        if (controller.left.isPressed() && facing == 0) {
            pause(200)
        }
        if (controller.left.isPressed() && facing == 0) {
            mySprite.setImage(assets.image`steve`)
        }
        if (controller.left.isPressed() && facing == 0) {
            pause(200)
        }
        if (controller.left.isPressed() && facing == 0) {
            mySprite.setImage(assets.image`steve1`)
        }
        if (controller.left.isPressed() && facing == 0) {
            pause(200)
        }
        if (controller.left.isPressed() && facing == 0) {
            mySprite.setImage(assets.image`steve`)
        }
        if (controller.left.isPressed() && facing == 0) {
            pause(200)
        }
    } else if (controller.right.isPressed()) {
        if (controller.right.isPressed() && facing == 1) {
            mySprite.setImage(assets.image`steve2`)
        }
        if (controller.right.isPressed() && facing == 1) {
            pause(200)
        }
        if (controller.right.isPressed() && facing == 1) {
            mySprite.setImage(assets.image`steve4`)
        }
        if (controller.right.isPressed() && facing == 1) {
            pause(200)
        }
        if (controller.right.isPressed() && facing == 1) {
            mySprite.setImage(assets.image`steve3`)
        }
        if (controller.right.isPressed() && facing == 1) {
            pause(200)
        }
        if (controller.right.isPressed() && facing == 1) {
            mySprite.setImage(assets.image`steve4`)
        }
        if (controller.right.isPressed() && facing == 1) {
            pause(200)
        }
    } else if (controller.down.isPressed() && facing == 0) {
        mySprite.setImage(assets.image`crouch`)
    } else if (controller.down.isPressed() && facing == 1) {
        mySprite.setImage(assets.image`crouch0`)
    } else if (facing == 1) {
        mySprite.setImage(assets.image`steve4`)
    } else {
        if (facing == 0) {
            mySprite.setImage(assets.image`steve`)
        }
    }
})
forever(function () {
    scene.cameraFollowSprite(mySprite)
    mySprite.vy += 10
})
forever(function () {
    if (controller.up.isPressed()) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner0`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water full`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water0`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner1`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner2`)))) {
            mySprite.vy += -7.5
        }
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`lava`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`lava0`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner4`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner6`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner7`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner8`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water full0`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`lava1`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner11`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner12`))))))) {
            mySprite.vy += -5
        }
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`stone_bg4`)) {
        info.changeLifeBy(-3)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`lava`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`lava0`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner4`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner6`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner7`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner8`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water full0`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`lava1`) || (mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner11`) || mySprite.tileKindAt(TileDirection.Center, assets.tile`water corner12`))))))) {
        info.changeLifeBy(-1)
        pause(1000)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`magma`)) {
        info.changeLifeBy(-1)
        pause(1000)
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy += -150
        }
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        facing = 0
    }
    if (controller.right.isPressed()) {
        facing = 1
    }
})
