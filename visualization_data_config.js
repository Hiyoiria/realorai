/**
 * Visualization Data Configuration
 *
 * This file contains all the data and text content for the visualization.
 * Modify this file to update the content displayed in the visualization.
 */

const VISUALIZATION_CONFIG = {

    // ===== PART 1: OVERALL VIEW - DESCRIPTIVE STATISTICS =====

    overallStats: {
        totalPosts: 920,
        timePeriod: "July 2025 - October 2025",
        uniqueAuthors: 487,
        totalComments: 8342,
        verdictDistribution: {
            AI: 356,          // 38.7%
            Real: 229,        // 24.9%
            Unsure: 335       // 36.4%
        },
        postScoreStats: {
            mean: 139.3,
            median: 8,
            min: 0,
            max: 5729,
            std: 449.3
        },
        commentStats: {
            mean: 29.0,
            median: 14,
            min: 1,
            max: 544
        },
        hotPostsThreshold: 250,  // Top 10% score threshold
        hotPostsCount: 92
    },

    // ===== PART 2: DETAILED ANALYSIS - VALID POSTS =====

    validPostsStats: {
        totalPosts: 130,
        totalRationales: 5739,
        totalComments: 3471,
        rationalesPerPost: {
            mean: 44.15,
            median: 20,
            range: "1-1068"
        },
        imageFeatures: {
            entityCount: { mean: 1.9, std: 1.2 },
            sceneCount: { mean: 1.0, std: 0.9 },
            styleCount: { mean: 1.1, std: 1.1 }
        },
        botVerdictDistribution: {
            AI: 74,              // 56.9%
            Real: 51,            // 39.2%
            NoBotComment: 5      // 3.8%
        }
    },

    // ===== PART 3: ARGUMENTATION STRATEGIES =====

    strategies: [
        {
            id: 1,
            name: "Anatomy & Biological Structure",
            icon: "🧬",
            color: "#3b82f6",
            description: "Analysis of biological features like body parts, proportions, and anatomical correctness. Focuses on whether depicted anatomy follows natural laws.",
            examples: [
                "The fingers are bending backwards - anatomically impossible",
                "Hands have six fingers instead of five",
                "Eyes are asymmetrical in an unnatural way"
            ]
        },
        {
            id: 2,
            name: "Physics & Optics",
            icon: "💡",
            color: "#10b981",
            description: "Examination of lighting, shadows, reflections, and physical phenomena. Checks if light behavior and physics are realistic.",
            examples: [
                "Shadows fall in different directions",
                "Lighting source is inconsistent across the image",
                "Reflections don't match the environment"
            ]
        },
        {
            id: 3,
            name: "Object & Detail Integrity",
            icon: "🔍",
            color: "#f59e0b",
            description: "Scrutiny of object consistency, details, and coherence. Looks for object deformations, merging, or impossible structures.",
            examples: [
                "Text is gibberish and unreadable",
                "Objects are melting into each other",
                "Pattern repetition is too perfect"
            ]
        },
        {
            id: 4,
            name: "Scene & Situation Logic",
            icon: "🎬",
            color: "#8b5cf6",
            description: "Evaluation of contextual plausibility and scene composition. Assesses whether the depicted situation makes logical sense.",
            examples: [
                "This building doesn't exist in this city",
                "Weather conditions are contradictory",
                "Perspective doesn't follow vanishing point rules"
            ]
        },
        {
            id: 5,
            name: "Artistic Style & Technique",
            icon: "🎨",
            color: "#ec4899",
            description: "Analysis of artistic style, brush strokes, and aesthetic choices. Considers whether style is consistent with human or AI creation patterns.",
            examples: [
                "This is a typical Midjourney v6 aesthetic",
                "Brush strokes are too uniform",
                "Style mimics popular AI training data"
            ]
        },
        {
            id: 6,
            name: "Texture & Material",
            icon: "✨",
            color: "#06b6d4",
            description: "Examination of surface textures, materials, and their rendering quality. Checks for realistic material properties and texture consistency.",
            examples: [
                "Skin texture looks like plastic",
                "Fabric has unnatural smoothness",
                "Material rendering is too perfect"
            ]
        },
        {
            id: 7,
            name: "External Knowledge",
            icon: "📚",
            color: "#ef4444",
            description: "Application of domain expertise and external verification. Uses knowledge about specific subjects, brands, or historical facts.",
            examples: [
                "This car model doesn't exist",
                "This logo is incorrect for this brand",
                "Historical inaccuracy in depicted event"
            ]
        }
    ],

    // Strategy distribution data
    strategyDistribution: {
        AI: {
            "Scene & Situation Logic": 28.47,
            "Object & Detail Integrity": 21.19,
            "Anatomy & Biological Structure": 20.52,
            "Physics & Optics": 11.06,
            "Artistic Style & Technique": 8.98,
            "External Knowledge": 6.91,
            "Text, Symbols & Patterns": 2.87
        },
        Real: {
            "Object & Detail Integrity": 20.89,
            "External Knowledge": 19.19,
            "Scene & Situation Logic": 19.14,
            "Artistic Style & Technique": 15.23,
            "Anatomy & Biological Structure": 12.25,
            "Physics & Optics": 11.03,
            "Text, Symbols & Patterns": 2.28
        }
    },

    // Top entity-descriptor data for word clouds and flows
    entityDescriptorData: {
        AI: {
            topEntities: [
                { entity: "trash", count: 71, descriptors: ["unnatural", "inconsistency", "absent"] },
                { entity: "hand", count: 66, descriptors: ["anatomical anomaly", "quantity anomaly"] },
                { entity: "eye", count: 65, descriptors: ["anatomical anomaly", "unnatural"] },
                { entity: "shadow", count: 48, descriptors: ["inconsistency"] },
                { entity: "tooth", count: 44, descriptors: ["quantity anomaly"] },
                { entity: "tv", count: 37, descriptors: ["absent", "logic error"] },
                { entity: "hair", count: 35, descriptors: ["unnatural"] },
                { entity: "bag", count: 30, descriptors: ["unnatural"] },
                { entity: "finger", count: 30, descriptors: ["quantity anomaly", "anatomical anomaly"] },
                { entity: "physic", count: 29, descriptors: ["anomaly", "logic error"] }
            ],
            topDescriptors: [
                { descriptor: "unnatural", count: 214 },
                { descriptor: "inconsistency", count: 199 },
                { descriptor: "absent", count: 146 },
                { descriptor: "unrealistic", count: 127 },
                { descriptor: "anatomical anomaly", count: 92 },
                { descriptor: "logic error", count: 83 },
                { descriptor: "quantity anomaly", count: 82 },
                { descriptor: "artifact", count: 63 },
                { descriptor: "texture anomaly", count: 52 },
                { descriptor: "detail anomaly", count: 48 }
            ]
        },
        Real: {
            topEntities: [
                { entity: "detail", count: 32, descriptors: ["detail consistency", "detail coherence"] },
                { entity: "hand", count: 24, descriptors: ["anatomical accuracy"] },
                { entity: "video", count: 23, descriptors: ["historical context", "prior sighting"] },
                { entity: "artistic style", count: 22, descriptors: ["style consistency"] },
                { entity: "shadow", count: 21, descriptors: ["physical consistency"] },
                { entity: "light", count: 18, descriptors: ["lighting inconsistency"] },
                { entity: "glass", count: 16, descriptors: ["detail accuracy"] },
                { entity: "art style", count: 14, descriptors: ["style characteristic"] },
                { entity: "scene", count: 14, descriptors: ["plausible action"] },
                { entity: "hair", count: 14, descriptors: ["realistic detail"] }
            ],
            topDescriptors: [
                { descriptor: "artifact", count: 31 },
                { descriptor: "detail consistency", count: 29 },
                { descriptor: "overly perfect", count: 28 },
                { descriptor: "prior sighting", count: 17 },
                { descriptor: "detail coherence", count: 17 },
                { descriptor: "inconsistency", count: 15 },
                { descriptor: "detail accuracy", count: 15 },
                { descriptor: "consistency evidence", count: 14 },
                { descriptor: "provenance evidence", count: 13 },
                { descriptor: "anomaly", count: 13 }
            ]
        }
    },

    // ===== PART 4: GALLERY IMAGES =====

    galleryImages: [

        {
            postId: "1np1v6h",
            filename: "1np1v6h_ace81318e92ce606.jpg",
            botVerdict: "AI",
            communityVerdict: { AI: 8, Real: 1, Unsure: 1 },
            tags: ["Person", "Animal", "Cat"],
            title: "Cat Photo",
            topRationales: [
                {
                    verdict: "AI",
                    user: "iamsodonewithpeople",
                    score: 8,
                    text: "Considering that Etsy store has 3,420 items... all of which are prints. Yeah that's AI probably upscaled and a painting filter on-top of it.",
                    category: "External Knowledge & Source Comparison",
                    entity: "etsy store item",
                    descriptor: "quantity anomaly"
                },
                {
                    verdict: "Real",
                    user: "iamsodonewithpeople",
                    score: 3,
                    text: "I was looking for alternatives and this was one of the first things I found lol [omg I love this](https://www.pstrstudio.com/products/eniko-eged-black-cat?variant=46856818753874&currency=USD&gad_sourc",
                    category: "External Knowledge & Source Comparison",
                    entity: "external source",
                    descriptor: "source verification"
                },
                {
                    verdict: "AI",
                    user: "Typpicle",
                    score: 1,
                    text: "yes it's probably ai. her dress sleeve and and the cat's eye looks incoherent",
                    category: "Object & Detail Integrity",
                    entity: "dress sleeve",
                    descriptor: "detail incoherence"
                },
            ],
            visualAnnotations: {
                            "type": "cat",
                            "annotations": [
                                            {
                                                            "entity": "etsy store item",
                                                            "position": {
                                                                            "top": "40%",
                                                                            "left": "50%"
                                                            },
                                                            "size": {
                                                                            "width": "20%",
                                                                            "height": "25%"
                                                            },
                                                            "descriptor": "quantity anomaly",
                                                            "verdict": "AI",
                                                            "frequency": 1
                                            }
                            ]
            }
        },
        {
            postId: "1nukrfw",
            filename: "1nukrfw_3a2225b86bd18b6b.jpg",
            botVerdict: "AI",
            communityVerdict: { AI: 16, Real: 0, Unsure: 1 },
            tags: ["Person", "Illustration"],
            title: "Portrait",
            topRationales: [
                {
                    verdict: "AI",
                    user: "Lizzardbirdhybrid",
                    score: 8,
                    text: "It's AI, the dragon's pupil is strange and looks more like fire than an eye, the buttons on his shirt are blobby and have weird details on the inside, and his satch/belt across his chest clips onto th",
                    category: "Anatomy & Biological Structure",
                    entity: "pupil",
                    descriptor: "appearance anomaly"
                },
                {
                    verdict: "AI",
                    user: "Last-Ground-6353",
                    score: 7,
                    text: "That is not Tartaglia💀 that's just a blue eyed ginger. Thats not tartaglia's clothing, and if its a fanart an artist would follow his in game clothing or another outfit from his official art (like bir",
                    category: "Scene & Situation Logic",
                    entity: "character appearance",
                    descriptor: "inconsistency"
                },
                {
                    verdict: "AI",
                    user: "JoshsPizzaria",
                    score: 6,
                    text: "https://preview.redd.it/gqy8f668hcsf1.jpeg?width=896&format=pjpg&auto=webp&s=119f9f4f3373f3aae7109654f4d5501fb616b33e have you zoomed in on the clothes at all? no self respecting artist would post thi",
                    category: "Object & Detail Integrity",
                    entity: "clothing",
                    descriptor: "detail anomaly"
                },
            ],
            visualAnnotations: {
                            "type": "person",
                            "annotations": [
                                            {
                                                            "entity": "pupil",
                                                            "position": {
                                                                            "top": "40%",
                                                                            "left": "50%"
                                                            },
                                                            "size": {
                                                                            "width": "20%",
                                                                            "height": "25%"
                                                            },
                                                            "descriptor": "appearance anomaly",
                                                            "verdict": "AI",
                                                            "frequency": 1
                                            }
                            ]
            }
        },
        {
            postId: "1nrcy7c",
            filename: "1nrcy7c_05b2d0dd5c92b442.jpg",
            botVerdict: "AI",
            communityVerdict: { AI: 115, Real: 34, Unsure: 15 },
            tags: ["Person", "Portrait"],
            title: "Portrait",
            topRationales: [
                {
                    verdict: "AI",
                    user: "catgoesmlep",
                    score: 31,
                    text: "Ear looks weird to me. AI.",
                    category: "Anatomy & Biological Structure",
                    entity: "ear",
                    descriptor: "structural anomaly"
                },
                {
                    verdict: "AI",
                    user: "Old_Big9187",
                    score: 27,
                    text: "I think its ai, your right with the collar and the background and the eyes are also two different shapes in a funky ai kind of way",
                    category: "Object & Detail Integrity",
                    entity: "collar",
                    descriptor: "detail anomaly"
                },
                {
                    verdict: "Real",
                    user: "11Xoxol22",
                    score: 26,
                    text: "Bro I showed this to my stylist in 2019 why everyone is saying ai, what's wrong with you guys",
                    category: "External Knowledge & Source Comparison",
                    entity: "medium",
                    descriptor: "provenance evidence"
                },
            ],
            visualAnnotations: {
                            "type": "person",
                            "annotations": [
                                            {
                                                            "entity": "ear",
                                                            "position": {
                                                                            "top": "40%",
                                                                            "left": "50%"
                                                            },
                                                            "size": {
                                                                            "width": "20%",
                                                                            "height": "25%"
                                                            },
                                                            "descriptor": "structural anomaly",
                                                            "verdict": "AI",
                                                            "frequency": 1
                                            }
                            ]
            }
        },
        {
            postId: "1nryza9",
            filename: "1nryza9_fb3310fffaaef93e.jpg",
            botVerdict: "AI",
            communityVerdict: { AI: 62, Real: 0, Unsure: 7 },
            tags: ["Animal", "Cat", "Macro; Photograph"],
            title: "Cat Photo",
            topRationales: [
                {
                    verdict: "AI",
                    user: "iamcleek",
                    score: 189,
                    text: "the fish changes size (and appears to be made of cloth).",
                    category: "Scene & Situation Logic",
                    entity: "fish",
                    descriptor: "size inconsistency"
                },
                {
                    verdict: "AI",
                    user: "TrickyPersonality684",
                    score: 74,
                    text: "AI. The cat's fur is way too smooth, shiny and *perfectly dry* for a cat who just caught a fish. Also, look how smooth the pavement appears despite the pockmarks? There should be more variations in li",
                    category: "Anatomy & Biological Structure",
                    entity: "cat 's fur",
                    descriptor: "texture anomaly"
                },
                {
                    verdict: "AI",
                    user: "Hondaccord",
                    score: 56,
                    text: "Since it's an entirely different fish in the second image I think we can all see it's AI.",
                    category: "Object & Detail Integrity",
                    entity: "fish",
                    descriptor: "identity inconsistency"
                },
            ],
            visualAnnotations: {
                            "type": "cat",
                            "annotations": [
                                            {
                                                            "entity": "fish",
                                                            "position": {
                                                                            "top": "40%",
                                                                            "left": "50%"
                                                            },
                                                            "size": {
                                                                            "width": "20%",
                                                                            "height": "25%"
                                                            },
                                                            "descriptor": "size inconsistency",
                                                            "verdict": "AI",
                                                            "frequency": 1
                                            }
                            ]
            }
        },
        {
            postId: "1nxt89g",
            filename: "1nxt89g_c23137fbbf04ab8a.jpg",
            botVerdict: "Real",
            communityVerdict: { AI: 1, Real: 11, Unsure: 0 },
            tags: ["Animal", "Nature"],
            title: "Wildlife Scene",
            topRationales: [
                {
                    verdict: "Real",
                    user: "MistyRedcherry",
                    score: 34,
                    text: "Not AI. I found a nine year old post[here](https://www.facebook.com/share/p/1C4zDRkTXC/) about the artist who did those shots. They are staged but real.",
                    category: "External Knowledge & Source Comparison",
                    entity: "external source",
                    descriptor: "source find"
                },
                {
                    verdict: "Real",
                    user: "PsychologicalLet6251",
                    score: 5,
                    text: "The ones in the picture look alive, just confused lol",
                    category: "Anatomy & Biological Structure",
                    entity: "subject",
                    descriptor: "biological realism"
                },
                {
                    verdict: "Real",
                    user: "MistyRedcherry",
                    score: 5,
                    text: "From her own bio on one website it seems to be real animals that are her pet. I checked some of her work and it seems to be a lot of Photoshop and photography mixed together https://preview.redd.it/7h",
                    category: "External Knowledge & Source Comparison",
                    entity: "animal",
                    descriptor: "source verification"
                },
            ],
            visualAnnotations: {
                            "type": "mushroom",
                            "annotations": [
                                            {
                                                            "entity": "external source",
                                                            "position": {
                                                                            "top": "40%",
                                                                            "left": "50%"
                                                            },
                                                            "size": {
                                                                            "width": "20%",
                                                                            "height": "25%"
                                                            },
                                                            "descriptor": "source find",
                                                            "verdict": "Real",
                                                            "frequency": 1
                                            }
                            ]
            }
        }

    
    ],

    // ===== PART 5: HOT ENTITIES WORD CLOUD DATA =====

    hotEntities: [
        { name: "person", value: 56, verdict: "Mixed" },
        { name: "poster", value: 18, verdict: "Mixed" },
        { name: "cat", value: 9, verdict: "AI" },
        { name: "car", value: 6, verdict: "Mixed" },
        { name: "wheel", value: 5, verdict: "Mixed" },
        { name: "animal", value: 5, verdict: "Mixed" },
        { name: "footwear", value: 5, verdict: "Mixed" },
        { name: "girl", value: 5, verdict: "Mixed" },
        { name: "picture frame", value: 4, verdict: "Mixed" },
        { name: "house", value: 4, verdict: "Mixed" },
        { name: "table", value: 4, verdict: "Mixed" },
        { name: "flower", value: 3, verdict: "Real" },
        { name: "bird", value: 3, verdict: "Mixed" },
        { name: "helmet", value: 3, verdict: "Real" },
        { name: "monkey", value: 3, verdict: "Mixed" }
    ],

    // Image keyword data from Florence-2
    imageKeywords: {
        scenes: [
            { name: "indoor", count: 18 },
            { name: "room", count: 15 },
            { name: "plain_background", count: 13 },
            { name: "street", count: 12 },
            { name: "forest", count: 8 },
            { name: "night", count: 8 },
            { name: "city", count: 8 },
            { name: "shop", count: 7 },
            { name: "park", count: 6 },
            { name: "field", count: 4 },
            { name: "outdoor", count: 4 },
            { name: "rainy", count: 4 },
            { name: "mountain", count: 4 },
            { name: "garden", count: 3 },
            { name: "snowy", count: 3 }
        ],
        styles: [
            { name: "illustration", count: 36 },
            { name: "cartoon", count: 12 },
            { name: "photograph", count: 11 },
            { name: "black_and_white", count: 11 },
            { name: "digital_art", count: 10 },
            { name: "macro", count: 10 },
            { name: "painting", count: 9 },
            { name: "portrait", count: 8 },
            { name: "minimalist", count: 6 },
            { name: "landscape", count: 5 },
            { name: "modern", count: 4 },
            { name: "drawing", count: 3 },
            { name: "sketch", count: 3 },
            { name: "anime", count: 3 },
            { name: "realistic", count: 2 }
        ]
    },

    // ===== PART 6: SUMMARY CONCLUSIONS =====

    summaryConclusions: {
        overall: "Analyzed 920 posts from r/RealOrAI. AI verdict accounts for 38.7%, Real for 24.9%, and Unsure for 36.4%. Data shows AI content tends to generate higher-intensity community discussions. Posting peak occurs at 19:00 UTC.",
        detailedAnalysis: "Among 130 validated posts with comprehensive image analysis, the community provided 1,847 rationales. AI verdicts dominate at 59.0%, followed by Real at 33.6%. The most frequently used argumentation strategy for AI detection is 'Anatomy & Biological Structure' (25.5%), while for Real authentication, 'Object & Detail Integrity' leads (25.4%).",
        keyFindings: [
            "Hands (especially finger count) are the #1 AI detection signal",
            "Natural texture irregularity is the strongest Real authentication signal",
            "External knowledge verification is more common for Real verdicts (21.1% vs 10.8%)"
        ]
    }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VISUALIZATION_CONFIG;
}
